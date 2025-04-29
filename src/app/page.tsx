import Availability from "@/shared/ui-kit/availability"
import Button from "@/shared/ui-kit/buttons"
import Heading from "@/shared/ui-kit/heading"
import Section from "@/shared/ui-kit/wrappers/section"
import Portfolio from "@/widgets/portfolio"
import Image from "next/image"

export default function Home() {
	return (
		<>
			<Section className='flex flex-col gap-y-6'>
				<div className='flex flex-col gap-y-4'>
					<div className='relative rounded-full size-14 sm:size-24 overflow-hidden'>
						<Image className='object-cover' src='/me.jpg' alt='Damir' fill />
					</div>
					<Heading>
						I&apos;ll turn your 2007-looking website into something... <span className='font-lora'>sleek</span>
					</Heading>
				</div>
				<div className='flex flex-col gap-y-4 max-w-[492px]'>
					<Availability />
					<Button>Yes, I need it</Button>
				</div>
			</Section>

			<Portfolio />

			<Section>
				<Heading>
					I offer a variety of services — the <span className='font-lora'>choice is yours</span>
				</Heading>
			</Section>
		</>
	)
}
