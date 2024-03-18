import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";

//importing the components
import RootLayout from "./layout/RootLayout";
import PdfDetails from "./pages/PdfDetails";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<PdfDetails />} />
			</Route>
		)
	);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
