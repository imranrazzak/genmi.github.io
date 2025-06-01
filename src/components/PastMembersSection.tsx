
import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { ExternalLink, Linkedin, Github } from 'lucide-react';

interface PastMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  links?: {
    website?: string;
    linkedin?: string;
    github?: string;
  };
}

interface PastMembersSectionProps {
  members: PastMember[];
}

const PastMembersSection: React.FC<PastMembersSectionProps> = ({ members }) => {
  return (
    <section className="py-16 px-6 bg-genmi-50/30">
      <div className="container mx-auto">
        <SectionTitle
          subtext="Alumni"
          title="Past Members"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div key={member.name} className="flex gap-4 bg-white p-4 rounded-xl border border-border">
              <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-genmi-600 text-sm font-medium">{member.role}</p>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{member.bio}</p>
                
                {member.links && (
                  <div className="mt-2 flex space-x-3">
                    {member.links.website && (
                      <a 
                        href={member.links.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-genmi-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a 
                        href={member.links.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-genmi-600 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.links.github && (
                      <a 
                        href={member.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-genmi-600 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastMembersSection;
