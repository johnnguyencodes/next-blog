import { getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";
import CardCategory from "../CardCategory";

export default function LatestPosts() {
  let latestPosts = getBlogPosts();
  return (
    <>
      <h1 className="font-heading inline-block text-4xl tracking-tight lg:text-5xl">
        Recently Published
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {latestPosts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              href={`/blog/${post.metadata.category}/${post.slug}`}
              key={post.slug}
            >
              <CardCategory
                title={post.metadata.title}
                summary={post.metadata.summary}
                date={post.metadata.publishedAt}
              />
            </Link>
          ))}
      </div>
    </>
  );
}
