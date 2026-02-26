import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="h-full w-full flex justify-center items-center p-2">
			<Button>Hello</Button>
			<ThemeTogglerButton
				modes={["dark", "light"]}
				size={"lg"}
				direction="ltr"
			/>
		</div>
	);
}
