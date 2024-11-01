import { Button } from "../components/ui/button";

export default function Home() {
	return (
		<div className="flex items-center flex-col justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-neutral-200 text-4xl">Welcome to Invoicen</h1>
			<Button variant={"outline"}>Get Started</Button>
		</div>
	);
}
