import { cn } from "@/shared/lib/utils"
import Logo from "@/shared/ui-kit/icons/logo"
import s from "./index.module.scss"
import { ProgressBar } from "react-transition-progress"
import Link from "next/link"
import Button from "@/shared/ui-kit/buttons"

const Header = () => {
	return (
		<header
			className={cn(
				"mx-auto flex items-center justify-between p-2 border rounded-[20px] w-full max-w-[526px]",
				s.Header
			)}
		>
			<ProgressBar className='top-0 left-0 z-40 absolute bg-primary opacity-20 h-1' />
			<div
				className={cn(
					"flex justify-center items-center bg-white border rounded-2xl size-[52px] cursor-pointer",
					s.Logo
				)}
			>
				<Logo />
			</div>
			<ul className='flex gap-x-5 text-lg tracking-[-0.01em]'>
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
		</header>
	)
}

export default Header
