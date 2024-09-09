import Link from "next/link";

export function HeroSection(){
    return (
        <>
        <main className="flex flex-col items-center justify-center text-center px-4 py-20">
        {/* <Link href="#features" className="mb-8 bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-700">
          ✨ Discover TaskMaster Features →
        </Link> */}
        
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 max-w-4xl">
          Todos is the new way to organize your life.
        </h1>
        
        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
        Manage your tasks easily with our simple and beautiful to-do app. It built with the latest technology to help you get things done smoothly.
        </p>
        
        <Link href="#get-started" className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200">
          Get Started for free →
        </Link>
      </main>
        </>
    )
}