"use client";

import Image from "next/image";
import LoginButton from "../LoginButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
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

      <LoginButton label={"Log In"} />
    </div>
  );
}
