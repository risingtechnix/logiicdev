import React from "react"

const Contact = () => {
	return (
		<section className="flex items-center justify-center min-h-screen bg-[#fefff2] dark:bg-[#111827]">
			<div className="w-full max-w-4xl mx-auto text-center px-4">
				<h2 className="text-3xl font-bold text-gray-800 dark:text-white">
					GET IN TOUCH
				</h2>
				<p className="text-gray-600 mt-2 dark:text-[#ffffffac]">
					We will get back to you as soon as possible
				</p>
				<hr className="mt-6 mb-12 border-t-2 border-yellow-400 w-24 mx-auto" />

				<div className="flex flex-col md:flex-row md:space-x-8 items-start md:items-center justify-center">
					{/* Form Section */}
					<div className="w-full md:w-1/2 bg-white dark:bg-[#d4f0f0] shadow-md rounded-lg p-8">
						<form>
							<div className="mb-4">
								<input
									type="text"
									placeholder="Name"
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:bg-[#f0f8ee] focus:outline-none focus:border-yellow-500"
								/>
							</div>
							<div className="mb-4">
								<input
									type="email"
									placeholder="Email"
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:bg-[#f0f8ee] focus:outline-none focus:border-yellow-500"
								/>
							</div>
							<div className="mb-4">
								<input
									type="text"
									placeholder="Subject"
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:bg-[#f0f8ee] focus:outline-none focus:border-yellow-500"
								/>
							</div>
							<div className="mb-4">
								<textarea
									placeholder="Content/Material"
									rows="4"
									className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:bg-[#f0f8ee] focus:outline-none focus:border-yellow-500"
								></textarea>
							</div>

							<button
								type="submit"
								className="w-full bg-yellow-500 text-white dark:bg-[#f0f8ee] dark:text-[#256867] dark:hover:border-[#256867] font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
							>
								SEND
							</button>
						</form>
					</div>

					{/* Contact Details Section */}
					<div className="w-full md:w-1/2 mt-8 pl-6 md:mt-0 text-gray-700 dark:text-white text-left">
						<h3 className="text-lg font-semibold mb-4">HEADQUARTERS</h3>
						<p>Krottendorfer Str. 72/1, 8052 Graz, Austria</p>
						<h3 className="text-lg font-semibold mt-6 mb-4">PHONE</h3>
						<p>
							Mobile Number:{" "}
							<a href="tel:+436764639222" className="text-yellow-500">
								+43 6764639222
							</a>
						</p>
						<h3 className="text-lg font-semibold mt-6 mb-4">E-MAIL</h3>
						<p>
							Support:{" "}
							<a href="mailto:contact@logiicdev.eu" className="text-yellow-500">
								contact@logiicdev.eu
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
