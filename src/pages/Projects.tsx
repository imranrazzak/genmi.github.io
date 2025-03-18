
import React from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Calendar, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
  // Expanded projects data with 10 research projects
  const projects = [
    {
      title: "GifGenome",
      category: "GIF",
      description: "Interactive visualization of genomic data sequences through animated GIFs. Transforms complex genetic information into intuitive visual patterns for easier analysis.",
      image: "https://images.unsplash.com/photo-1542992015-3b760b0b5c19?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Marcus Johnson", "Dr. Aisha Rahman", "Maya Patel"],
      timeline: "2022 - Present",
      slug: "gif-genome"
    },
    {
      title: "MotionMed",
      category: "GIF",
      description: "Medical procedure animations in GIF format for patient education. Visualizes complex treatments and surgical processes to improve patient understanding and consent.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Sarah Chen", "Dr. James Wilson", "Lisa Chang"],
      timeline: "2023 - Present",
      slug: "motion-med"
    },
    {
      title: "CellularGIF",
      category: "GIF",
      description: "Microscopic cellular activity captured and converted to GIF format. Demonstrates real-time biological processes at the cellular level for research and educational purposes.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Sarah Chen", "Alex Winters"],
      timeline: "2023 - Present",
      slug: "cellular-gif"
    },
    {
      title: "NeuroCycle",
      category: "GIF",
      description: "Neural signal pattern animations for brain activity modeling. Visualizes complex neurological data as intuitive looping animations for clinical and research applications.",
      image: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Priya Sharma", "Carlos Rodriguez"],
      timeline: "2023 - Present",
      slug: "neuro-cycle"
    },
    {
      title: "MicroMotion",
      category: "GIF",
      description: "Microscope imaging capture converted to smooth GIF animations. Showcases microscopic organisms and cellular structures in motion for research visualization.",
      image: "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&q=80",
      status: "Completed" as const,
      team: ["Dr. Sarah Chen", "Maya Patel"],
      timeline: "2021 - 2023",
      slug: "micro-motion"
    },
    {
      title: "DiffusionFlow",
      category: "GIF",
      description: "GIF animations showing fluid and chemical diffusion processes. Captures and illustrates complex physical phenomena in simplified visual formats for research and education.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
      status: "Planning" as const,
      team: ["Dr. Marcus Johnson", "Lisa Chang"],
      timeline: "2024 - Future",
      slug: "diffusion-flow"
    },
    {
      title: "GIFTherapy",
      category: "GIF",
      description: "Therapeutic movement sequences as looping GIFs for patient rehabilitation. Provides visual guidance for physical therapy exercises and movement patterns.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. James Wilson", "Maya Patel", "Alex Winters"],
      timeline: "2022 - Present",
      slug: "gif-therapy"
    },
    {
      title: "MolecularGIF",
      category: "GIF",
      description: "Molecular interaction and binding processes visualized through GIF animations. Simplifies complex biochemical reactions for research and educational contexts.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
      status: "Active" as const,
      team: ["Dr. Priya Sharma", "Dr. Marcus Johnson"],
      timeline: "2023 - Present",
      slug: "molecular-gif"
    },
    {
      title: "HeartBeat",
      category: "GIF",
      description: "Cardiac cycle and blood flow patterns in GIF format. Creates visual representations of cardiovascular function for medical education and patient consultations.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      status: "Completed" as const,
      team: ["Dr. Sarah Chen", "Carlos Rodriguez"],
      timeline: "2021 - 2023",
      slug: "heart-beat"
    },
    {
      title: "BrainMap",
      category: "GIF",
      description: "Neural pathway activation patterns as animated GIF sequences. Visualizes brain activity during various cognitive tasks for neuroscience research and education.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      status: "Planning" as const,
      team: ["Dr. Aisha Rahman", "Lisa Chang", "Dr. Priya Sharma"],
      timeline: "2024 - Future",
      slug: "brain-map"
    }
  ];

  const [activeFilter, setActiveFilter] = React.useState<string>('All');
  const categories = ['All', 'GIF'];
  
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
              Pioneering Projects in <span className="text-gradient">GIF Animation</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our innovative research projects applying GIF animations to visualize complex medical and genomic data for research and education.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <Beaker className="mx-auto h-16 w-16 text-muted-foreground opacity-40" />
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
                We welcome collaborations with academic institutions, healthcare organizations, and industry partners who share our vision of advancing healthcare through innovative GIF visualizations.
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
