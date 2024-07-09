import { ComboboxDemo } from "@/components/custom/Combobox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-8 p-24">
      <h3>If</h3>
      <ComboboxDemo />
      <h3>Then</h3>
      <ComboboxDemo />
    </main>
  );
}
