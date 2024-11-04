import Typography from "@/components/ui/typography";
import Image from "next/image";

interface InvoiceHeaderProps {
  invoiceId: string;
  invoiceDate: string;
  dueDate: string;
  paymentTerms: string;
}

const InvoiceHeader = ({
  invoiceId = "Keizer-00-01", // Default value for demo purposes
  invoiceDate = "11/12/2006", // Default value for demo purposes
  dueDate = "11/12/2006", // Default value for demo purposes
  paymentTerms = "30 days", // Default value for demo purposes
}: InvoiceHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      {/* Basic details */}
      <div>
        <Typography variant="h2" className="font-semibold">
          Invoice
        </Typography>

        <div className="flex items-center justify-between w-full mt-2">
          <Typography variant="p" className="md:text-[18px] text-[15px] font-semibold">
            Invoice Id:
          </Typography>
          <Typography variant="p" className="md:text-[18px] text-[15px] ml-[5rem]">
            {invoiceId}
          </Typography>
        </div>

        <div className="flex items-center justify-between w-full">
          <Typography variant="p" className="md:text-[18px] text-[15px] font-semibold">
            Invoice Date:
          </Typography>
          {/* TODO: open calendar when clicked on this */}
          <Typography variant="p" className="md:text-[18px] text-[15px] ml-[5rem]">
            {invoiceDate}
          </Typography>
        </div>

        <div className="flex items-center justify-between w-full">
          <Typography variant="p" className="md:text-[18px] text-[15px] font-semibold">
            Due Date:
          </Typography>
          {/* TODO: open calendar when clicked on this */}
          <Typography variant="p" className="md:text-[18px] text-[15px] ml-[5rem]">
            {dueDate}
          </Typography>
        </div>

        <div className="flex items-center justify-between w-full">
          <Typography variant="p" className="md:text-[18px] text-[15px] font-semibold">
            Payment terms:
          </Typography>
          {/* TODO: open calendar when clicked on this */}
          <Typography variant="p" className="md:text-[18px] text-[15px] ml-[5rem]">
            {paymentTerms}
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
  );
};

export default InvoiceHeader;
