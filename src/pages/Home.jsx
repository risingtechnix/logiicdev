import React from "react"
import HeroSection from "../components/HeroSection"
import WhatWeDo from "../components/Home/WhatWeDo"
import ProjectPlanning from "../components/Home/ProjectPlanning"
import Advantages from "../components/Home/Advantages"

const Home = () => {
	return (
		<>
			<HeroSection />
			<WhatWeDo />
			<ProjectPlanning />
			<Advantages />
		</>
	)
}

export default Home
