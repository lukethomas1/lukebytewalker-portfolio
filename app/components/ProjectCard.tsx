import type React from 'react';
import { Link } from '@remix-run/react';

interface Technology {
  name: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies?: Technology[];
  stats?: {
    stars?: number;
    installs?: string;
    forks?: number;
  };
  isExternalLink?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  technologies = [],
  stats,
  isExternalLink = true,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 mb-10">
      {/* Project Image (takes full width on mobile, fixed width on desktop) */}
      <div className="w-full md:w-36 md:h-36 flex-shrink-0">
        <Link 
          to={projectUrl} 
          target={isExternalLink ? "_blank" : undefined} 
          rel={isExternalLink ? "noopener noreferrer" : undefined}
          className="block h-full"
        >
          <img 
            src={imageUrl} 
            alt={title} 
            className="rounded-md w-full h-full object-cover border border-gray-800 hover:border-[#64ffda]/50 transition-colors"
          />
        </Link>
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex items-start mb-1">
          <Link 
            to={projectUrl} 
            target={isExternalLink ? "_blank" : undefined} 
            rel={isExternalLink ? "noopener noreferrer" : undefined}
            className="group flex items-center"
          >
            <h3 className="text-xl font-semibold text-primary/80 group-hover:text-[#64ffda] transition-colors">
              {title}
            </h3>
            
            {isExternalLink && (
              <svg 
                className="ml-1 h-4 w-4 text-gray-400 group-hover:text-[#64ffda] transition-colors" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            )}
          </Link>
        </div>
        
        <p className="text-secondary text-sm mb-3">{description}</p>
        
        {/* Stats (stars, installs, etc.) */}
        {stats && (
          <div className="flex items-center space-x-3 mb-3">
            {stats.stars && (
              <div className="flex items-center text-gray-400 text-sm">
                <svg 
                  className="h-4 w-4 mr-1 text-gray-500" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{stats.stars.toLocaleString()}</span>
              </div>
            )}
            
            {stats.installs && (
              <div className="flex items-center text-gray-400 text-sm">
                <svg 
                  className="h-4 w-4 mr-1 text-gray-500" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span>{stats.installs}</span>
              </div>
            )}
            
            {stats.forks && (
              <div className="flex items-center text-gray-400 text-sm">
                <svg 
                  className="h-4 w-4 mr-1 text-gray-500" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v1h10V5a2 2 0 00-2-2H5zm9 4H6v10a2 2 0 002 2h4a2 2 0 002-2V7z" clipRule="evenodd" />
                </svg>
                <span>{stats.forks.toLocaleString()}</span>
              </div>
            )}
          </div>
        )}
        
        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {technologies.map((tech, index) => (
              <a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-xs rounded-full bg-[#112240] text-gray-300 hover:bg-[#233554] hover:text-[#64ffda] transition-colors"
              >
                {tech.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;