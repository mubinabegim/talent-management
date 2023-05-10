import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Creativity',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Team-work',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Goal-oriented',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Adaptability',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Introvert',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Punctuality',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];


const ExampleChart = () => {
  return (
    <ResponsiveContainer width="45%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

ExampleChart.demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';

export default ExampleChart;
