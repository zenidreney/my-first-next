"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <Image
              src="/printforge-logo-1.png"
              alt="PrintForge Logo"
              width={200}
              height={200}
              className="w-[200px] h-auto hidden md:block"
            />
            {/* Mobile Logo */}
            <Image
              src="/printforge-logo-mobile.png"
              alt="PrintForge Logo"
              width={200}
              height={200}
              className="w-[40px] h-auto block md:hidden"
            />
          </div>
        </Link>
        <ul className="flex items-center gap-2.5">
          <NavLink href="/3d-models" isActive={pathname === "/3d-models"}>
            3D Models
          </NavLink>
          <NavLink href="/about" isActive={pathname === "/about"}>
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

//  <Link href={"/"}>
//                 {/* Desktop logo */}
//                 <Image
//                   src="/printforge-logo-1.png"
//                   alt="PrintForge Logo"
//                   width={200}
//                   height={200}
//                   className="w-[200px] h-auto hidden md:block"
//                 />
//                 {/* Mobile logo */}
//                 <Image
//                   src="/printforge-logo-mobile.png"
//                   alt="PrintForge Logo"
//                   width={200}
//                   height={200}
//                   className="w-[40px] h-auto block md:hidden"
//                 />
//               </Link>
