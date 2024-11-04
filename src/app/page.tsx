import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center flex-col min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="dark:text-neutral-200 pt-[140px] font-bold text-neutral-900 text-4xl">
        Welcome to Invoicen
      </h1>
      <Button className="font-bold hover:-translate-y-1 transition-all hover:rounded-xl">
        Get Started
      </Button>
    </div>
  );
}
