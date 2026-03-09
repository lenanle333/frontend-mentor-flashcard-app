import "./App.css";
import { NavBar } from "../components/NavBar";
import { FlashcardSection } from "../components/StudyMode/FlashcardSection";
import { StatisticsSection } from "../components/StudyMode/StatisticsSection";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import Button from "../components/ui/Button";
function App() {
	const handleLogout = async () => {
		try {
			await signOut(auth);
			console.log("Logged out success");
		} catch (error) {
			console.error("Error logging out:", error);
		}
	};
	return (
		<div className="screen-padding">
			<NavBar />
			<div className="flex flex-col gap-y-300 lg:flex-row lg:justify-between lg:gap-y-400">
				<FlashcardSection />
				<StatisticsSection />
			</div>
			{/* Temp logout */}
			<Button variant="secondary" onClick={handleLogout}>
				Logout
			</Button>
		</div>
	);
}

export default App;
