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
		],
	},
])

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
