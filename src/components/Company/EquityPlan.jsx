import React from "react"
import {motion} from "framer-motion"
const EquityPlan = () => {
	return (
		<div className="bg-[#fefff2] dark:bg-[#d4f0f0] p-4 md:p-8 lg:p-12 w-full mx-auto text-gray-800">
			<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8">
				Gender Equality Plan
			</h1>

			<motion.div
				initial={{opacity: 0, y: 20}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 0.6}}
				className="space-y-4 md:space-y-6"
			>
				<section>
					<p className="text-sm md:text-base lg:text-lg">
						Employees are the most important capital of any company, especially
						in times of immense international competition. A successful company
						must, therefore, offer employees an inspiring working environment.
						This can be achieved with a culture of openness, diversity, and
						appreciation.
					</p>
					<p className="text-sm md:text-base lg:text-lg mt-2">
						Aware of the fundamental importance of an open gender culture for
						technical excellence, logiicdev pursues a comprehensive strategy to
						support diversity so that different technical and social skills from
						different educational contexts and gender-role-specific competencies
						can develop optimally in the interest of logiicdev’s mission.
					</p>
					<p className="text-sm md:text-base lg:text-lg mt-2">
						Logiicdev commits itself to the career advancement of women and to
						creating positive and career-enhancing conditions for women. It,
						therefore, sees it as a joint task of all members of logiicdev to
						achieve the objective that women and men have opportunities to
						develop according to their qualifications and that any existing
						discrimination against women and men is eliminated or
						counterbalanced.
					</p>
				</section>

				<section>
					<h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 md:mt-8">
						Objectives of the Gender Equality Plan
					</h2>
					<ul className="list-disc pl-5 space-y-1 md:space-y-2 mt-3 md:mt-4 text-sm md:text-base lg:text-lg">
						<li>
							Implementation of structures for ongoing discussion and ensuring a
							permanent gender discourse
						</li>
						<li>
							Sustainable provision of resources for gender equality measures
						</li>
						<li>
							Increasing the proportion of women through recruiting, personnel
							development, and the provision of adequate work-life balance
						</li>
						<li>
							Supporting an appreciative organizational and communication
							culture through clear positioning and messages
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 md:mt-8">
						Participatory Anchoring
					</h2>
					<p className="text-sm md:text-base lg:text-lg mt-3 md:mt-4">
						For an effective and continuous implementation of gender equality
						measures, the different hierarchical levels and employee groups are
						invited to be involved in the development of gender activities.
					</p>
				</section>

				<section>
					<h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 md:mt-8">
						Gender Monitor
					</h2>
					<p className="text-sm md:text-base lg:text-lg mt-3 md:mt-4">
						The Gender Monitor provides logiicdev with a useful source of data
						over time. Key figures are collected and published every two years
						on the following aspects:
					</p>
					<ul className="list-disc pl-5 space-y-1 md:space-y-2 mt-3 md:mt-4 text-sm md:text-base lg:text-lg">
						<li>
							Recruiting: Ratio of female applications to recruitment of female
							employees
						</li>
						<li>Career Development: Proportion of women by occupation</li>
						<li>
							Reconciliation of professional and private life: Use of (parental)
							leave option across all employee groups
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 md:mt-8">
						Resources and Budget
					</h2>
					<p className="text-sm md:text-base lg:text-lg mt-3 md:mt-4">
						Logiicdev provides a budget based on the needs and the actions
						taken. Personal resources and responsibilities are assigned under
						the corresponding items of this plan.
					</p>
				</section>

				<section>
					<h2 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 md:mt-8">
						Measures of the Gender Equality Plan
					</h2>
					<p className="text-sm md:text-base lg:text-lg mt-3 md:mt-4">
						An organizational culture and work-life balance are key factors for
						gender equality, which in turn is the prerequisite for innovation,
						attractiveness as an employer, and thus economic success.
					</p>
					<ul className="list-disc pl-5 space-y-1 md:space-y-2 mt-3 md:mt-4 text-sm md:text-base lg:text-lg">
						<li>
							Gender equality, respect, and empowerment are at the heart of our
							understanding.
						</li>
						<li>
							The use of gender-equitable language in internal and external
							communication is mandatory.
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 md:mt-8">
						Objective: Supporting our employees in creating personal work-life
						balance
					</h2>
					<p className="text-sm md:text-base lg:text-lg mt-3 md:mt-4">
						The expectations for a work-life balance depend on what stage of
						life and career someone is in. Logiicdev makes it possible to
						organize working life according to individual needs and thus achieve
						an optimal work-life balance.
					</p>
					<ul className="list-disc pl-5 space-y-1 md:space-y-2 mt-3 md:mt-4 text-sm md:text-base lg:text-lg">
						<li>
							Flexible (part-time) working models with teleworking options
						</li>
						<li>Support for paternity leave and part-time leave for fathers</li>
					</ul>
				</section>

				<section>
					<h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-6 md:mt-8">
						Objective: Increasing the proportion of qualified female applicants
					</h2>
					<ul className="list-disc pl-5 space-y-1 md:space-y-2 mt-3 md:mt-4 text-sm md:text-base lg:text-lg">
						<li>Job advertisements are designed in a gender-sensitive way.</li>
						<li>
							Balanced selection process with obligatory participation of women.
						</li>
						<li>
							Unconscious Bias trainings offered to all involved in personnel
							recruitment.
						</li>
					</ul>
				</section>

				<footer className="mt-8 md:mt-10 text-center text-gray-700">
					<p className="text-xs md:text-sm">CEO MSc. Deepak V Katkoria</p>
				</footer>
			</motion.div>
		</div>
	)
}

export default EquityPlan
