import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ProjectAnimationProps {
  imageUrl: string;
}

const ProjectAnimation: React.FC<ProjectAnimationProps> = ({ imageUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef(new THREE.Vector2(9999, 9999));
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    setIsLoaded(false);

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let particles: THREE.Points;
    let animationFrameId: number;

    const PALETTE = {
      LIGHT: new THREE.Color('#e5e5e5'),
      MID: new THREE.Color('#a3a3a3'),
      DARK: new THREE.Color('#525252'),
      DARKEST: new THREE.Color('#171717')
    };

    const vertexShader = `
      attribute vec3 aCustomColor;
      attribute float aRandom;
      attribute float aBrightness;
      uniform float uTime;
      uniform vec2 uMouse;
      varying vec3 vColor;

      void main() {
        vColor = aCustomColor;
        vec3 pos = position;
        pos.z += sin(uTime * 1.2 + aRandom * 5.0) * (20.0 * aBrightness);
        float dx = pos.x - uMouse.x;
        float dy = pos.y - uMouse.y;
        float dist = sqrt(dx*dx + dy*dy);
        float interactionRadius = 180.0;
        if(dist < interactionRadius) {
          float force = (interactionRadius - dist) / interactionRadius;
          pos.z -= force * 140.0;
          pos.x += (dx / dist) * force * 40.0;
          pos.y += (dy / dist) * force * 40.0;
        }
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        float viewDist = max(1.0, -mvPosition.z);
        gl_PointSize = (8.0 * aBrightness) * (400.0 / viewDist);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        if(length(coord) > 0.5) discard;
        gl_FragColor = vec4(vColor, 1.0);
      }
    `;

    const init = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = (width * 9) / 16;
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf5f5f5);
      camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000);
      camera.position.z = 600;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const textureLoader = new THREE.TextureLoader();
      textureLoader.setCrossOrigin('anonymous');
      textureLoader.load(imageUrl, (texture) => {
        try {
          const img = texture.image;
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d', { willReadFrequently: true });
          if (!ctx) return;
          ctx.drawImage(img, 0, 0);
          const data = ctx.getImageData(0, 0, img.width, img.height).data;
          const geometry = new THREE.BufferGeometry();
          const positions = [];
          const colors = [];
          const randomness = [];
          const brightnessArray = [];
          const step = Math.max(3, Math.floor(img.width / 160));
          for (let y = 0; y < img.height; y += step) {
            for (let x = 0; x < img.width; x += step) {
              const index = (x + y * img.width) * 4;
              const r = data[index] / 255;
              const g = data[index + 1] / 255;
              const b = data[index + 2] / 255;
              const a = data[index + 3] / 255;
              const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
              if (a > 0.1) {
                positions.push(x - img.width / 2, -(y - img.height / 2), 0);
                let c;
                if (brightness < 0.2) c = PALETTE.DARKEST;
                else if (brightness < 0.45) c = PALETTE.DARK;
                else if (brightness < 0.7) c = PALETTE.MID;
                else c = PALETTE.LIGHT;
                colors.push(c.r, c.g, c.b);
                randomness.push(Math.random());
                brightnessArray.push(brightness);
              }
            }
          }
          geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
          geometry.setAttribute('aCustomColor', new THREE.Float32BufferAttribute(colors, 3));
          geometry.setAttribute('aRandom', new THREE.Float32BufferAttribute(randomness, 1));
          geometry.setAttribute('aBrightness', new THREE.Float32BufferAttribute(brightnessArray, 1));
          const material = new THREE.ShaderMaterial({
            uniforms: { uTime: { value: 0 }, uMouse: { value: mouseRef.current } },
            vertexShader,
            fragmentShader,
            transparent: true
          });
          particles = new THREE.Points(geometry, material);
          scene.add(particles);
          setIsLoaded(true);
        } catch (e) {
          console.error(e);
        }
      });
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (particles && particles.material instanceof THREE.ShaderMaterial) {
        particles.material.uniforms.uTime.value = performance.now() / 1000;
      }
      if (rendererRef.current && scene && camera) {
        rendererRef.current.render(scene, camera);
      }
    };

    init();
    animate();

    const onMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = event.clientX - rect.left - rect.width / 2;
      const y = -(event.clientY - rect.top - rect.height / 2);
      mouseRef.current.set(x, y);
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (rendererRef.current) {
        if (containerRef.current?.contains(rendererRef.current.domElement)) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current.dispose();
        rendererRef.current = null;
      }
    };
  }, [imageUrl]);

  return (
    <div ref={containerRef} className="w-full aspect-video bg-gray-100 overflow-hidden relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
          Loading…
        </div>
      )}
    </div>
  );
};

export default ProjectAnimation;
