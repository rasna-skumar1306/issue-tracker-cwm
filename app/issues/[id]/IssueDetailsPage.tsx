import { IssueBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

const IssueDetailsPage = ({ Issue }: { Issue: Issue }) => {
  return (
    <div>
      <Heading>{Issue.title}</Heading>
      <Flex gap="3" my="3">
        <IssueBadge status={Issue.status} />
        <Text>{Issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt="4">
        <ReactMarkdown>{Issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
