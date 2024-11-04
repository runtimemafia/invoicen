import Typography from "@/components/ui/typography";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

/**
 * TODO:
 * 1. Every element should be editable
 * 2. Add a button to add more entries
 * 3. Add a button to remove entries
 * 4. Export the invoice as a PDF
 * 5. Option to add custom logo
 *
 *
 * Fields:
 * 1. Invoice Id
 * 2. Invoice date
 * 3. Invoice due date
 * 4. Payment terms
 * 5. Entries
 * 		- Description
 * 		- Quantity
 * 		- Amount
 * 6.	Currency
 * 7.	Billed to
 * 8.	Pay to
 * 9. Tax details
 * 10.Sub total
 * 11.Total
 * 12.Custom message/notes (for payment details etc)
 *
 *
 * Refactor this big component into smaller once
 */

interface Entry {
	description: string;
	quantity: number;
	amount: number;
}

const entries: Entry[] = [
	{
		description: "Logo designing",
		quantity: 20,
		amount: 250,
	},
	{
		description: "Logo designing",
		quantity: 20,
		amount: 250,
	},
	{
		description: "Logo designing",
		quantity: 20,
		amount: 250,
	},
	{
		description: "Logo designing",
		quantity: 20,
		amount: 250,
	},
	{
		description: "Logo designing",
		quantity: 20,
		amount: 250,
	},
];

interface TaxDetails {
	description: string;
	percentage: number;
}

const taxDetails: TaxDetails[] = [
	{ description: "GST", percentage: 18 },
	{ description: "Sale Tax", percentage: 10 },
];

const GenerateInvoice = () => {
	return (
		<main className="px-6 flex items-center justify-center">
			<div className="max-w-[1200px] w-full">
				<Typography variant="h2" className="text-2xl font-bold">
					Create your invoice
				</Typography>
				<div className="shadow-xl w-full my-6 px-8 py-4 rounded">
					<div className="flex items-center justify-between">
						{/* Basic details */}
						<div>
							<Typography variant="h2" className="font-semibold">
								Invoice
							</Typography>

							<div className="flex items-center justify-between w-full mt-2">
								<Typography variant="p" className="font-semibold">
									Invoice Id:
								</Typography>
								<Typography variant="p" className="ml-[5rem]">
									Keizer-00-01
								</Typography>
							</div>

							<div className="flex items-center justify-between w-full">
								<Typography variant="p" className="font-semibold">
									Invoice Date:
								</Typography>
								{/* TODO: open calendar when clicked on this */}
								<Typography variant="p" className="ml-[5rem]">
									11/12/2006
								</Typography>
							</div>

							<div className="flex items-center justify-between w-full">
								<Typography variant="p" className="font-semibold">
									Due Date:
								</Typography>
								{/* TODO: open calendar when clicked on this */}
								<Typography variant="p" className="ml-[5rem]">
									11/12/2006
								</Typography>
							</div>

							<div className="flex items-center justify-between w-full">
								<Typography variant="p" className="font-semibold">
									Payment terms:
								</Typography>
								{/* TODO: open calendar when clicked on this */}
								<Typography variant="p" className="ml-[5rem]">
									30 days
								</Typography>
							</div>
						</div>
						{/* Logo */}
						<div>
							{/* TODO: Make this a placeholder instead of a hard coded logo */}
							<Image
								src={"/assets/logos/logo-icon-dark.svg"}
								alt="Custom Logo"
								height={120}
								width={120}
							/>
						</div>
					</div>

					<Separator className="mt-4" />

					{/* Billed to and Pay to */}
					<div className="mt-4 flex items-center justify-between">
						<div className="w-1/2">
							<Typography variant="h3" className="font-semibold">
								Billed To
							</Typography>

							<Typography>
								John Doe <br /> 1234 Main St Springfield, <br /> IL 62701 United
								States
							</Typography>
						</div>

						<div className="w-1/2">
							<Typography variant="h3" className="font-semibold">
								Pay To
							</Typography>

							<Typography>
								John Doe <br /> 1234 Main St Springfield, <br /> IL 62701 United
								States
							</Typography>
						</div>
					</div>

					{/* Entries */}
					<Separator className="mt-4" />

					<div className="mt-4">
						<Typography variant="h3">Entries</Typography>
						<Table className="mt-2">
							<TableHeader>
								<TableRow>
									<TableHead className="w-[50%]">Description</TableHead>
									<TableHead className="w-[25%]">Quantity</TableHead>
									<TableHead className="text-right w-[25%]">Amount</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{entries.map((entry, index) => (
									<TableRow key={index}>
										<TableCell className="font-medium">
											{entry?.description}
										</TableCell>
										<TableCell>{entry?.amount}</TableCell>
										{/* TODO: Format currency */}
										<TableCell className="text-right">
											{entry?.amount}
										</TableCell>
									</TableRow>
								))}

								<TableRow>
									<TableCell className="font-semibold text-lg">
										Subtotal:{" "}
									</TableCell>
									<TableCell
										colSpan={2}
										className="text-right font-semibold text-lg"
									>
										$500
									</TableCell>
								</TableRow>
							</TableBody>
							{/* Add another entry */}
							<TableFooter>
								<TableCell
									colSpan={3}
									className="text-center cursor-pointer hover:text-muted-foreground transition-all"
								>
									Add another entry
								</TableCell>
							</TableFooter>
						</Table>
					</div>

					{/* Tax information */}
					<Separator className="mt-4" />
					<div className="mt-4">
						<Typography variant="h3">Tax Details</Typography>
						<Table className="mt-2">
							<TableHeader>
								<TableRow>
									<TableHead className="w-[50%]">Description</TableHead>
									<TableHead className="text-right w-[25%]">
										Percentage (%)
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{taxDetails.map((tax, index) => (
									<TableRow key={index}>
										<TableCell className="font-medium">
											{tax?.description}
										</TableCell>
										<TableCell className="text-right">
											{tax?.percentage}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
							{/* Add another tax */}
							<TableFooter>
								<TableCell
									colSpan={3}
									className="text-center cursor-pointer hover:text-muted-foreground transition-all"
								>
									Add another tax
								</TableCell>
							</TableFooter>
						</Table>
					</div>

					{/* Total */}
					<div className="flex items-center justify-end w-full mt-4">
						<Typography variant="h3" className="font-semibold">
							Total:
						</Typography>
						{/* TODO: open calendar when clicked on this */}
						<Typography variant="h3" className="ml-[1rem]">
							$500
						</Typography>
					</div>

					{/* Custom message */}
					<Separator className="mt-4" />

					<div className="mt-4">
						<Textarea
							placeholder="Custom message or payment details..."
							className="border-none outline-none shadow-none"
						/>
					</div>

					{/* CTA */}
					<div className="mt-4 flex items-center justify-end">
						<Button>Generate Invoice</Button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default GenerateInvoice;
