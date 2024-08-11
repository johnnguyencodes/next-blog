import { BreadcrumbWithCustomSeparator } from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { formatDate, getBlogPosts } from "../utils";
import { notFound } from "next/navigation";
import CustomMDX from "@/components/ui/mdx";
import ReportViews from "@/components/ReportViews";
import { baseUrl } from "@/app/sitemap";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return {
      title: "Post not found",
      description: "The post you are looking for does not exist.",
      openGraph: {
        title: "Post not found",
        description: "The post you are looking for does not exist.",
        type: "article",
        publishedTime: "",
        url: `${baseUrl}/blog/${params.slug}`,
        images: [{ url: "" }],
      },
    };
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post?.slug}`,
      images: [{ url: ogImage }],
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title,
    //   description,
    //   images: [ogImage],
    // }
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "John Nguyen's Website",
            },
          }),
        }}
      />
      <ReportViews
        category={post.metadata.category}
        title={post.metadata.title}
        slug={post.slug}
      />
      <Header>
        <Container>
          <BreadcrumbWithCustomSeparator slug={post.slug} category="blog" />
          <h1 className="title mt-4 text-2xl font-semibold tracking-tighter">
            {post.metadata.title}
          </h1>
          <div className="mb-4 mt-2 flex items-center justify-between text-sm">
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </>
  );
}
