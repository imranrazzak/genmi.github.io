
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import TeamMemberModal from '@/components/TeamMemberModal';
import TeamHero from '@/components/TeamHero';
import TeamSection from '@/components/TeamSection';
import JoinTeamSection from '@/components/JoinTeamSection';
import PastMembersSection from '@/components/PastMembersSection';
import { facultyMembers, postdocs, gradStudents, pastMembers } from '@/data/teamMembers';

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
        subtext="Leadership"
        title="Faculty Members"
        members={facultyMembers}
        onMemberClick={openMemberDetail}
      />

      <TeamSection
        subtext="Researchers"
        title="Research Team"
        members={postdocs}
        onMemberClick={openMemberDetail}
        backgroundColor="bg-genmi-50/50"
      />

      <TeamSection
        subtext="Graduate Researchers"
        title="Graduate Researchers"
        members={gradStudents}
        onMemberClick={openMemberDetail}
      />

      <JoinTeamSection />

      <PastMembersSection members={pastMembers} />

      <TeamMemberModal 
        isOpen={modalOpen}
        onClose={closeMemberDetail}
        member={selectedMember}
      />
    </Layout>
  );
};

export default Team;
