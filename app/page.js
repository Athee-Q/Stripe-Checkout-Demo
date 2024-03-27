import Link from "next/link";

export default function Home() {
  return (
    <>
    <div>
      <Link href={'/pricing'}  className="w-full h-96 flex items-center justify-center text-[#f1592a] font-extrabold text-7xl"> Hurry Up!!</Link>
    </div>
    <footer className="w-full flex text-gray-200 justify-center items-center mt-20 h-40 bg-gray-900">
        copy-rights &copy; {new Date().getFullYear()}
    </footer>
    </>
  );
}
