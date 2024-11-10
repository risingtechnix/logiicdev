import React from "react"
import qualityBadge from "../../assets/quality_check.png"
import Logo from "../../assets/logo.png"
const Impressum = () => {
	return (
		<div>
			<div className="flex flex-col md:flex-row items-center justify-center gap-8 space-y-8 md:space-y-0 md:space-x-12 p-6 bg-gray-50 dark:bg-[#111827]">
				{/* Left Column - Logo and Contact Details */}
				<div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
					<img src={Logo} alt="logiicdev Logo" className="w-20 h-auto mb-2" />{" "}
					{/* Replace with your logo path */}
					<h2 className="text-lg font-semibold text-green-600 ">logiicdev</h2>
					<p className="dark:text-white">
						Firma Logiicdev e.U.
						<br />
						Krottendorfer Str. 72/1, 8052 Graz
					</p>
					<p className="dark:text-white">
						Mobile:{" "}
						<a
							href="tel:+436764639222"
							className="text-blue-600 hover:underline"
						>
							+43 6764639222
						</a>
						<br />
						<a
							href="mailto:contact@logiicdev.eu"
							className="text-blue-600 hover:underline"
						>
							contact@logiicdev.eu
						</a>
					</p>
				</div>
				<div className="bg-black w-[1px] h-20 dark:bg-white"></div>
				{/* Center Column - Quality Badge */}
				<div className="flex justify-center items-center">
					<img src={qualityBadge} alt="Quality Badge" className="w-42 h-auto" />
				</div>
				<div className="bg-black w-[1px] h-20 dark:bg-white"></div>

				{/* Right Column - Company Information */}
				<div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2 text-gray-700 dark:text-white">
					<p>
						<strong>VAT number:</strong> ATU75107448
					</p>
					<p>
						<strong>Commercial register number:</strong> FN 552790 b
					</p>
					<p>
						<em>Rechtsform:</em> Einzelunternehmer
					</p>
					<p>
						<em>Geschäftszweig:</em> IT Consultancy
					</p>
					<p>
						<em>Sitz in politischer Gemeinde Graz</em>
					</p>
					<a
						href="https://www.logiicdev.eu/wp-content/uploads/2023/02/Gender_equality_plan_logicdev.pdf"
						className="text-blue-600 hover:underline"
					>
						Gender Equality Policy
					</a>
				</div>
			</div>
			<div className="bg-gray-50 p-6 dark:bg-[#111827]">
				<div className="text-center space-y-4 text-gray-800 dark:text-white">
					{/* Gewerbeordnung Section */}
					<div>
						<p>
							Berufsrecht Gewerbeordnung:{" "}
							<a
								href="https://www.ris.bka.gv.at"
								className="text-blue-600 hover:underline"
							>
								www.ris.bka.gv.at
							</a>
						</p>
					</div>

					{/* Register Court Section */}
					<div>
						<p className="font-semibold">Commercial register court:</p>
						<p>Landesgericht für ZRS Graz, Gerichtsabteilung 25 Graz</p>
						<p>Supervisory / trade authority: Magistrat ZRS Graz</p>
					</div>

					{/* EU Dispute Resolution Section */}
					<div>
						<p>
							Customers have the opportunity to submit complaints to the EU’s
							online dispute resolution platform:
							<a
								href="http://ec.europa.eu/odr"
								className="text-blue-600 hover:underline"
							>
								{" "}
								http://ec.europa.eu/odr
							</a>
							. You can also send any complaints to the e-mail address given
							above.
						</p>
					</div>

					{/* Owner Information */}
					<div>
						<p className="font-semibold">Inhaber: MSc. Deepak V Katkoria</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Impressum
