
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import TeamMemberModal from '@/components/TeamMemberModal';
import TeamHero from '@/components/TeamHero';
import TeamSection from '@/components/TeamSection';
import JoinTeamSection from '@/components/JoinTeamSection';
import { allTeamMembers } from '@/data/teamMembers';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openMemberDetail = (member: any) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const closeMemberDetail = () => {
    setModalOpen(false);
  };

  return (
    <Layout>
      <TeamHero />

      <TeamSection
        subtext="Our Team"
        title="GenMI Research Team"
        members={allTeamMembers}
        onMemberClick={openMemberDetail}
      />

      <JoinTeamSection />

      <TeamMemberModal 
        isOpen={modalOpen}
        onClose={closeMemberDetail}
        member={selectedMember}
      />
    </Layout>
  );
};

export default Team;
