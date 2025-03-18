
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Calendar, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

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
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
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
  // Updated projects data with 10 medical imaging projects
  const projects = [
    {
      title: "Cardiovascular Image Segmentation",
      category: "Medical Imaging",
      description: "Advanced deep learning algorithms for automated segmentation of cardiac structures in MRI and CT scans, enabling precise quantification of cardiac function and pathology.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Sarah Chen", "Dr. James Wilson", "Lisa Chang"],
      timeline: "2022 - Present",
      slug: "cardiovascular-segmentation"
    },
    {
      title: "Retinal Image Analysis",
      category: "Medical Imaging",
      description: "AI-based detection and classification of diabetic retinopathy, glaucoma, and age-related macular degeneration from retinal fundus images and OCT scans.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Maya Patel", "Dr. Marcus Johnson", "Alex Winters"],
      timeline: "2023 - Present",
      slug: "retinal-analysis"
    },
    {
      title: "Multimodal Vision-Language Models",
      category: "AI Research",
      description: "Developing foundation models that integrate medical imaging with clinical text for comprehensive diagnosis assistance and medical report generation.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Priya Sharma", "Carlos Rodriguez", "Dr. James Wilson"],
      timeline: "2023 - Present",
      slug: "multimodal-vlm"
    },
    {
      title: "RAG for Medical Knowledge",
      category: "AI Research",
      description: "Retrieval Augmented Generation systems for evidence-based medical decision support, incorporating latest research findings and clinical guidelines.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Sarah Chen", "Dr. Marcus Johnson"],
      timeline: "2023 - Present",
      slug: "medical-rag"
    },
    {
      title: "3D Organ Reconstruction",
      category: "Medical Imaging",
      description: "Creating detailed 3D models of organs from 2D imaging slices using novel deep learning approaches, enhancing surgical planning and medical education.",
      image: "https://images.unsplash.com/photo-1542992015-3b760b0b5c19?auto=format&fit=crop&q=80",
      status: "Completed" as const,
      team: ["Dr. James Wilson", "Maya Patel", "Lisa Chang"],
      timeline: "2021 - 2023",
      slug: "3d-organ-reconstruction"
    },
    {
      title: "Brain Tumor Segmentation",
      category: "Medical Imaging",
      description: "Automated identification and precise delineation of brain tumors from multimodal MRI sequences, supporting treatment planning and monitoring.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Aisha Rahman", "Dr. Marcus Johnson", "Carlos Rodriguez"],
      timeline: "2022 - Present",
      slug: "brain-tumor-segmentation"
    },
    {
      title: "Federated Learning for Medical Data",
      category: "AI Research",
      description: "Privacy-preserving machine learning that enables model training across multiple institutions without sharing sensitive patient data.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      status: "Planning" as const,
      team: ["Dr. Priya Sharma", "Dr. Sarah Chen"],
      timeline: "2024 - Future",
      slug: "federated-learning"
    },
    {
      title: "Medical Image Synthesis",
      category: "Medical Imaging",
      description: "Generative models to create synthetic medical images for data augmentation, modality translation, and addressing rare disease representation.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Marcus Johnson", "Alex Winters", "Lisa Chang"],
      timeline: "2022 - Present",
      slug: "image-synthesis"
    },
    {
      title: "Explainable AI for Diagnostics",
      category: "AI Research",
      description: "Developing interpretable deep learning models for medical diagnosis that provide visual explanations for their predictions to build clinician trust.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. James Wilson", "Dr. Aisha Rahman", "Maya Patel"],
      timeline: "2023 - Present",
      slug: "explainable-ai"
    },
    {
      title: "Skin Lesion Classification",
      category: "Medical Imaging",
      description: "AI system for analyzing dermatological images to identify and classify skin conditions, including melanoma and other potentially malignant lesions.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80",
      status: "Completed" as const,
      team: ["Dr. Sarah Chen", "Carlos Rodriguez", "Dr. Priya Sharma"],
      timeline: "2021 - 2023",
      slug: "skin-lesion-classification"
    }
  ];

  const [activeFilter, setActiveFilter] = React.useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  // Get categories from projects
  const allCategories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

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
              Pioneering Projects in <span className="text-gradient">Medical Imaging</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our innovative research projects applying advanced AI techniques to medical imaging for improved diagnostics and patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Filter Section */}
      <section className="pb-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {allCategories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setCurrentPage(1); // Reset to first page when filter changes
                }}
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
            {currentProjects.map((project, index) => (
              <ProjectCard 
                key={project.slug}
                {...project}
                index={index}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Beaker className="mx-auto h-16 w-16 text-muted-foreground opacity-40" />
              <h3 className="mt-4 text-xl font-medium">No projects found</h3>
              <p className="mt-2 text-muted-foreground">Try selecting a different category filter.</p>
            </div>
          )}

          {/* Pagination */}
          {filteredProjects.length > projectsPerPage && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
                    </PaginationItem>
                  )}
                  
                  {Array.from({ length: Math.min(totalPages, 5) }).map((_, i) => {
                    let pageNumber;
                    
                    // Logic to display pages around current page
                    if (totalPages <= 5) {
                      pageNumber = i + 1;
                    } else if (currentPage <= 3) {
                      pageNumber = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNumber = totalPages - 4 + i;
                    } else {
                      pageNumber = currentPage - 2 + i;
                    }
                    
                    return (
                      <PaginationItem key={i}>
                        <PaginationLink 
                          isActive={currentPage === pageNumber}
                          onClick={() => setCurrentPage(pageNumber)}
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  })}
                  
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
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
                alignment="center"
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
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
