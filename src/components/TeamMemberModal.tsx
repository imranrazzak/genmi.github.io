
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ExternalLink, Mail, Linkedin, Github, User } from 'lucide-react';

interface TeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: {
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
  } | null;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ isOpen, onClose, member }) => {
  if (!member) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">{member.name}</DialogTitle>
          <DialogDescription className="text-genmi-600 font-medium">{member.role}</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="space-y-4">
            <div className="aspect-square w-full overflow-hidden rounded-lg">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {member.links && (
              <div className="flex space-x-4">
                {member.links.email && (
                  <a 
                    href={`mailto:${member.links.email}`} 
                    aria-label={`Email ${member.name}`}
                    className="text-muted-foreground hover:text-genmi-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
                {member.links.website && (
                  <a 
                    href={member.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s website`}
                    className="text-muted-foreground hover:text-genmi-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                {member.links.linkedin && (
                  <a 
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn profile`}
                    className="text-muted-foreground hover:text-genmi-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {member.links.github && (
                  <a 
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s GitHub profile`}
                    className="text-muted-foreground hover:text-genmi-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Biography</h3>
            <p className="text-muted-foreground">{member.bio}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberModal;
