import React from 'react';
import { Badge } from './badge';

interface TakeAwaysProps {
  skills: string[];
}

const TakeAways: React.FC<TakeAwaysProps> = ({ skills }) => {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <h4 className="font-semibold text-l mb-2 text-primary">Take Aways</h4>
      <div className="relative p-4 border-2 border-dashed border-primary rounded-lg bg-primary/10">
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-background border-2 border-dashed border-primary rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase text-primary"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
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
