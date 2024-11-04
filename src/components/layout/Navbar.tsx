"use client";
import { useState, useEffect } from "react";
import type { FC } from "react";
import Image from "next/image";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname } from "next/navigation";

const Navbar: FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      aria-label="Navbar"
      className="my-5 top-0 flex items-center justify-center w-full"
    >
      <div className="flex items-center justify-between md:max-w-[1260px] max-w-[95vw] w-full border-[1px] border-solid rounded-xl md:px-4 px-2 md:py-2 py-1">
        <div>
          {mounted ? (
            <Link href={"/"}>
              {theme === "light" ? (
                <Image
                  src={"/assets/logos/logo-icon-light.svg"}
                  height={60}
                  width={60}
                  alt="logo"
                  aria-label="logo"
                />
              ) : (
                <Image
                  src={"/assets/logos/logo-icon-dark.svg"}
                  height={60}
                  width={60}
                  alt="logo"
                  aria-label="logo"
                />
              )}
            </Link>
          ) : (
            <Skeleton className="h-[60px] w-[60px]" />
          )}
        </div>
        <div className="flex items-center">
          <ThemeToggleButton />
          {pathname.startsWith("/generate") || (
            <Link href={"/generate"}>
              <Button className="ml-4 font-bold hover:rounded-xl transition-all">
                Generate Invoice
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
