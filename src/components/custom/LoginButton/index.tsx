"use client";

import { ConnectButton } from "thirdweb/react";
import { THIRDWEB_CLIENT } from "@/lib/thirdweb";
import { inAppWallet } from "thirdweb/wallets";
import { useTheme } from "next-themes";

const wallets = [
  inAppWallet({
    auth: {
      options: ["email", "phone"],
    },
  }),
];

export default function LoginButton() {
  const { theme } = useTheme();
  return (
    <ConnectButton
      wallets={wallets}
      client={THIRDWEB_CLIENT}
      theme={theme == "light" ? "light" : "dark"}
    />
  );
}
