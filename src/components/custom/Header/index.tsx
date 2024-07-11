"use client";

import Image from "next/image";
import LoginButton from "../LoginButton";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme } = useTheme();

  return (
    <div className="flex w-full min-w-screen py-2 px-4 items-center justify-between">
      <Image
        src={
          theme === "light"
            ? "/thirdweb-wordmark-dark.svg"
            : "/thirdweb-wordmark-fullwhite.svg"
        }
        alt={"thirdweb logo"}
        width={150}
        height={75}
      />

      <LoginButton />
    </div>
  );
}
