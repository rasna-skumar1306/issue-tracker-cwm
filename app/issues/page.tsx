// "use client";

import prisma from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueBadge from "../components/IssueBadge";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-5">
        <Button variant="soft">
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="text-center md:text-left">
              Issue
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map(({ id, title, status, createdAt }) => (
            <Table.Row key={id}>
              <Table.Cell>
                {title}
                <div className="block md:hidden">
                  <IssueBadge status={status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueBadge status={status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
