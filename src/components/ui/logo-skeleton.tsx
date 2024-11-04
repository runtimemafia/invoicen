import { cn } from "@/lib/utils";

const Skeleton = () => {
  return (
    <div className={cn("animate-pulse bg-muted h-[60px] w-[60px] rounded-md")}></div>
  );
};

export { Skeleton };