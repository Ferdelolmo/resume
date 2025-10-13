import React from 'react';
import { Badge } from './badge';

interface TakeAwaysProps {
  skills: string[];
  company: string;
}

const TakeAways: React.FC<TakeAwaysProps> = ({ skills, company }) => {
  if (!skills || skills.length === 0) {
    return null;
  }

  const getCompanyColors = (company: string) => {
    switch (company) {
      case 'Grafana Labs':
        return {
          borderColor: 'orange',
          bgColor: 'rgba(255, 165, 0, 0.1)',
          iconColor: 'orange',
        };
      case 'Datadog':
        return {
          borderColor: 'purple',
          bgColor: 'rgba(128, 0, 128, 0.1)',
          iconColor: 'purple',
        };
      case 'VMware':
        return {
          borderColor: 'green',
          bgColor: 'rgba(0, 128, 0, 0.1)',
          iconColor: 'green',
        };
      default:
        return {
          borderColor: 'gray',
          bgColor: 'rgba(128, 128, 128, 0.1)',
          iconColor: 'gray',
        };
    }
  };

  const { borderColor, bgColor, iconColor } = getCompanyColors(company);

  return (
    <div className="mt-4">
      <h4 className="font-semibold text-l mb-2" style={{ color: borderColor }}>Take Aways</h4>
      <div 
        className="relative p-4 border-2 border-dashed rounded-lg"
        style={{ borderColor, backgroundColor: bgColor }}
      >
        <div 
          className="absolute -top-3 -left-3 w-8 h-8 bg-background border-2 border-dashed rounded-full flex items-center justify-center"
          style={{ borderColor }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-base px-3 py-1">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TakeAways;