import {
    ChevronLeftIcon,
    ChevronRightIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount < 1) return;

  return (
    <Flex align="center" gap="4">
      <Button variant="soft" color="gray" disabled={currentPage === 1}>
        <DoubleArrowLeftIcon />
      </Button>
      <Button variant="soft" color="gray" disabled={currentPage === 1}>
        <ChevronLeftIcon />
      </Button>
      <Text>
        Page {currentPage} of {pageCount}
      </Text>
      <Button variant="soft" color="gray" disabled={currentPage === pageCount}>
        <ChevronRightIcon />
      </Button>
      <Button variant="soft" color="gray" disabled={currentPage === pageCount}>
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
