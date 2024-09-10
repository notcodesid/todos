import { CheckSquare } from "lucide-react";
import Link from "next/link";

export function Appbar() {
    return (
        <nav className="p-4 flex justify-between items-center">
        <div className="text-xl font-bold flex ">
        <CheckSquare className="w-8 h-8 mr-2" />
          Todos
          </div>
        <div>
          <Link href="/login" className="mr-4 hover:text-gray-300">Log in</Link>
          <Link href="/signup" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Sign up</Link>
        </div>
      </nav>
    )
}