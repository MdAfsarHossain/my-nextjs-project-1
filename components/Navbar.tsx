'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);
    
    return (
        <nav className="w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
            <div className="text-xl font-bold">
                <Link href="/">Next JS</Link>
                </div>

            <div className="flex justify-center items-center space-x-6">
                <input className="bg-white rounded-2xl py-1 text-black px-2" placeholder="Search..."></input>
                <Link href="/products" className={pathname === '/products' ? "underline text-blue-800" : "hover:underline text-gray-100"}>Products</Link>
                <Link href="/about" className={pathname === '/about' ? "underline text-blue-800" : "hover:text-gray-300"}>About</Link>
                <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
                <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
                <Link href="/login" className="hover:text-gray-300">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;