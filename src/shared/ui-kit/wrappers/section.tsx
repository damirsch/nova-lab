import { cn } from "@/shared/lib/utils"
import { HTMLAttributes } from "react"

const Section = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<section className={cn("px-[140px]", className)} {...props}>
			{children}
		</section>
	)
}

export default Section
