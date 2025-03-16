
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, Linkedin, Github } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  links?: {
    email?: string;
    website?: string;
    linkedin?: string;
    github?: string;
  };
  index?: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  image,
  bio,
  links,
  index = 0
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow duration-300"
    >
      <div className="aspect-[1/1] w-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-genmi-600 font-medium mt-1">{role}</p>
        <p className="text-muted-foreground mt-3 text-sm line-clamp-3">{bio}</p>
        
        {links && (
          <div className="mt-4 flex space-x-3">
            {links.email && (
              <a 
                href={`mailto:${links.email}`} 
                aria-label={`Email ${name}`}
                className="text-muted-foreground hover:text-genmi-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
            {links.website && (
              <a 
                href={links.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s website`}
                className="text-muted-foreground hover:text-genmi-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {links.linkedin && (
              <a 
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s LinkedIn profile`}
                className="text-muted-foreground hover:text-genmi-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {links.github && (
              <a 
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s GitHub profile`}
                className="text-muted-foreground hover:text-genmi-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
