"use client"
import { cn } from "@/shared/lib/utils"
import Image from "next/image"
import s from "./index.module.scss"
import Plus from "@/shared/ui-kit/icons/plus"
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/shared/components/ui/carousel"
import { useEffect, useState } from "react"

const Portfolio = () => {
	const [api, setApi] = useState<CarouselApi | null>(null)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (!api) return
		const onSelect = () => {
			setSelectedIndex(api.selectedScrollSnap())
		}
		setScrollSnaps(api.scrollSnapList())
		api.on("select", onSelect)
		onSelect()
		return () => {
			api.off("select", onSelect)
		}
	}, [api])

	const handleItemClick = () => {
		setIsOpen((prev) => !prev)
	}

	return (
		<section className={cn("flex flex-col border-t border-b mb-8", s.Portfolio)}>
			<Carousel setApi={setApi} className={s.Carousel}>
				<CarouselContent className='h-[280px] 3xs:h-[400px] sm:h-[500px] xl:h-[736px] cursor-pointer'>
					<CarouselItem onClick={handleItemClick}>
						<div className={cn("relative h-full", s.Image)}>
							<Image className='object-cover' src='/portfolio/Cuckoo.png' fill alt='Cuckoo' />
							<div
								className={cn(
									"absolute bg-[#FFFFFFB2] backdrop-blur size-full transition-opacity duration-300",
									isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
								)}
							>
								<div className='h-full overflow-y-auto'>
									<div className='flex flex-col justify-center items-center gap-y-9 px-4 pt-10 pb-10 min-h-full'>
										<div className='flex items-center gap-x-3 font-bold text-5xl'>Cuckoo</div>
										<div className='flex justify-center items-center gap-x-5 w-full'>
											<div
												style={{ borderColor: "var(--border-secondary)" }}
												className='relative border rounded-xl w-full xl:w-[360px] h-[242px]'
											></div>
											<div className='w-[142px]'></div>
											<div
												style={{ borderColor: "var(--border-secondary)" }}
												className='relative border rounded-xl w-full xl:w-[360px] h-[242px]'
											></div>
										</div>
										<div className='xl:max-w-[744px] text-secondary text-2xl leading-[1.3]'>
											I shared this design on Twitter, where it reached over 40K views and received a lot of positive
											feedback. One of the key ideas was to visually highlight the word “Break” in the headline — a
											simple but original touch that caught a lot of attention.
										</div>
									</div>
								</div>
							</div>

							<button
								className={cn(
									"size-8 sm:size-11 flex items-center justify-center absolute bottom-3 sm:bottom-5 rounded-full right-3 sm:right-5 bg-[#000000B2]",
									s.Btn
								)}
							>
								<Plus className={cn("size-5 sm:size-6 transition-transform duration-200", isOpen && "rotate-45")} />
							</button>
						</div>
					</CarouselItem>
					<CarouselItem>...</CarouselItem>
				</CarouselContent>

				<div className='-bottom-7 left-1/2 absolute flex items-center gap-x-3 -translate-x-1/2 translate-y-full'>
					<CarouselPrevious />
					<div className='flex gap-x-1 mt-auto'>
						{scrollSnaps.map((_, index) => (
							<button
								key={index}
								onClick={() => api?.scrollTo(index)}
								style={{ borderColor: "var(--border-secondary)" }}
								className={cn(
									"size-2 rounded-full transition-all border",
									index === selectedIndex && "bg-border-secondary"
								)}
							/>
						))}
					</div>
					<CarouselNext />
				</div>
			</Carousel>
		</section>
	)
}

export default Portfolio
