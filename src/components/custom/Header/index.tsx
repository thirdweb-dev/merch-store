import Image from "next/image";
import LoginButton from "../LoginButton";

export default function Header() {
  return (
    <div className="flex w-full min-w-screen p-4 items-center justify-between border-b border-border">
      <Image
        src={"/thirdweb-wordmark-dark.svg"}
        alt={"thirdweb logo"}
        width={150}
        height={75}
      />

      <LoginButton />
    </div>
  );
}
