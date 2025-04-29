import { cn } from "@/shared/lib/utils"
import Logo from "@/shared/ui-kit/icons/logo"
import s from "./index.module.scss"
import { ProgressBar } from "react-transition-progress"
import Link from "next/link"
import Button from "@/shared/ui-kit/buttons"

const Header = () => {
	return (
		<header className={cn("fixed top-5 sm:top-9 left-0 right-0 px-7 z-50", s.Header)}>
			<ProgressBar className='top-0 left-0 z-40 absolute bg-primary opacity-20 h-1' />
			<div
				className={cn(
					"mx-auto flex items-center justify-between p-1 sm:p-2 border rounded-[14px] sm:rounded-[20px] bg-background w-full max-w-[526px]"
				)}
			>
				<div
					className={cn(
						"flex justify-center items-center bg-white border rounded-xl sm:rounded-2xl size-9 sm:size-[52px] cursor-pointer",
						s.Logo
					)}
				>
					<Logo className='size-4 sm:size-6' />
				</div>
				<ul className='flex gap-x-3 sm:gap-x-5 text-xs 2xs:text-sm sm:text-lg tracking-[-0.01em]'>
					<li>
						<Link href='#work'>Work</Link>
					</li>
					<li>
						<Link href='#pricing'>Pricing</Link>
					</li>
					<li>
						<Link href='#work'>Faq</Link>
					</li>
				</ul>
				<Button size='small'>Get a website</Button>
			</div>
		</header>
	)
}

export default Header
