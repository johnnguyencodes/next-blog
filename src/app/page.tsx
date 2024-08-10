import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-posts";
import { MainNav } from "@/components/main-nav";
// import TopCategories from "@/components/home/top-categories";
// import PopularPosts from "@/components/home/popular-posts";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="mt-16 flex flex-col items-start justify-evenly md:flex-row">
        <div>
          <LatestPosts />
        </div>
      </main>
    </Container>
  );
}
