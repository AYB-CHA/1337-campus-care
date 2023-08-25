import Button from "@/components/Button";
import { gustGuard } from "./auth/utils";
import Logo from "@/components/Logo";

export default async function Home() {
  gustGuard();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="border-b">
        <div className="container py-2 flex justify-between items-center">
          <div className="flex text-gray-900 font-medium">
            <Logo />
          </div>
          <a href={`${process.env["BACKEND_BASEURL"]}/auth/login`}>
            <Button>Continue With 42 Intra</Button>
          </a>
        </div>
      </div>
      <div className="relative grow flex items-center  flex-col pt-32">
        <div className="absolute -z-10 inset-x-0 top-0 h-96 rotate-180 text-gray-500/20 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,white)]">
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid-pattern"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="100%"
                patternTransform="translate(0 -1)"
              >
                <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
          </svg>
        </div>
        <h1 className="font-bold tracking-tight text-gray-900 text-4xl xl:text-5xl text-center mb-16">
          1337 Campus Care Hub.
        </h1>
        <a href={`${process.env["BACKEND_BASEURL"]}/auth/login`}>
          <Button>Continue With 42 Intra</Button>
        </a>
      </div>
    </div>
  );
}
