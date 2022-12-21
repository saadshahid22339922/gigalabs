import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Listing } from "./pages";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Listing />}></Route>
				<Route path="*" element={<Navigate to="/" />}></Route>
			</Routes>
		</div>
	);
}

export default App;
