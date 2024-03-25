"use client";

import { Card } from "@radix-ui/themes";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
interface Props {
  open: number;
  closed: number;
  inProgress: number;
}

const IssueCharts = ({ open, closed, inProgress }: Props) => {
  const data: { label: string; value: number }[] = [
    { label: "Open", value: open },
    { label: "Closed", value: closed },
    { label: "In Progress", value: inProgress },
  ];

  return (
    <Card>
      <ResponsiveContainer height={300} width="100%">
        <BarChart data={data}>
          <XAxis dataKey="label" label={() => data.map((d) => d.label)} />
          <YAxis />
          <Bar
            dataKey="value"
            barSize={60}
            style={{ fill: "var(--accent-8)" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueCharts;
