
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import TeamMemberCard from '@/components/TeamMemberCard';
import TeamMemberModal from '@/components/TeamMemberModal';
import { motion } from 'framer-motion';

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

  const facultyMembers = [
    {
      name: "Imran Razzak",
      role: "Associate Professor",
      image: "/lovable-uploads/137aa101-1315-4d99-a774-655614ab111e.png",
      bio: "Imran specializes in human-centered AI with a patent-driven approach, focusing on early diagnosis. With over 15 years of expertise in computer vision, natural language processing, and healthcare AI applications, he brings deep technical and industry knowledge to the field.",
      links: {
        email: "imran.razzak@mbzuai.ac.ae",
        website: "https://imranrazzak.github.io/",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    }
  ];

  const postdocs = [
    {
      name: "Feilong Tang",
      role: "Research Associate",
      image: "/lovable-uploads/2d853ee5-6a95-428b-969e-da913c38d778.png",
      bio: "Specializing in generative models for medical data and multimodal vision-language models.",
      links: {
        email: "james.wilson@genmi-research.org",
        github: "https://github.com"
      }
    },
    {
      name: "Yulong Lu",
      role: "Research Associate",
      image: "/lovable-uploads/95a23e84-b459-4fbb-bbe4-11e1d34b9cee.png",
      bio: "Specializing in multiomics for genetic variation and biomarker discovery, integrating genomics, transcriptomics, and proteomics to uncover disease mechanisms and therapeutic targets.",
      links: {
        email: "aisha.rahman@genmi-research.org",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Ming Xu",
      role: "Research Associate",
      image: "/lovable-uploads/44846551-8156-4efd-9864-274a1280112a.png",
      bio: "Expertise in Robotics, Optimization, Control Theory, Machine Learning, and Computer Vision, developing intelligent systems for automation and real-world applications.",
      links: {
        email: "aisha.rahman@genmi-research.org",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Tony Alex",
      role: "PhD Candidate",
      image: "/lovable-uploads/ca9335a4-d06f-478f-a96b-1ed2f9106875.png",
      bio: "Expertise in Deep Learning, Audio Processing, and Computer Vision, developing AI models for perception, recognition, and signal analysis in real-world applications.",
      links: {
        email: "alex.winters@genmi-research.org",
        github: "https://github.com"
      }
    },
    {
      name: "Jiahong Wu",
      role: "PhD Candidate",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=500",
      bio: "Focusing on multi-modal learning approaches combining genomic data with medical imaging for disease prediction.",
      links: {
        email: "maya.patel@genmi-research.org",
        linkedin: "https://linkedin.com"
      }
    }
  ];

  const gradStudents = [
    {
      name: "Tony Alex",
      role: "PhD Candidate",
      image: "/lovable-uploads/ca9335a4-d06f-478f-a96b-1ed2f9106875.png",
      bio: "Expertise in Deep Learning, Audio Processing, and Computer Vision, developing AI models for perception, recognition, and signal analysis in real-world applications.",
      links: {
        email: "alex.winters@genmi-research.org",
        github: "https://github.com"
      }
    },
    {
      name: "Jiahong Wu",
      role: "PhD Candidate",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&q=80&w=500",
      bio: "Focusing on multi-modal learning approaches combining genomic data with medical imaging for disease prediction.",
      links: {
        email: "maya.patel@genmi-research.org",
        linkedin: "https://linkedin.com"
      }
    },
    
    {
      name: "Carlos Rodriguez",
      role: "PhD Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500",
      bio: "Developing reinforcement learning algorithms for adaptive treatment planning in personalized medicine.",
      links: {
        email: "carlos.rodriguez@genmi-research.org",
        github: "https://github.com"
      }
    },
    {
      name: "Lisa Chang",
      role: "Master's Student",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=500",
      bio: "Working on federated learning approaches for collaborative AI model training across healthcare institutions.",
      links: {
        email: "lisa.chang@genmi-research.org",
        linkedin: "https://linkedin.com"
      }
    }
  ];

  return (
    <Layout>
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block bg-genmi-50 text-genmi-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6">
              Meet the Minds Behind GenMI
            </h1>
            <p className="text-muted-foreground text-lg">
              Our diverse team of researchers, scientists, and students is dedicated to pushing the boundaries of what's possible with generative AI in healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            subtext="Leadership"
            title="Faculty Members"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <TeamMemberCard 
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                links={member.links}
                index={index}
                onClick={() => openMemberDetail(member)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-genmi-50/50">
        <div className="container mx-auto">
          <SectionTitle
            subtext="Researchers"
            title="Postdoctoral Fellows"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postdocs.map((member, index) => (
              <TeamMemberCard 
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                links={member.links}
                index={index}
                onClick={() => openMemberDetail(member)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <SectionTitle
            subtext="Students"
            title="Graduate Researchers"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gradStudents.map((member, index) => (
              <TeamMemberCard 
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                links={member.links}
                index={index}
                onClick={() => openMemberDetail(member)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-white border border-border rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Join Our Team</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                We're always looking for talented researchers and students who are passionate about using AI to transform healthcare. Check our openings or reach out directly.
              </p>
              <a
                href="#"
                className="bg-genmi-600 text-white rounded-full px-8 py-3 font-medium hover:bg-genmi-700 transition-colors inline-block"
              >
                View Open Positions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <TeamMemberModal 
        isOpen={modalOpen}
        onClose={closeMemberDetail}
        member={selectedMember}
      />
    </Layout>
  );
};

export default Team;
