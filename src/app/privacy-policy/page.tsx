import Container from "@/components/Container";
import { getPrivacyPolicy } from "../blog/utils";
import { MainNav } from "@/components/main-nav";
import CustomMDX from "@/components/ui/mdx";

export default function Page() {
  let post = getPrivacyPolicy().find((post) => post.slug === "privacy-policy")

  return (
    <Container>
      <MainNav />
        <article className="prose">
          <CustomMDX source={post?.content}/>
        </article>
    </Container>
  )
}
