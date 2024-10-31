import React from "react"
import cn from "classnames"

const Button = ({title, dark}) => {
	return (
		<button
			className={cn(
				"flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg",
				{dark}
			)}
		>
			<span>{title}</span>
			<span className="bg-white text-purple-600 rounded-full p-1 w-6 h-6 flex justify-center items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="w-4 h-4"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</span>
		</button>
	)
}

export default Button
