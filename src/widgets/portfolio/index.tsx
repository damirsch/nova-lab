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

	return (
		<section className={cn("flex flex-col border-t border-b mb-8", s.Portfolio)}>
			<Carousel setApi={setApi} className={s.Carousel}>
				<CarouselContent className='h-[280px] 3xs:h-[400px] sm:h-[500px] xl:h-[736px] cursor-pointer'>
					<CarouselItem>
						<div className={cn("relative h-full", s.Image)}>
							<Image className='object-cover' src='/portfolio/Cuckoo.png' fill alt='Cuckoo' />
							<button
								className={cn(
									"size-8 sm:size-11 flex items-center justify-center absolute bottom-3 sm:bottom-5 rounded-full right-3 sm:right-5 bg-[#000000B2]",
									s.Btn
								)}
							>
								<Plus className='size-5 sm:size-6' />
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
