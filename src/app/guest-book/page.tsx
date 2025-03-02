"use client";
import { Button } from "@/components/ui/button";
// import GiscusComments from "@/components/guest-book";

import dynamic from "next/dynamic";
import Link from "next/link";
const GiscusComments = dynamic(() => import("@/components/guest-book"), {
  ssr: false, // Prevents server-side rendering issues
});
const GuestBook: React.FC = () => {
  return (
    <div className=" max-w-[1200px] mx-auto px-[1.5rem] py-10">
      <Link href={"/"} className=" my-3.5 mb-6">
        <Button className=" w-[200px] bg-slate-600 h-[40px]">Back</Button>
      </Link>
      <h1 className=" text-lg md:text-3xl font-bold mb-4 mt-5">GuestBook</h1>
      <p className="mb-6">Leave a message :{" ) "}</p>

      <GiscusComments />
    </div>
  );
};

export default GuestBook;
