"use client";

import Image from "next/image";
import LoginButton from "../LoginButton";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Header() {
  const { theme } = useTheme();

  return (
    <div className="flex w-full min-w-screen py-2 px-4 items-center justify-between">
      <Link href={"/"}>
        <Image
          src={
            theme === "light"
              ? "/thirdweb-wordmark-dark.svg"
              : "/thirdweb-wordmark-fullwhite.svg"
          }
          alt={"thirdweb logo"}
          className="hover:opacity-80"
          width={150}
          height={75}
        />
      </Link>

      <div className="flex space-x-4 items-center ">
        <Button
          asChild
          className="flex items-center space-x-2 bg-background border border-border text-primary hover:bg-background hover:border-[#FDE3F4]"
        >
          <Link href="https://thirdweb.com/">
            <div className="pl-0 pr-3 border-r border-border">
              <div className="w-[1rem] h-[1rem] relative">
                <Image
                  src={"/thirdweb.svg"}
                  fill={true}
                  alt={"thirdweb logo"}
                />
              </div>
            </div>
            <div>{`Build on thirdweb`}</div>
          </Link>
        </Button>
        <LoginButton label={"Log In"} />
      </div>
    </div>
  );
}
