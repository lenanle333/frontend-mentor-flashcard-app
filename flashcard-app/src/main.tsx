import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import AllCards from "./pages/AllCards.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<App />} />
				<Route path="allCards" element={<AllCards />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
