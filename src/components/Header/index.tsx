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
          src={"/threads-logo.svg"}
          alt={"thirdweb logo"}
          className="hover:opacity-80"
          width={200}
          height={100}
        />
      </Link>

      <div className="flex space-x-4 items-center">
        <Button
          asChild
          className="flex items-center space-x-2 bg-background text-primary hover:bg-background hover:border-white rounded-lg h-auto hover:opacity-80"
        >
          <Link href="https://thirdweb.com/">
            <div className="py-1">
              <div className="w-[2rem] h-[2rem] relative">
                <Image
                  src={"/thirdweb.svg"}
                  fill={true}
                  alt={"thirdweb logo"}
                />
              </div>
            </div>
            <div className="font-semibold font-lg">{`Build on thirdweb`}</div>
          </Link>
        </Button>
        <LoginButton label={"Log In"} />
      </div>
    </div>
  );
}
