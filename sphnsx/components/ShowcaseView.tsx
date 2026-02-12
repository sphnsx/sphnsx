import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThreeColumnLayout from './ThreeColumnLayout';
import ModularSection from './ModularSection';
import { PortfolioData, Project } from '../types';

const PREVIEW_INTRO_LENGTH = 180;

const ProjectPreview: React.FC<{ project: Project }> = ({ project }) => (
  <Link to={`/project/${project.id}`} className="block">
    <ModularSection
      title={project.title}
      preview={
        project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            style={{ pointerEvents: 'none' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-mono text-xs text-neutral-400 uppercase tracking-wider">
            No image
          </div>
        )
      }
      hoverContent={
        project.description
          ? `${project.description.slice(0, PREVIEW_INTRO_LENGTH)}${project.description.length > PREVIEW_INTRO_LENGTH ? '…' : ''}`
          : null
      }
    />
  </Link>
);

const ShowcaseView: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const location = useLocation();
  const mid = Math.ceil(data.projects.length / 2);
  const middleProjects = data.projects.slice(0, mid);
  const rightProjects = data.projects.slice(mid);

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string })?.scrollTo;
    if (scrollTo === 'about') document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (scrollTo === 'contact') document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.state]);

  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <ThreeColumnLayout
      scrollToAbout={scrollToAbout}
      scrollToContact={scrollToContact}
      middle={
        <div id="about">
          <ModularSection
            title="About me"
            preview={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-24 h-24 border-2 border-black bg-neutral-200 flex items-center justify-center font-mono text-2xl font-semibold shrink-0">
                  S
                </div>
              </div>
            }
            hoverContent={
              data.aboutMe
                ? `${data.aboutMe.slice(0, PREVIEW_INTRO_LENGTH)}${data.aboutMe.length > PREVIEW_INTRO_LENGTH ? '…' : ''}`
                : null
            }
          />
          {middleProjects.map((project) => (
            <ProjectPreview key={project.id} project={project} />
          ))}
        </div>
      }
      right={
        <div id="contact">
          {rightProjects.map((project) => (
            <ProjectPreview key={project.id} project={project} />
          ))}
          {/* Contact section */}
          <ModularSection
            title="Contact"
            preview={
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                Get in touch
              </span>
            }
            hoverContent={
              <>
                <a href="mailto:hello@sphnsx.net" className="text-black underline font-medium">
                  hello@sphnsx.net
                </a>
                <br />
                <a href="#" className="text-black underline font-medium">
                  Instagram
                </a>
              </>
            }
          />
        </div>
      }
    />
  );
};

export default ShowcaseView;
