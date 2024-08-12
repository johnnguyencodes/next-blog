import Container from "@/components/Container";
import Image from "next/image";
import { CloudUpload, Lock, Database } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "/nowhere",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "/nowhere" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "/nowhere",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "/nowhere",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "/nowhere" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "/nowhere",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "/nowhere",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "/nowhere" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "/nowhere",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudUpload,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Lock,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: Database,
  },
];

export default function Home() {
  return (
    <Container className="relative z-40">
      <main className="mt-16 flex flex-col items-start justify-evenly">
        <div>
          <main>
            {/* Hero */}
            <div className="relative isolate">
              <svg
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="50%"
                    y={-1}
                    id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                  <path
                    d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect
                  fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
              <div
                aria-hidden="true"
                className="absolute left-1/2 right-0 top-0 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                  }}
                  className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
              </div>
              <div className="">
                <div className="mx-auto max-w-7xl pb-32">
                  <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                    <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Building intuitive interfaces with user-centric design
                        approaches.
                      </h1>
                      <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                        Experienced Front-End Web Developer with a proven track
                        record in UI/UX enhancement, system optimization,
                        eCommerce administration and team management. Skilled in
                        implementing innovative solutions with React, Shopify
                        Liquid, and Node to improve site performance and user
                        engagement.
                      </p>
                      <div className="mt-10 flex items-center gap-x-6">
                        <a
                          href="/nowhere"
                          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Get started
                        </a>
                        <a
                          href="/nowhere"
                          className="text-sm font-semibold leading-6 text-gray-900"
                        >
                          Live demo <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                      <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                        <div className="relative">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                      </div>
                      <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                        <div className="relative">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div className="relative">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                      </div>
                      <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                        <div className="relative">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div className="relative">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary of skills */}
            <div className="overflow-hidden bg-white py-24 sm:py-32">
              <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                  <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                      <h2 className="text-base font-semibold leading-7 text-indigo-600">
                        Deploy faster
                      </h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        A better workflow
                      </p>
                      <p className="mt-6 text-lg leading-8 text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        {features.map((feature) => (
                          <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                              <feature.icon
                                className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                aria-hidden="true"
                              />
                              {feature.name}
                            </dt>{" "}
                            <dd className="inline">{feature.description}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                  <div className="sm:px-6 lg:px-0">
                    <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                      <div
                        className="absolute -inset-y-px -left-3 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                        aria-hidden="true"
                      />
                      <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                          <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                            <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                              <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                NotificationSetting.jsx
                              </div>
                              <div className="border-r border-gray-600/10 px-4 py-2">
                                App.jsx
                              </div>
                            </div>
                          </div>
                          <div className="px-6 pb-14 pt-6">
                            console.log(&qout;Hello world!&quot;)
                          </div>
                        </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                  <div className="bg-gray-400/5 p-8 sm:p-10">
                    <Image
                      alt="Transistor"
                      src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                      width={158}
                      height={48}
                      className="max-h-12 w-full object-contain"
                    />
                  </div>
                  <div className="bg-gray-400/5 p-6 sm:p-10">
                    <Image
                      alt="Reform"
                      src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                      width={158}
                      height={48}
                      className="max-h-12 w-full object-contain"
                    />
                  </div>
                  <div className="bg-gray-400/5 p-6 sm:p-10">
                    <Image
                      alt="Tuple"
                      src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                      width={158}
                      height={48}
                      className="max-h-12 w-full object-contain"
                    />
                  </div>
                  <div className="bg-gray-400/5 p-6 sm:p-10">
                    <Image
                      alt="Laravel"
                      src="https://tailwindui.com/img/logos/158x48/laravel-logo-gray-900.svg"
                      width={158}
                      height={48}
                      className="max-h-12 w-full object-contain"
                    />
                  </div>
                  <div className="bg-gray-400/5 p-6 sm:p-10">
                    <Image
                      alt="SavvyCal"
                      src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                      width={158}
                      height={48}
                      className="max-h-12 w-full object-contain"
                    />
                  </div>
                  <div className="bg-gray-400/5 p-6 sm:p-10">
                    <Image
                      alt="Statamic"
                      src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                      width={158}
                      height={48}
                      className="max-h-12 w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Projects
                  </h2>
                  <p className="mt-2 text-lg leading-8 text-gray-600">
                    Learn how to grow your business with our expert advice.
                  </p>
                  <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                    {posts.map((post) => (
                      <article
                        key={post.id}
                        className="relative isolate flex flex-col gap-8 lg:flex-row"
                      >
                        <div className="lg:aspect-square relative aspect-[16/9] sm:aspect-[2/1] lg:w-64 lg:shrink-0">
                          <img
                            alt=""
                            src={post.imageUrl}
                            className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                          />
                          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div>
                          <div className="flex items-center gap-x-4 text-xs">
                            <time
                              dateTime={post.datetime}
                              className="text-gray-500"
                            >
                              {post.date}
                            </time>
                            <a
                              href={post.category.href}
                              className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                              {post.category.title}
                            </a>
                          </div>
                          <div className="group relative max-w-xl">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                              <a href={post.href}>
                                <span className="absolute inset-0" />
                                {post.title}
                              </a>
                            </h3>
                            <p className="mt-5 text-sm leading-6 text-gray-600">
                              {post.description}
                            </p>
                          </div>
                          <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                            <div className="relative flex items-center gap-x-4">
                              <img
                                alt=""
                                src={post.author.imageUrl}
                                className="h-10 w-10 rounded-full bg-gray-50"
                              />
                              <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                  <a href={post.author.href}>
                                    <span className="absolute inset-0" />
                                    {post.author.name}
                                  </a>
                                </p>
                                <p className="text-gray-600">
                                  {post.author.role}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="bg-white">
              <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                  <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Boost your productivity today.
                  </h2>
                  <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                    Incididunt sint fugiat pariatur cupidatat consectetur sit
                    cillum anim id veniam aliqua proident excepteur commodo do
                    ea.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="/nowhere"
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Get started
                    </a>
                    <a
                      href="/nowhere"
                      className="text-sm font-semibold leading-6 text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                  >
                    <circle
                      r={512}
                      cx={512}
                      cy={512}
                      fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                      fillOpacity="0.7"
                    />
                    <defs>
                      <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                        <stop stopColor="#7775D6" />
                        <stop offset={1} stopColor="#E935C1" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
    </Container>
  );
}
