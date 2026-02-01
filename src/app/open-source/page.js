import Link from "next/link";
import OpenSourcePageClient from "@/components/open-source-page-client";
import { ArrowLeft } from "@/widgets/arrow-left";

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen w-full pt-12 md:pt-16 lg:pt-24 pb-12 md:pb-16 lg:pb-24">
      <div className="mb-8 pl-2">
        <Link
          href="/"
          className="text-[#5CEAD4] inline-flex items-center group mb-4"
        >
          <ArrowLeft className="mr-2 text-[#5CEAD4] group-hover:-translate-x-2 transition-transform duration-300" />
          <span>Almee Christian</span>
        </Link>
        <h1 className="text-4xl sm:text-5xl text-gray-300 font-bold tracking-tight">
          Open Source Contributions
        </h1>
        <p className="text-slate-400 mt-3 text-sm max-w-xl">
          A deeper look at recent pull requests and commits across civic tech and developer education projects.
        </p>
      </div>
      <div className="-mx-6 md:-mx-12">
        <OpenSourcePageClient />
      </div>
    </div>
  );
}
