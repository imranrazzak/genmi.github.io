import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import TeamMemberCard from '@/components/TeamMemberCard';
import TeamMemberModal from '@/components/TeamMemberModal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      role: "Research Associate",
      image: "/lovable-uploads/ca9335a4-d06f-478f-a96b-1ed2f9106875.png",
      bio: "Expertise in Deep Learning, Audio Processing, and Computer Vision, developing AI models for perception, recognition, and signal analysis in real-world applications.",
      links: {
        email: "alex.winters@genmi-research.org",
        github: "https://github.com"
      }
    },
    {
      name: "Jianghao Wu",
      role: "Research Associate",
      image: "/lovable-uploads/507a8e64-b537-4c89-944a-400fc754b8a9.png",
      bio: "Focusing on multi-modal learning approaches combining genomic data with medical imaging for disease prediction.",
      links: {
        email: "maya.patel@genmi-research.org",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Zoey Yang",
      role: "Research Associate",
      image: "/lovable-uploads/c9b6564c-333a-415c-be46-00fc7353a16b.png",
      bio: "Leading research in computational pathology using deep learning to analyze histopathology images for early cancer detection and treatment guidance.",
      links: {
        email: "zoey.yang@genmi-research.org",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    }
  ];

  const gradStudents = [
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
    },
    {
      name: "Ubaid Azam",
      role: "PhD Student, Southampton University, UK",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=500",
      bio: "Researching novel applications of deep learning for medical image analysis and diagnostic support systems.",
      links: {
        email: "u.azam@soton.ac.uk",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Inamullah Khan",
      role: "PhD Student, Southampton University, UK",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&q=80&w=500",
      bio: "Developing advanced machine learning models for biomedical signal processing and health monitoring systems.",
      links: {
        email: "i.khan@soton.ac.uk",
        github: "https://github.com"
      }
    },
    {
      name: "Ghadir Alasawi",
      role: "PhD Student, UNSW",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
      bio: "Focusing on AI-driven approaches for early disease detection through multimodal biomedical data analysis.",
      links: {
        email: "g.alasawi@unsw.edu.au",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Ruyi Zhang",
      role: "PhD Student, UNSW",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500",
      bio: "Investigating machine learning applications for genomic data interpretation and personalized treatment recommendations.",
      links: {
        email: "r.zhang@unsw.edu.au",
        github: "https://github.com"
      }
    },
    {
      name: "Arthur Chen",
      role: "PhD Student, UNSW",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500",
      bio: "Researching generative AI models for synthetic medical data generation with privacy preservation guarantees.",
      links: {
        email: "a.chen@unsw.edu.au",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Ali Almutari",
      role: "PhD Student, UNSW",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500",
      bio: "Working on explainable AI frameworks for healthcare applications to improve clinical adoption and trust.",
      links: {
        email: "a.almutari@unsw.edu.au",
        github: "https://github.com"
      }
    },
    {
      name: "Abdulrahman",
      role: "PhD Student, UNSW",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500",
      bio: "Developing reinforcement learning approaches for adaptive clinical decision support in complex disease management.",
      links: {
        email: "abdulrahman@unsw.edu.au",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Abdulsalam",
      role: "PhD Student, UNSW",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500",
      bio: "Researching federated learning approaches for privacy-preserving medical data analysis across institutions.",
      links: {
        email: "abdulsalam@unsw.edu.au",
        github: "https://github.com"
      }
    },
    {
      name: "Sajid Javed",
      role: "PhD Student, UNSW",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500",
      bio: "Exploring advanced computer vision techniques for medical imaging analysis and diagnostic support systems.",
      links: {
        email: "s.javed@unsw.edu.au",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Dawn Lin",
      role: "PhD Student, UNSW",
      image: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?auto=format&fit=crop&q=80&w=500",
      bio: "Investigating natural language processing approaches for biomedical literature analysis and knowledge extraction.",
      links: {
        email: "d.lin@unsw.edu.au",
        github: "https://github.com"
      }
    },
    {
      name: "Abdulrahman Alotaibi",
      role: "PhD Student, UNSW",
      image: "https://images.unsplash.com/photo-1584999734482-0361aecad844?auto=format&fit=crop&q=80&w=500",
      bio: "Researching deep learning algorithms for medical image segmentation and disease classification.",
      links: {
        email: "a.alotaibi@unsw.edu.au",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Karthin Bhat",
      role: "PhD Student, UNSW",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=500",
      bio: "Focusing on natural language processing for medical text analysis and automated diagnosis assistance.",
      links: {
        email: "k.bhat@unsw.edu.au",
        github: "https://github.com"
      }
    },
    {
      name: "Ngoc Nguyen",
      role: "PhD Student, Deakin University",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=500",
      bio: "Exploring the intersection of computer vision and healthcare for automated diagnostic systems.",
      links: {
        email: "ngoc.nguyen@deakin.edu.au",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Abdullah Alsubhani",
      role: "PhD Student, UTS",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=500",
      bio: "Developing novel approaches for multimodal learning in healthcare applications.",
      links: {
        email: "abdullah.alsubhani@uts.edu.au",
        github: "https://github.com"
      }
    },
    {
      name: "Shen Lingzhi",
      role: "PhD Student, Southampton University, UK",
      image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&q=80&w=500",
      bio: "Investigating reinforcement learning techniques for personalized treatment recommendations.",
      links: {
        email: "s.lingzhi@soton.ac.uk",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Muhammad Umar",
      role: "Master's Student, UNSW",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=500",
      bio: "Working on machine learning approaches for medical time-series data analysis and prediction.",
      links: {
        email: "m.umar@unsw.edu.au",
        github: "https://github.com"
      }
    },
    {
      name: "Qian Shenyang",
      role: "PhD Student, UNSW",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=500",
      bio: "Specializing in medical image segmentation using deep learning approaches for improved diagnostic accuracy.",
      links: {
        email: "q.shenyang@unsw.edu.au",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "AbdulRehman Alalwai",
      role: "PhD Student, UNSW",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=500",
      bio: "Researching explainable AI systems for healthcare to improve clinical decision support interpretability.",
      links: {
        email: "a.alalwai@unsw.edu.au",
        github: "https://github.com"
      }
    },
    {
      name: "Anmol Goyal",
      role: "PhD Student, UNSW",
      image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&q=80&w=500",
      bio: "Developing advanced machine learning models for biomedical data analysis and personalized treatment planning.",
      links: {
        email: "a.goyal@unsw.edu.au",
        linkedin: "https://linkedin.com"
      }
    }
  ];

  const pastMembers = [
    {
      name: "Dr. Sarah Williams",
      role: "Former Research Associate (2020-2023)",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=300",
      bio: "Contributed to pioneering work in medical image analysis using generative models. Now at Stanford University.",
      links: {
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Dr. Michael Chen",
      role: "Former Postdoctoral Fellow (2019-2022)",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=300",
      bio: "Led computational genomics projects focused on variant calling algorithms. Currently at Broad Institute.",
      links: {
        website: "https://example.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Dr. Emily Johnson",
      role: "Former PhD Student (2018-2023)",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300",
      bio: "Dissertation on deep learning methods for multimodal medical data fusion. Now at Google Health.",
      links: {
        github: "https://github.com",
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
            title="Research Team"
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
            subtext="Graduate Researchers"
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
              <Link
                to="/open-positions"
                className="bg-genmi-600 text-white rounded-full px-8 py-3 font-medium hover:bg-genmi-700 transition-colors inline-block"
              >
                View Open Positions
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-genmi-50/30">
        <div className="container mx-auto">
          <SectionTitle
            subtext="Alumni"
            title="Past Members"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {pastMembers.map((member, index) => (
              <div key={member.name} className="flex gap-4 bg-white p-4 rounded-xl border border-border">
                <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-genmi-600 text-sm font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{member.bio}</p>
                  
                  {member.links && (
                    <div className="mt-2 flex space-x-2">
                      {member.links.website && (
                        <a 
                          href={member.links.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-genmi-600 hover:underline"
                        >
                          Website
                        </a>
                      )}
                      {member.links.linkedin && (
                        <a 
                          href={member.links.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-genmi-600 hover:underline"
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.links.github && (
                        <a 
                          href={member.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-genmi-600 hover:underline"
                        >
                          GitHub
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

      <TeamMemberModal 
        isOpen={modalOpen}
        onClose={closeMemberDetail}
        member={selectedMember}
      />
    </Layout>
  );
};

export default Team;
