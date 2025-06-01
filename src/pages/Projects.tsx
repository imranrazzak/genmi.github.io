
import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { ArrowUpRight, Brain, HeartPulse, Watch, Clock, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  status: 'Active' | 'Completed' | 'Planning';
  slug: string;
  index?: number;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  category,
  description,
  image,
  icon,
  status,
  slug,
  index = 0
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <span className="inline-flex justify-center items-center w-10 h-10 bg-genmi-50 text-genmi-600 rounded-full mr-3">
              {icon}
            </span>
            <span className="bg-genmi-50 text-genmi-600 px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === 'Active' ? 'bg-green-50 text-green-600' :
            status === 'Completed' ? 'bg-blue-50 text-blue-600' :
            'bg-amber-50 text-amber-600'
          }`}>
            {status}
          </span>
        </div>
        
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        
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
  const projects = [
    {
      title: "Early Breast Cancer Diagnosis with Multiomics",
      category: "Cancer Detection",
      description: "Developing advanced deep learning algorithms for early detection of breast cancer through AI-enhanced mammography analysis integrated with multiomics data. Our system combines convolutional neural networks with radiomics features and genomic, proteomic, and metabolomic data to identify subtle patterns and abnormalities that may be missed by traditional screening methods, enabling earlier intervention and improved patient outcomes through personalized risk assessment.",
      image: "/lovable-uploads/2d0c4d57-2ccd-4d0d-819d-70723389c1d0.png",
      icon: <Stethoscope className="h-5 w-5" />,
      status: "Active" as const,
      slug: "breast-cancer-diagnosis"
    },
    {
      title: "Advanced Medical Image Segmentation",
      category: "Image Segmentation",
      description: "Developing state-of-the-art deep learning models for automated segmentation of complex anatomical structures in multi-modal medical images. Our approach combines transformer architectures with traditional CNNs to achieve pixel-perfect delineation of organs, tumors, and pathological regions across CT, MRI, and ultrasound imaging.",
      image: "https://images.unsplash.com/photo-1559757175-7cb036e0159e?auto=format&fit=crop&q=80",
      icon: <Brain className="h-5 w-5" />,
      status: "Active" as const,
      slug: "medical-image-segmentation"
    },
    {
      title: "Genetic Variation in Cardiac Imaging",
      category: "Cardiac Analysis",
      description: "Investigating the relationship between genetic variants and cardiac morphology through advanced imaging analysis. This project combines genomic data with deep phenotyping from cardiac MRI to identify genetic determinants of heart structure and function, enabling personalized risk stratification and treatment planning.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80",
      icon: <HeartPulse className="h-5 w-5" />,
      status: "Active" as const,
      slug: "genetic-cardiac-variation"
    },
    {
      title: "Wearable Sensors for Continuous Health Monitoring",
      category: "Wearable Technology",
      description: "Creating an integrated system of wearable sensors and AI algorithms for real-time health monitoring and early disease detection. Our platform combines data from multiple sensor modalities with deep learning to track vital signs, activity patterns, and physiological parameters, enabling proactive healthcare interventions.",
      image: "https://images.unsplash.com/photo-1557825835-70d97c4aa567?auto=format&fit=crop&q=80",
      icon: <Watch className="h-5 w-5" />,
      status: "Active" as const,
      slug: "wearable-sensors"
    },
    {
      title: "Longitudinal Medical Image Analysis",
      category: "Temporal Analysis",
      description: "Pioneering techniques for analyzing medical images across time to track disease progression and treatment response. Our approach leverages recurrent neural networks and temporal attention mechanisms to detect subtle changes in imaging biomarkers over time, providing clinicians with powerful tools for monitoring chronic conditions.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      icon: <Clock className="h-5 w-5" />,
      status: "Active" as const,
      slug: "longitudinal-image-analysis"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6">
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
              Pioneering Projects in <span className="text-gradient">Health</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Explore our innovative research projects applying advanced AI techniques to medical imaging for improved diagnostics and patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.slug}
                {...project}
                index={index}
              />
            ))}
          </div>

          {/* Collaboration Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 bg-genmi-50/50 p-10 rounded-2xl"
          >
            <div className="max-w-3xl mx-auto text-center">
              <SectionTitle
                subtext="Collaboration"
                title="Interested in Working with Us?"
                alignment="center"
                className="mb-6"
              />
              <p className="text-muted-foreground text-lg mb-8">
                We welcome collaborations with academic institutions, healthcare organizations, and industry partners who share our vision of advancing healthcare through innovative AI-powered medical imaging.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-genmi-600 hover:bg-genmi-700">
                  Propose a Collaboration
                </Button>
                <Button variant="outline">
                  Learn About Our Process
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
