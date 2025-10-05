"use client"

import { PieChart, Pie, Cell } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"

const dailyRoutine = [
  { name: 'morning', value: 10, label: 'Morning Alignment & Updates' },
  { name: 'product', value: 15, label: 'Product & Enablement Deep Dives' },
  { name: 'customer', value: 20, label: 'Customer Engagement & Reviews' },
  { name: 'strategic', value: 15, label: 'Strategic Planning & Success Plans' },
  { name: 'reporting', value: 15, label: 'Reporting & Consumption Management' },
  { name: 'ebr', value: 15, label: 'Executive Business Reviews (EBRs)' },
  { name: 'internal', value: 10, label: 'Internal Alignment & Reporting' },
];

const chartConfig = {
  morning: {
    label: "Morning Alignment & Updates",
    color: "#0088FE",
  },
  product: {
    label: "Product & Enablement Deep Dives",
    color: "#00C49F",
  },
  customer: {
    label: "Customer Engagement & Reviews",
    color: "#FFBB28",
  },
  strategic: {
    label: "Strategic Planning & Success Plans",
    color: "#FF8042",
  },
  reporting: {
    label: "Reporting & Consumption Management",
    color: "#AF19FF",
  },
  ebr: {
    label: "Executive Business Reviews (EBRs)",
    color: "#FF1919",
  },
  internal: {
    label: "Internal Alignment & Reporting",
    color: "#19B2FF",
  },
} satisfies ChartConfig;

const DailyRoutineChart = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square h-[500px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={dailyRoutine}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          strokeWidth={5}
          labelLine
          label={({ name, value }) => `${chartConfig[name]?.label}: ${value}%`}
        >
          {dailyRoutine.map((entry) => (
            <Cell key={entry.name} fill={`var(--color-${entry.name})`} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};

export default DailyRoutineChart;