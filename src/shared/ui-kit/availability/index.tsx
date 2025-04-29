import { cn } from "@/shared/lib/utils"
import s from "./index.module.scss"

const Availability = () => {
	return (
		<div className='flex items-center gap-x-1 sm:gap-x-2 text-accent text-base sm:text-2xl'>
			<div className='flex justify-center items-center rounded-full size-4 sm:size-5 bg-accent-20'>
				<div className={cn("bg-accent rounded-full min-w-2 sm:min-w-2.5 size-2 sm:size-2.5", s.Circle)}></div>
			</div>
			<p className='font-medium leading-none tracking-[-0.01em]'>2 spots available for May</p>
		</div>
	)
}

export default Availability
