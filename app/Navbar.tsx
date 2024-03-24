"use client";

import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineBug } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

const Navbar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issues/list" },
  ];
  return (
    <nav className="flex space-x-10 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiOutlineBug size={25} />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classnames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-700": true,
                "transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" ? (
          <Link href="/api/auth/signout">Log Out</Link>
        ) : status === "unauthenticated" ? (
          <Link href="/api/auth/signin">Log In</Link>
        ) : (
          ""
        )}
      </Box>
    </nav>
  );
};

export default Navbar;
