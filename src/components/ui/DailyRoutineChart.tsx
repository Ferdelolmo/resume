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
  { name: 'morning', value: 10, label: 'Morning Alignment & Updates', emoji: '☀️' },
  { name: 'product', value: 15, label: 'Product & Enablement Deep Dives', emoji: '🚀' },
  { name: 'customer', value: 20, label: 'Customer Engagement & Reviews', emoji: '💬' },
  { name: 'strategic', value: 15, label: 'Strategic Planning & Success Plans', emoji: '🎯' },
  { name: 'reporting', value: 15, label: 'Reporting & Consumption Management', emoji: '📊' },
  { name: 'ebr', value: 15, label: 'Executive Business Reviews (EBRs)', emoji: '📈' },
  { name: 'internal', value: 10, label: 'Internal Alignment & Reporting', emoji: '🤝' },
];

const chartConfig = {
  morning: {
    label: "Morning Alignment",
    color: "#0088FE",
  },
  product: {
    label: "Product Deep Dives",
    color: "#00C49F",
  },
  customer: {
    label: "Customer Engagement",
    color: "#FFBB28",
  },
  strategic: {
    label: "Strategic Planning",
    color: "#FF8042",
  },
  reporting: {
    label: "Internal Reporting",
    color: "#AF19FF",
  },
  ebr: {
    label: "Success Planning & EBRs",
    color: "#FF1919",
  },
  internal: {
    label: "Internal Alignment",
    color: "#19B2FF",
  },
} satisfies ChartConfig;

const DailyRoutineChart = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square h-[500px]"
    >
      <PieChart margin={{ top: 10, right: 120, bottom: 10, left: 120 }}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={dailyRoutine}
          dataKey="value"
          nameKey="name"
          innerRadius={50}
          outerRadius={90}
          strokeWidth={5}
          labelLine={false}
          label={({ payload, value }) => `${payload.emoji} ${chartConfig[payload.name]?.label}: ${value}%`}
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