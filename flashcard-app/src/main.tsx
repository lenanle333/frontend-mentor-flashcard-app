import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AllCards from "./pages/AllCards.tsx";
import Login from "./pages/Login.tsx";
import SignUp from "./pages/SignUp.tsx";
import "./index.css";
import Home from "./pages/Home.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="app" element={<App />} />
				<Route path="allCards" element={<AllCards />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
