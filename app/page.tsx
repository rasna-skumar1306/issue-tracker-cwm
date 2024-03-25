import Image from "next/image";
import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <main>
      <Pagination currentPage={2} pageSize={5} itemCount={100} />
    </main>
  );
}
