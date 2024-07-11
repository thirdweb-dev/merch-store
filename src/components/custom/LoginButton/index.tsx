"use client";

import { ConnectButton } from "thirdweb/react";
import { THIRDWEB_CLIENT } from "@/lib/thirdweb";
import { inAppWallet } from "thirdweb/wallets";
import { useTheme } from "next-themes";

export default function LoginButton({ label }: { label: string }) {
  const { theme } = useTheme();
  return (
    <ConnectButton
      client={THIRDWEB_CLIENT}
      theme={theme == "light" ? "light" : "dark"}
      connectButton={{
        label,
      }}
    />
  );
}
