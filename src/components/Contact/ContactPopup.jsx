import React, {useRef, useEffect} from "react"
import {motion} from "framer-motion"

const ContactPopup = ({onClose}) => {
	const popupRef = useRef(null)

	// Close popup when clicking outside of it
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (popupRef.current && !popupRef.current.contains(event.target)) {
				onClose()
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [onClose])

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<motion.div
				ref={popupRef}
				initial={{opacity: 0, y: -20}}
				animate={{opacity: 1, y: 0}}
				exit={{opacity: 0, y: -20}}
				transition={{duration: 0.3}}
				className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md mx-auto md:max-w-lg"
			>
				<h2 className="text-lg font-bold mb-4 text-center">Contact Us</h2>
				<form className="space-y-4">
					<label className="block">
						<span className="text-gray-700">Name</span>
						<input
							type="text"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
							placeholder="Your name"
						/>
					</label>
					<label className="block">
						<span className="text-gray-700">Email</span>
						<input
							type="email"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
							placeholder="Your email"
						/>
					</label>
					<label className="block">
						<span className="text-gray-700">Message</span>
						<textarea
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
							placeholder="Your message"
							rows="3"
						></textarea>
					</label>
					<div className="flex justify-center gap-10">
						<button
							type="button"
							onClick={onClose}
							className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
						>
							Send
						</button>
						<button
							type="button"
							onClick={onClose}
							className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
						>
							Close
						</button>
					</div>
				</form>
			</motion.div>
		</div>
	)
}

export default ContactPopup
