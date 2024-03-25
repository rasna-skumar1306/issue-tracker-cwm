import prisma from "@/prisma/client";
import IssueCharts from "./IssueCharts";
import IssueSummary from "./IssueSummary";
import LatestIssue from "./LatestIssue";
import { Flex, Grid } from "@radix-ui/themes";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });

  const issues = { open, closed, inProgress };

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="4">
      <Flex direction="column" gap="6">
        <IssueSummary {...issues} />
        <IssueCharts {...issues} />
      </Flex>
      <LatestIssue />
    </Grid>
  );
}
