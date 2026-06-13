'use client'
// import Link from "next/link";

import { useRouter } from "next/navigation";

const HomePage = () => {
    console.log('Hello World From the Home Page');
   
    const router = useRouter();

    const handleNavigation = () => {
        router.push('/dashboard')
    }

    return (
        <div className="text-center flex flex-col justify-center items-center gap-4 min-h-screen">
            <h1 className="text-4xl">Welcome Next JS Home Page</h1>
            <p className="text-6xl">React Server Component (RSC)</p>
            <div>
                {/* OPTION : 1 */}
                {/* <Link href='/dashboard'><button>Dashboard</button></Link> */}

                {/* OPTION: 2 */}
                <button onClick={handleNavigation}>Dashboard</button>
            </div>
        </div>
    );
};

export default HomePage;