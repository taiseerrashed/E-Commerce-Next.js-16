import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => {
  return (
    <Card className="w-full max-w-xs animate-pulse">
      <CardHeader>
        <Skeleton className="aspect-video w-full" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
};

export default ProductSkeleton;
