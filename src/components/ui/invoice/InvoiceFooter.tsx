import Typography from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Button } from "../button";

interface InvoiceFooterProps {
  totalWithTax: number;
}

const InvoiceFooter = ({ totalWithTax }: InvoiceFooterProps) => {
  return (
    <div className="my-4 space-y-4 w-full ">
      <div className="flex items-center justify-between w-full mt-4">
        <Typography variant="h3" className="font-semibold">
          Total:
        </Typography>
        {/* TODO: open calendar when clicked on this */}
        <Typography variant="h3" className="ml-[1rem]">
          ${totalWithTax}
        </Typography>
      </div>
      <Input type="text" placeholder="Add a custom message" />
      <Button>Generate Invoice</Button>
    </div>
  );
};

export default InvoiceFooter;
