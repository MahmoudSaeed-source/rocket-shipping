"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Delivery statistics for the last months";

const chartData = [
  { month: "January", city: 186, remote: 180 },
  { month: "February", city: 180, remote: 155 },
  { month: "March", city: 170, remote: 120 },
  { month: "April", city: 160, remote: 190 },
  { month: "May", city: 209, remote: 200 },
  { month: "June", city: 160, remote: 140 },
  { month: "July", city: 170, remote: 150 },
  { month: "August", city: 175, remote: 160 },
  { month: "September", city: 180, remote: 165 },
];

const chartConfig = {
  city: {
    label: "City Deliveries",
    color: "#3b82f6", // tailwind blue-500
  },
  remote: {
    label: "Remote Deliveries",
    color: "#10b981", // tailwind emerald-500
  },
} satisfies ChartConfig;

export default function StatisticsChartDeliveries() {
  const averageDeliveries =
    chartData.reduce((acc, item) => acc + (item.city + item.remote) / 2, 0) /
    chartData.length;

  return (
    <Card className="text-gray-900 bg-white dark:text-gray-100 dark:bg-gray-900">
      <CardHeader>
        <CardTitle>Monthly Delivery Performance</CardTitle>
        <CardDescription>
          Total deliveries (City & Remote) over the last 9 months
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 10, left: -10, right: 10 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={6}
              domain={[100, 250]}
            />

            {/* 🔹 خط المتوسط */}
            <ReferenceLine
              y={averageDeliveries}
              label={{
                value: `Avg: ${Math.round(averageDeliveries)}`,
                position: "right",
                fill: "gray",
              }}
              stroke="gray"
              strokeDasharray="5 5"
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            {/* 🔵 City Deliveries */}
            <Area
              dataKey="city"
              type="monotone"
              fill="#3b82f6" // tailwind blue-500
              fillOpacity={0.25}
              stroke="#3b82f6"
              strokeWidth={1.5}
            />

            {/* 🟢 Remote Deliveries */}
            <Area
              dataKey="remote"
              type="monotone"
              fill="#10b981" // tailwind emerald-500
              fillOpacity={0.25}
              stroke="#10b981"
              strokeWidth={1.5}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Deliveries increased by 5.2% this month{" "}
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - September 2025
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
