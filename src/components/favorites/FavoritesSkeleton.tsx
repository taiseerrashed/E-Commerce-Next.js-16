import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const FavoritesSkeleton = () => {
  return (
    <section className="container space-y-8">
      {/* Cart Items */}
      <Card className="p-6 shadow-xl rounded-3xl space-y-6">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-b pb-6 last:border-none"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4">
              <Skeleton className="w-24 h-24 rounded-2xl" />

              <div className="space-y-3">
                <Skeleton className="h-6 w-52" />
                <Skeleton className="h-5 w-28" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 self-end lg:self-auto">
              <Skeleton className="h-10 w-28 rounded-md" />
              <Skeleton className="w-10 h-10 rounded-md" />
            </div>
          </div>
        ))}
      </Card>

      {/* Footer */}
      <Skeleton className="h-10 w-32 rounded-md ml-auto" />
    </section>
  );
};

export default FavoritesSkeleton;
