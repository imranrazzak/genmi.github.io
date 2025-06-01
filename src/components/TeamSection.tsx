
import React from 'react';
import TeamMemberCard from '@/components/TeamMemberCard';
import SectionTitle from '@/components/SectionTitle';

interface TeamMember {
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
}

interface TeamSectionProps {
  subtext: string;
  title: string;
  members: TeamMember[];
  onMemberClick: (member: TeamMember) => void;
  backgroundColor?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({
  subtext,
  title,
  members,
  onMemberClick,
  backgroundColor = ''
}) => {
  return (
    <section className={`py-16 px-6 ${backgroundColor}`}>
      <div className="container mx-auto">
        <SectionTitle
          subtext={subtext}
          title={title}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <TeamMemberCard 
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              links={member.links}
              index={index}
              onClick={() => onMemberClick(member)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
