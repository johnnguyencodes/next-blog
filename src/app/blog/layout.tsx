import Container from "@/components/Container";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="sticky top-0 bg-gray-100 dark:bg-gray-800">
        <Container>{children}</Container>
      </div>
      {children}
    </>
  );
}
