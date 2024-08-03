import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-posts";
import { MainNav } from "@/components/ui/main-nav";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main>
        <div>
          <LatestPosts />
        </div>
      </main>
    </Container>
  );
}
