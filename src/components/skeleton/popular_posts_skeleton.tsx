import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-4 w-[350px] rounded-xl" />
      <Skeleton className="h-4 w-[350px] rounded-xl" />
      <Skeleton className="h-4 w-[350px] rounded-xl" />
      <Skeleton className="h-4 w-[350px] rounded-xl" />
    </div>
  )
}

