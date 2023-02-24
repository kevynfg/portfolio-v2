'use client'

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
    '/': {
        name: 'home'
    },
    '/about': {
        name: 'about'
    }
}

export default function Navbar() {
    let pathname = usePathname() || '/';
    console.log(pathname)
    return (
        <nav className="w-full border-b">
            <div className="flex justify-end flex-wrap gap-5 my-2 mx-4">
                {Object.entries(navItems).map(([path, {name}]) => {
                    let isActive = path === pathname;
                    return (
                        <Link 
                            key={path}
                            href={path}
                            className={clsx(
                                "transition-all hover:text-neutral-700 hover:text-neutral-200 py-2 px-3",
                                {
                                    'text-neutral-400': !isActive,
                                    'font-bold': isActive
                                }
                            )}

                        >
                            {name}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}