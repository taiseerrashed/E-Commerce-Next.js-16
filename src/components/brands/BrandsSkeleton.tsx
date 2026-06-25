import { Skeleton } from "@/components/ui/skeleton";

const BrandsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="rounded-2xl border p-6"
        >
          <Skeleton className="mx-auto h-20 w-full" />
          <Skeleton className="mx-auto mt-4 h-4 w-24" />
        </div>
      ))}
    </div>
  );
};

export default BrandsSkeleton;