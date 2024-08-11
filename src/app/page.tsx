import Container from "@/components/Container";
import LatestPosts from "@/components/home/latest-posts";

export default function Home() {
  return (
    <Container>
      <main className="mt-16 flex flex-col items-start justify-evenly">
        <div>
          <LatestPosts />
        </div>
      </main>
    </Container>
  );
}
