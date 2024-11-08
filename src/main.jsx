import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import {createBrowserRouter, Route, RouterProvider} from "react-router-dom"
import ErrorPage from "./pages/ErrorPage.jsx"
import Solution from "./pages/Solution.jsx"
import Product from "./pages/Product.jsx"
import Company from "./pages/Company.jsx"
import Research from "./pages/Research.jsx"
import Contact from "./pages/Contact.jsx"
import Home from "./pages/Home.jsx"
import Product1 from "./components/Products/Product1.jsx"
import Product2 from "./components/Products/Product2.jsx"
import Product3 from "./components/Products/Product3.jsx"
import Iot from "./components/Solution/Iot.jsx"
import EnergyEfficiency from "./components/Solution/EnergyEfficiency.jsx"
import Mobility from "./components/Solution/Mobility.jsx"
import Drones from "./components/Solution/Drones.jsx"
import FpgaAndAi from "./components/Research/FpgaAndAi.jsx"
import Testing from "./components/Research/Testing.jsx"	

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "/solution",
				element: <Solution />,
			},
			{
				path: "/product",
				element: <Product />,
			},
			{
				path: "/company",
				element: <Company />,
			},
			{
				path: "/research",
				element: <Research />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/product1",
				element: <Product1 />,
			},
			{
				path: "/product2",
				element: <Product2 />,
			},
			{
				path: "/product3",
				element: <Product3 />,
			},
			{
				path: "/iot",
				element: <Iot />,
			},
			{
				path: "/energyEfficiency",
				element: <EnergyEfficiency />,
			},
			{
				path: "/mobility",
				element: <Mobility />,
			},
			{
				path: "/drones",
				element: <Drones />,
			},
			{
				path: "/fpgaAndAi",
				element: <FpgaAndAi/>,
			},
			{
				path: "/testing",
				element: <Testing/>,
			},
		],
	},
])

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
