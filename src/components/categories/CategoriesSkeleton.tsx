import { Skeleton } from "@/components/ui/skeleton";

const CategoriesSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="overflow-hidden rounded-2xl border">
          <Skeleton className="aspect-square w-full" />
          <div className="p-4">
            <Skeleton className="h-5 w-3/4 mx-auto" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesSkeleton;