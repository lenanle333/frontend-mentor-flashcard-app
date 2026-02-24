import "./App.css";
import { NavBar } from "../components/NavBar";
import { FlashCard } from "../components/StudyMode/FlashCard";
import { Statistics } from "../components/StudyMode/Statistics";
function App() {
	return (
		<div className="screen-padding">
			<NavBar />
			<FlashCard />
			<Statistics />
		</div>
	);
}

export default App;
