import React from "react"
import HeroSection from "../components/Home/HeroSection"
import WhatWeDo from "../components/Home/WhatWeDo"
import ProjectPlanning from "../components/Home/ProjectPlanning"
import Advantages from "../components/Home/Advantages"
import ProjectSection from "../components/Home/ProjectSection"
import StatsSection from "../components/Home/StatsSection"
import CallToAction from "../components/CallToAction"

const Home = () => {
	return (
		<>
			<HeroSection />
			<WhatWeDo />
			{/* <ProjectPlanning /> */}
			<Advantages />
			<ProjectSection />
			<StatsSection />
			<CallToAction />
		</>
	)
}

export default Home
