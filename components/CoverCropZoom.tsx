import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import type { Area } from 'react-easy-crop';
import 'react-easy-crop/react-easy-crop.css';
import { getCroppedDataUrl } from '../utils/cropImage';

interface CoverCropZoomProps {
  imageSrc: string;
  onComplete: (dataUrl: string) => void;
  onCancel: () => void;
}

const CoverCropZoom: React.FC<CoverCropZoomProps> = ({ imageSrc, onComplete, onCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);

  const onCropComplete = useCallback((_: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleConfirm = useCallback(async () => {
    if (!croppedAreaPixels) return;
    setIsConfirming(true);
    try {
      const dataUrl = await getCroppedDataUrl(imageSrc, croppedAreaPixels);
      onComplete(dataUrl);
    } catch (e) {
      console.error(e);
      alert('Failed to crop image.');
    } finally {
      setIsConfirming(false);
    }
  }, [imageSrc, croppedAreaPixels, onComplete]);

  return (
    <div className="fixed inset-0 z-[200] bg-bgMain flex flex-col">
      <div className="relative flex-1 min-h-0 w-full">
        <Cropper
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          aspect={4 / 5}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </div>
      <div className="flex gap-4 p-4 border-t border-paletteBorder">
        <label className="font-mono text-xs uppercase tracking-wider text-textPrimary">
          Zoom
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="ml-2 align-middle"
          />
        </label>
        <div className="flex gap-2 ml-auto">
          <button
            type="button"
            onClick={onCancel}
            className="font-mono text-sm uppercase tracking-wider px-4 py-2 border border-paletteBorder bg-bgMain text-textPrimary hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={!croppedAreaPixels || isConfirming}
            className="font-mono text-sm uppercase tracking-wider px-4 py-2 bg-accent text-white hover:opacity-90 disabled:opacity-50 transition-opacity duration-150 rounded-sm"
          >
            {isConfirming ? 'Processing…' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverCropZoom;
