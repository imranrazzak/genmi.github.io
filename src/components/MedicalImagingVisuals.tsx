
import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Sample data for visualizations
const diagnosticAccuracyData = [
  { year: 2018, human: 76, ai: 74 },
  { year: 2019, human: 78, ai: 80 },
  { year: 2020, human: 77, ai: 85 },
  { year: 2021, human: 79, ai: 89 },
  { year: 2022, human: 80, ai: 92 },
  { year: 2023, human: 81, ai: 95 },
];

const modalityData = [
  { name: 'MRI', value: 35 },
  { name: 'CT Scan', value: 28 },
  { name: 'Ultrasound', value: 18 },
  { name: 'X-Ray', value: 14 },
  { name: 'PET', value: 5 },
];

const segmentationAccuracyData = [
  { name: 'Kidney', manual: 86, automated: 91 },
  { name: 'Liver', manual: 82, automated: 89 },
  { name: 'Brain', manual: 79, automated: 88 },
  { name: 'Lung', manual: 84, automated: 92 },
  { name: 'Heart', manual: 81, automated: 90 },
];

const COLORS = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9', '#10B981'];

const MedicalImagingVisuals = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-xl shadow-md"
      >
        <h3 className="text-xl font-semibold mb-4">AI vs Human Diagnostic Accuracy</h3>
        <p className="mb-4 text-muted-foreground">Comparison of diagnostic accuracy between AI models and human radiologists</p>
        <AspectRatio ratio={4/3} className="bg-background rounded-md">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={diagnosticAccuracyData}
              margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[70, 100]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="human"
                name="Human Radiologist"
                stroke="#0EA5E9"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="ai"
                name="AI Model"
                stroke="#8B5CF6"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </AspectRatio>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white p-6 rounded-xl shadow-md"
      >
        <h3 className="text-xl font-semibold mb-4">Medical Imaging Modalities</h3>
        <p className="mb-4 text-muted-foreground">Distribution of imaging techniques used in our research</p>
        <AspectRatio ratio={4/3} className="bg-background rounded-md">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={modalityData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {modalityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
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
        <h3 className="text-xl font-semibold mb-4">Organ Segmentation Accuracy</h3>
        <p className="mb-4 text-muted-foreground">Comparison of manual vs. AI-automated segmentation accuracy by organ</p>
        <AspectRatio ratio={16/9} className="bg-background rounded-md">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={segmentationAccuracyData}
              margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
            >
              <defs>
                <linearGradient id="colorManual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="colorAuto" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[75, 95]} />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="manual"
                name="Manual Segmentation"
                stroke="#0EA5E9"
                fillOpacity={1}
                fill="url(#colorManual)"
              />
              <Area
                type="monotone"
                dataKey="automated"
                name="AI Segmentation"
                stroke="#8B5CF6"
                fillOpacity={1}
                fill="url(#colorAuto)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </AspectRatio>
      </motion.div>
    </div>
  );
};

export default MedicalImagingVisuals;
