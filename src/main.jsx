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
		],
	},
])

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
