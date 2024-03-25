import prisma from "@/prisma/client";
import IssueCharts from "./IssueCharts";
import IssueSummary from "./IssueSummary";
import LatestIssue from "./LatestIssue";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });

  return (
    <>
      <IssueCharts closed={closed} open={open} inProgress={inProgress} />
      <LatestIssue />
      <IssueSummary closed={closed} open={open} inProgress={inProgress} />
    </>
  );
}
