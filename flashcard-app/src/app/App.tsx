import "./App.css";
import { NavBar } from "../components/NavBar";
import { FlashCard } from "../components/StudyMode/FlashCard";
import { Statistics } from "../components/StudyMode/Statistics";
function App() {
	return (
		<div className="screen-padding">
			<NavBar />
			<div className="flex flex-col gap-y-300 lg:flex-row lg:justify-between lg:gap-y-400">
				<FlashCard />
				<Statistics />
			</div>
		</div>
	);
}

export default App;
