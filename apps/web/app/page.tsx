import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";
import { Logo } from "@/components/logo";

export default function HomePage() {
	return (
		<div className="min-h-screen scroll-smooth bg-background text-foreground">
			{/* ================= NAVBAR ================= */}
			<header className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur-xl supports-backdrop-filter:bg-background/40">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
					<div className="text-lg font-semibold tracking-tight">
						<Logo />
					</div>

					<nav className="hidden gap-8 text-sm md:flex">
						<a
							href="#features"
							className="text-muted-foreground hover:text-foreground transition"
						>
							Features
						</a>
						<a
							href="#workflow"
							className="text-muted-foreground hover:text-foreground transition"
						>
							Workflow
						</a>
						<a
							href="#performance"
							className="text-muted-foreground hover:text-foreground transition"
						>
							Performance
						</a>
						<a
							href="#faq"
							className="text-muted-foreground hover:text-foreground transition"
						>
							FAQ
						</a>
					</nav>

					<div className="flex items-center gap-3">
						<ThemeTogglerButton modes={["dark", "light"]} />
						<Button className="bg-amber-500 text-black hover:bg-amber-400">
							Download
						</Button>
					</div>
				</div>
			</header>

			{/* ================= HERO ================= */}
			<section className="mx-auto max-w-6xl px-6 py-16">
				<div className="grid gap-16 md:grid-cols-2 md:items-center">
					<div>
						<h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
							Record once. <br />
							Animate beautifully.
						</h1>

						<p className="mt-6 text-lg text-muted-foreground">
							Studio-style screen recordings with intelligent zoom, smooth
							cursor tracking, and high-quality exports — without the cloud
							bottleneck.
						</p>

						<div className="mt-8 flex gap-4">
							<Button className="bg-amber-500 text-black hover:bg-amber-400">
								Download for Windows
							</Button>
							<Button variant="outline">View Demo</Button>
						</div>

						<p className="mt-6 text-sm text-muted-foreground">
							Native performance • Offline processing • No upload delays
						</p>
					</div>

					{/* Better SVG Mock */}
					<div className="rounded-2xl border bg-card shadow-xl">
						<svg
							viewBox="0 0 900 600"
							className="w-full h-auto"
							xmlns="http://www.w3.org/2000/svg"
						>
							<defs>
								<linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
									<stop offset="0%" stopColor="#1f1f1f" />
									<stop offset="100%" stopColor="#111111" />
								</linearGradient>
							</defs>

							{/* App background */}
							<rect width="900" height="600" rx="24" fill="url(#grad)" />

							{/* Screen preview */}
							<rect
								x="60"
								y="60"
								width="780"
								height="420"
								rx="12"
								fill="#0f0f0f"
							/>

							{/* Cursor highlight */}
							<circle
								cx="420"
								cy="260"
								r="60"
								fill="none"
								stroke="#f59e0b"
								strokeWidth="4"
								opacity="0.8"
							/>

							{/* Webcam circle */}
							<circle cx="150" cy="470" r="60" fill="#f59e0b" />
							<circle cx="150" cy="470" r="54" fill="#000" />

							{/* UI lines */}
							<rect
								x="300"
								y="510"
								width="300"
								height="12"
								rx="6"
								fill="#333"
							/>
							<rect
								x="300"
								y="535"
								width="240"
								height="12"
								rx="6"
								fill="#333"
							/>
						</svg>
					</div>
				</div>
			</section>

			{/* ================= FEATURES ================= */}
			<section id="features" className="bg-muted/40 py-40">
				<div className="mx-auto max-w-6xl px-6">
					<h2 className="mb-12 text-4xl font-semibold tracking-tight">
						Built for polished screen content
					</h2>

					<div className="grid gap-6 md:grid-cols-3">
						<Card className="hover:shadow-lg transition">
							<CardHeader>
								<CardTitle>Smart Zoom & Cursor Tracking</CardTitle>
							</CardHeader>
							<CardContent className="text-muted-foreground">
								Automatically focus on important areas with smooth, cinematic
								motion.
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition">
							<CardHeader>
								<CardTitle>Dual Capture Modes</CardTitle>
							</CardHeader>
							<CardContent className="text-muted-foreground">
								Capture a clean animation-ready screen and the final composited
								output.
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition">
							<CardHeader>
								<CardTitle>Fully Offline Capable</CardTitle>
							</CardHeader>
							<CardContent className="text-muted-foreground">
								No uploads. No waiting. Full-resolution export on your machine.
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* ================= WORKFLOW ================= */}
			<section id="workflow" className="py-40">
				<div className="mx-auto max-w-6xl px-6">
					<h2 className="mb-12 text-4xl font-semibold tracking-tight">
						Simple workflow
					</h2>

					<div className="grid gap-12 md:grid-cols-3">
						<div>
							<h3 className="text-xl font-medium">1. Record</h3>
							<p className="mt-3 text-muted-foreground">
								Capture screen, webcam, and input events in high resolution.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-medium">2. Animate</h3>
							<p className="mt-3 text-muted-foreground">
								Apply smooth zoom transitions and cursor emphasis automatically.
							</p>
						</div>

						<div>
							<h3 className="text-xl font-medium">3. Export</h3>
							<p className="mt-3 text-muted-foreground">
								Render professional-quality videos ready for demos or tutorials.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ================= PERFORMANCE ================= */}
			<section id="performance" className="bg-muted/40 py-40">
				<div className="mx-auto max-w-6xl px-6">
					<h2 className="text-4xl font-semibold tracking-tight">
						Built for creators who care about quality
					</h2>

					<ul className="mt-8 space-y-3 text-muted-foreground">
						<li>• Native Windows performance</li>
						<li>• No cloud processing delays</li>
						<li>• Full-resolution export</li>
						<li>• Custom animation control</li>
						<li>• Lightweight architecture</li>
					</ul>
				</div>
			</section>

			{/* ================= FAQ ================= */}
			<section id="faq" className="pb-24 pt-36">
				<div className="mx-auto max-w-4xl px-6">
					<h2 className="mb-12 text-4xl font-semibold tracking-tight">
						Frequently Asked Questions
					</h2>

					<div className="space-y-8 text-muted-foreground">
						<div>
							<h4 className="font-medium text-foreground">
								Does it require internet?
							</h4>
							<p className="mt-2">
								Not Really. All processing can be done locally on your machine.
							</p>
						</div>

						<div>
							<h4 className="font-medium text-foreground">
								Is it optimized for high resolution?
							</h4>
							<p className="mt-2">
								Yes. Designed for crisp exports without compression artifacts.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ================= CTA ================= */}
			<section className="py-24 text-center">
				<div className="mx-auto max-w-4xl px-6">
					<h2 className="text-4xl font-semibold tracking-tight">
						Stop recording boring videos.
					</h2>

					<div className="mt-8">
						<Button className="bg-amber-500 text-black hover:bg-amber-400">
							Get Started
						</Button>
					</div>
				</div>
			</section>

			{/* ================= FOOTER ================= */}
			<footer className="border-t py-10">
				<div className="mx-auto max-w-6xl px-6 text-sm text-muted-foreground">
					© {new Date().getFullYear()} Tool. All rights reserved.
				</div>
			</footer>
		</div>
	);
}
