import React from 'react';

interface KPIsProps {
  kpis: string[];
  company: string;
}

const KPIs: React.FC<KPIsProps> = ({ kpis, company }) => {
  if (!kpis || kpis.length === 0) {
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
      <h4 className="font-semibold text-l mb-2" style={{ color: borderColor }}>KPIs</h4>
      <div
        className="relative p-4 border-2 border-dashed rounded-lg"
        style={{ borderColor, backgroundColor: bgColor }}
      >
        <div
          className="absolute -top-3 -left-3 w-8 h-8 bg-background border-2 border-dashed rounded-full flex items-center justify-center"
          style={{ borderColor }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
        </div>
        <ul className="list-disc list-inside ml-2">
          {kpis.map((kpi, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              {kpi}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KPIs;
