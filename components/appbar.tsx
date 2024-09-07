import Link from "next/link";

export function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">Todos</div>
        <div>
          <Link href="/login" className="mr-4 hover:text-gray-300">Log in</Link>
          <Link href="/signup" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Sign up</Link>
        </div>
      </nav>
    )
}