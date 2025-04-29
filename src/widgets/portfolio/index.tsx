import { cn } from "@/shared/lib/utils"
import Image from "next/image"
import s from "./index.module.scss"
import Plus from "@/shared/ui-kit/icons/plus"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/shared/components/ui/carousel"

const Portfolio = () => {
	return (
		<section className={cn("flex flex-col border-t border-b mb-8", s.Portfolio)}>
			<Carousel className={s.Carousel}>
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
				<div className='-bottom-7 left-1/2 absolute flex gap-x-4 -translate-x-1/2 translate-y-full'>
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
		</section>
	)
}

export default Portfolio
