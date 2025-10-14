"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// 🔹 بيانات الرسم البياني
const data = [
  { month: "Jan", average: 65 },
  { month: "Feb", average: 72 },
  { month: "Mar", average: 45 },
  { month: "Apr", average: 81 },
  { month: "May", average: 73 },
  { month: "Jun", average: 96 },
  { month: "Jul", average: 66 },
  { month: "Aug", average: 51 },
  { month: "sep", average: 65 },
  { month: "oct", average: 52 },
  
];

export default function MonthlyAverageChart() {
  return (
    <Card className="w-full bg-white bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text shadow-sm rounded-2xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Monthly Delivery
        </CardTitle>
      </CardHeader>
      <CardContent className="h-80">
        <ChartContainer
          config={{
            average: {
              label: "Average",
              color: "#3b82f6",
            },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              {/* المحور الأفقي */}
              <XAxis
                dataKey="month"
                tick={{ fill: "#6b7280" }}
                axisLine={false}
              />

              {/* المحور الرأسي */}
              <YAxis tick={{ fill: "#6b7280" }} axisLine={false} />

              {/* التولتيب الجاهز من shadcn */}
              <ChartTooltip content={<ChartTooltipContent />} />

              {/* الأعمدة */}
              <Bar
                dataKey="average"
                fill="#3b82f6"
                radius={[6, 6, 0, 0]}
                barSize={18}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
