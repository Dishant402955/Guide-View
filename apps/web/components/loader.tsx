import Image from "next/image";

export const Loader = ({
	height = 35,
	width = 35,
}: {
	height?: number;
	width?: number;
}) => {
	return (
		<div className="flex justify-center items-center p-2">
			<Image
				src={"/logo-6.svg"}
				alt="logo"
				height={height}
				width={width}
				className="animate-spin"
			/>
		</div>
	);
};
