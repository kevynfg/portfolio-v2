"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = {
	"/": {
		name: "home",
	},
	"/about": {
		name: "sobre",
	},
};

export default function Navbar() {
	let pathname = usePathname() || "/";
	return (
		<motion.nav
			className="w-full border-b border-b-[#625959] mb-10"
			initial={{ y: -80 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 90, damping: 30 }}>
			<div className="flex justify-end flex-wrap gap-5 my-2 mx-4">
				{Object.entries(navItems).map(([path, { name }]) => {
					let isActive = path === pathname;
					return (
						<Link
							key={path}
							href={path}
							className={clsx("transition-all hover:text-neutral-700 hover:text-neutral-200 py-2 px-3 text-xl font-serif", {
								"text-neutral-400": !isActive,
								"font-bold": isActive,
							})}>
							{name}
						</Link>
					);
				})}
			</div>
		</motion.nav>
	);
}
