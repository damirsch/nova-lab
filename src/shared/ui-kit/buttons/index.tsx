import { cn } from "@/shared/lib/utils"
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"
import s from "./index.module.scss"
import { Link } from "react-transition-progress/next"

type ButtonVariant = "primary" | "secondary"

interface BaseProps {
	variant?: ButtonVariant
	size?: "small" | "normal"
	className?: string
	children: React.ReactNode
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	href: string
} & BaseProps

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	href?: undefined
} & BaseProps

type ButtonOrLinkProps = LinkButtonProps | NativeButtonProps

const Button = (props: ButtonOrLinkProps) => {
	const { variant = "primary", size = "normal", className, children } = props

	const classNames = cn(
		size === "normal"
			? "py-4 sm:py-6 px-6 sm:px-10 text-base sm:text-2xl rounded-2xl sm:rounded-[20px]"
			: "text-xs sm:text-lg rounded-xl sm:rounded-2xl py-3 sm:py-4 px-4 sm:px-6",
		"flex items-center font-medium justify-center leading-none sm:leading-none",
		variant === "primary" ? "bg-primary text-white" : "bg-white border",
		s.Button,
		s[variant],
		className
	)

	if ("href" in props && props.href) {
		const { href, target, rel, ...linkProps } = props
		const isInternal = href.startsWith("/") || href.startsWith("#")

		if (isInternal) {
			return (
				<Link href={href} className={classNames} {...linkProps}>
					{children}
				</Link>
			)
		}

		return (
			<a
				href={href}
				className={classNames}
				target={target || "_blank"}
				rel={rel || "noopener noreferrer"}
				{...linkProps}
			>
				{children}
			</a>
		)
	}

	const buttonProps = props as NativeButtonProps

	return (
		<button className={classNames} {...buttonProps}>
			{children}
		</button>
	)
}

export default Button
