import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link
			href={"/"}
			className="flex justify-center items-center px-4 py-2 m-2 space-x-3 hover:bg-neutral-50/10 rounded-2xl ring-accent/20 ring-[1px]"
		>
			<Image src={"/logo-6.svg"} alt="logo" height={25} width={25} />
			<h2 className="text-2xl">Logo</h2>
		</Link>
	);
};
