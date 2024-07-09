"use client";

import { ConnectButton } from "thirdweb/react";
import { THIRDWEB_CLIENT } from "@/lib/thirdweb";
import { inAppWallet } from "thirdweb/wallets";

const wallets = [
  inAppWallet({
    auth: {
      options: ["email", "phone"],
    },
  }),
];

export default function LoginButton() {
  return <ConnectButton wallets={wallets} client={THIRDWEB_CLIENT} />;
}
