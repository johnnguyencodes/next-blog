import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <>
      <div className="container mx-auto w-full max-w-screen-xl px-2.5 py-6 md:px-20 lg:py-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="flex min-w-48 max-w-48 flex-col gap-2">
            <p className="break-words text-muted-foreground">
              Software Developer
            </p>
          </div>
          <p className="py-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </>
  );
}
