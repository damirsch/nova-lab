import { cn } from "@/shared/lib/utils"
import Image from "next/image"
import s from "./index.module.scss"
import Plus from "@/shared/ui-kit/icons/plus"

const Portfolio = () => {
	return (
		<section className={cn("flex flex-col border-t border-b", s.Portfolio)}>
			<div className={cn("relative h-[736px]", s.Image)}>
				<Image className='object-cover' src='/portfolio/Cuckoo.png' fill alt='Cuckoo' />
				<button
					className={cn(
						"size-11 flex items-center justify-center absolute bottom-5 rounded-full right-5 bg-[#000000B2]",
						s.Btn
					)}
				>
					<Plus />
				</button>
			</div>
		</section>
	)
}

export default Portfolio
