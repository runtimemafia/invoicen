import Typography from "@/components/ui/typography";

const BillingInfo = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-1/2">
        <Typography variant="h3" className="font-semibold">
          Billed To
        </Typography>
        <Typography variant="p" className="md:text-[18px] text-[15px]">
          John Doe <br /> 1234 Main St Springfield, <br /> IL 62701 United
          States
        </Typography>
      </div>
      <div className="w-1/2">
        <Typography variant="h3" className="font-semibold">
          Pay To
        </Typography>
        <Typography variant="p" className="md:text-[18px] text-[15px]">
          John Doe <br /> 1234 Main St Springfield, <br /> IL 62701 United
          States
        </Typography>
      </div>
    </div>
  );
};

export default BillingInfo;
