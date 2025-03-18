
import React from 'react';
import { 
  ResponsiveContainer, 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion } from 'framer-motion';

// Sample data for visualizations
const scatterData = [
  { x: 0.2, y: 0.3, z: 500, name: 'Gene A', type: 'RNA' },
  { x: 0.4, y: 0.8, z: 700, name: 'Gene B', type: 'RNA' },
  { x: 0.3, y: 0.5, z: 600, name: 'Gene C', type: 'RNA' },
  { x: 0.8, y: 0.2, z: 400, name: 'Gene D', type: 'RNA' },
  { x: 0.5, y: 0.1, z: 300, name: 'Gene E', type: 'DNA' },
  { x: 0.6, y: 0.6, z: 800, name: 'Gene F', type: 'DNA' },
  { x: 0.7, y: 0.7, z: 900, name: 'Gene G', type: 'DNA' },
  { x: 0.9, y: 0.4, z: 200, name: 'Gene H', type: 'DNA' },
  { x: 0.2, y: 0.6, z: 350, name: 'Gene I', type: 'Protein' },
  { x: 0.4, y: 0.3, z: 450, name: 'Gene J', type: 'Protein' },
  { x: 0.6, y: 0.2, z: 550, name: 'Gene K', type: 'Protein' },
  { x: 0.8, y: 0.1, z: 650, name: 'Gene L', type: 'Protein' },
];

const expressionData = [
  { name: 'Sample A', normal: 40, tumor: 80 },
  { name: 'Sample B', normal: 30, tumor: 60 },
  { name: 'Sample C', normal: 20, tumor: 90 },
  { name: 'Sample D', normal: 45, tumor: 75 },
  { name: 'Sample E', normal: 35, tumor: 85 },
  { name: 'Sample F', normal: 25, tumor: 95 },
];

const biomarkerData = [
  { name: 'Methylation', value: 35 },
  { name: 'mRNA', value: 25 },
  { name: 'miRNA', value: 15 },
  { name: 'Protein', value: 25 },
];

const COLORS = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9'];

const MultiomicsDashboard = () => {
  const chartConfig = {
    rna: {
      color: '#8B5CF6',
      label: 'RNA',
    },
    dna: {
      color: '#D946EF',
      label: 'DNA',
    },
    protein: {
      color: '#F97316',
      label: 'Protein',
    },
    normal: {
      color: '#0EA5E9',
      label: 'Normal',
    },
    tumor: {
      color: '#F97316',
      label: 'Tumor',
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-xl shadow-md"
      >
        <h3 className="text-xl font-semibold mb-4">Gene Expression Analysis</h3>
        <p className="mb-4 text-muted-foreground">Comparative gene expression levels between normal and tumor samples</p>
        <AspectRatio ratio={4/3} className="bg-background rounded-md">
          <ChartContainer className="w-full h-full p-4" config={chartConfig}>
            <BarChart data={expressionData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip 
                content={<ChartTooltipContent />}
              />
              <Legend />
              <Bar dataKey="normal" name="Normal Tissue" fill="#0EA5E9" />
              <Bar dataKey="tumor" name="Tumor Tissue" fill="#F97316" />
            </BarChart>
          </ChartContainer>
        </AspectRatio>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white p-6 rounded-xl shadow-md"
      >
        <h3 className="text-xl font-semibold mb-4">Multi-omics Data Integration</h3>
        <p className="mb-4 text-muted-foreground">Visualizing relationships between different types of omics data</p>
        <AspectRatio ratio={4/3} className="bg-background rounded-md">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="t-SNE 1" />
              <YAxis type="number" dataKey="y" name="t-SNE 2" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="RNA" data={scatterData.filter(d => d.type === 'RNA')} fill="#8B5CF6" />
              <Scatter name="DNA" data={scatterData.filter(d => d.type === 'DNA')} fill="#D946EF" />
              <Scatter name="Protein" data={scatterData.filter(d => d.type === 'Protein')} fill="#F97316" />
            </ScatterChart>
          </ResponsiveContainer>
        </AspectRatio>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-6 rounded-xl shadow-md md:col-span-2"
      >
        <h3 className="text-xl font-semibold mb-4">Biomarker Distribution</h3>
        <p className="mb-4 text-muted-foreground">Proportion of different biomarker types in precision medicine studies</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <AspectRatio ratio={1} className="bg-background rounded-md w-full max-w-xs">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={biomarkerData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {biomarkerData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </AspectRatio>
          <div className="space-y-4 w-full max-w-lg">
            <h4 className="font-medium text-lg">Key Findings from Multi-omics Integration</h4>
            <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
              <li>Integrated analysis of DNA methylation and mRNA expression reveals key regulatory mechanisms in cancer progression</li>
              <li>Protein biomarkers combined with genetic indicators provide 35% higher diagnostic accuracy</li>
              <li>miRNA signatures show strong correlation with treatment response in clinical trials</li>
              <li>Multi-modal data integration enables personalized treatment planning with improved outcomes</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MultiomicsDashboard;
