
import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Calendar, Flask } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  image: string;
  status: 'Active' | 'Completed' | 'Planning';
  team: string[];
  timeline: string;
  slug: string;
  index?: number;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  category,
  description,
  image,
  status,
  team,
  timeline,
  slug,
  index = 0
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-md transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className="bg-genmi-50 text-genmi-600 px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'Active' ? 'bg-green-50 text-green-600' :
            status === 'Completed' ? 'bg-blue-50 text-blue-600' :
            'bg-amber-50 text-amber-600'
          }`}>
            {status}
          </span>
        </div>
        
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="border-t border-border pt-4 mt-4 grid grid-cols-2 gap-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-2" />
            <span>{team.length} members</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{timeline}</span>
          </div>
        </div>
        
        <Link
          to={`/projects/${slug}`}
          className="mt-5 inline-flex items-center text-sm font-medium text-genmi-600 hover:text-genmi-800 transition-colors"
        >
          View Project Details
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  // Sample projects data
  const projects = [
    {
      title: "GenomeGPT",
      category: "Genomics",
      description: "A transformer-based generative model for predicting gene expression patterns and genetic variations associated with diseases.",
      image: "https://images.unsplash.com/photo-1542992015-3b760b0b5c19?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Marcus Johnson", "Dr. Aisha Rahman", "Maya Patel"],
      timeline: "2022 - Present",
      slug: "genome-gpt"
    },
    {
      title: "MedSynthImager",
      category: "Medical Imaging",
      description: "Generating synthetic medical images to enhance diagnostic model training while addressing data scarcity and privacy concerns.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Sarah Chen", "Dr. James Wilson", "Lisa Chang"],
      timeline: "2023 - Present",
      slug: "medsynthimager"
    },
    {
      title: "PathoDiffusion",
      category: "Pathology",
      description: "Using diffusion models to enhance pathology images, highlighting abnormalities and improving diagnostic accuracy.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Sarah Chen", "Alex Winters"],
      timeline: "2023 - Present",
      slug: "pathodiffusion"
    },
    {
      title: "GeneXAI",
      category: "Explainable AI",
      description: "Developing interpretable models for genomic analysis that provide clinicians with clear explanations for AI-driven genomic insights.",
      image: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Priya Sharma", "Carlos Rodriguez"],
      timeline: "2023 - Present",
      slug: "genexai"
    },
    {
      title: "MRI Enhancement Network",
      category: "Medical Imaging",
      description: "AI-based methods for improving MRI image quality, reducing scan times, and enhancing diagnostic value with lower radiation exposure.",
      image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&q=80",
      status: "Completed" as const,
      team: ["Dr. Sarah Chen", "Maya Patel"],
      timeline: "2021 - 2023",
      slug: "mri-enhancement"
    },
    {
      title: "Federated Genomics",
      category: "Privacy-Preserving AI",
      description: "Framework for collaborative genomic research across institutions while preserving data privacy through federated learning.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
      status: "Planning" as const,
      team: ["Dr. Marcus Johnson", "Lisa Chang"],
      timeline: "2024 - Future",
      slug: "federated-genomics"
    }
  ];

  const [activeFilter, setActiveFilter] = React.useState<string>('All');
  const categories = ['All', 'Medical Imaging', 'Genomics', 'Pathology', 'Explainable AI', 'Privacy-Preserving AI'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block bg-genmi-50 text-genmi-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Our Research
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-6">
              Pioneering Projects in <span className="text-gradient">Medical AI</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our innovative research projects applying generative AI techniques to solve complex challenges in genomics and medical imaging.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Filter Section */}
      <section className="pb-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-genmi-600 text-white'
                    : 'bg-muted hover:bg-genmi-100 text-foreground hover:text-genmi-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.slug}
                {...project}
                index={index}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Flask className="mx-auto h-16 w-16 text-muted-foreground opacity-40" />
              <h3 className="mt-4 text-xl font-medium">No projects found</h3>
              <p className="mt-2 text-muted-foreground">Try selecting a different category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 px-6 bg-genmi-50/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle
                subtext="Collaboration"
                title="Interested in Working with Us?"
                center={true}
              />
              <p className="text-muted-foreground text-lg mb-8">
                We welcome collaborations with academic institutions, healthcare organizations, and industry partners who share our vision of advancing healthcare through AI innovation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#"
                  className="bg-genmi-600 text-white rounded-full px-6 py-3 font-medium hover:bg-genmi-700 transition-colors"
                >
                  Propose a Collaboration
                </a>
                <a
                  href="#"
                  className="text-foreground rounded-full px-6 py-3 font-medium border border-border hover:bg-white transition-colors"
                >
                  Learn About Our Process
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
