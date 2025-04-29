import { HTMLAttributes } from "react"
import { cn } from "../lib/utils"

interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
	isH1?: boolean
}

const Heading = ({ className, children, isH1, ...props }: HeadingProps) => {
	const classNames = cn("font-bold text-3xl sm:text-5xl leading-none sm:leading-[1.1] tracking-tight", className)

	if (!isH1)
		return (
			<h2 className={classNames} {...props}>
				{children}
			</h2>
		)

	return (
		<h1 className={classNames} {...props}>
			{children}
		</h1>
	)
}

export default Heading
