import Link from "next/link";
import Container from "../components/Container";

export const metadata = {
  title: "404 - This page could not be found",
  description: "This page could not be found.",
};

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          404
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          This page could not be found. Maybe you have typed a wrong address.
          Try navigating somewhere else.
        </p>
        <Link href="/" className="underline underline-offset-4">
          Go to /
        </Link>
      </div>
      <span className="h-16" />
    </Container>
  );
}
