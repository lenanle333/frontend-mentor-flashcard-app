import "./App.css";
import { NavBar } from "../components/NavBar";
import { FlashCard } from "../components/StudyMode/FlashCard";
import { Statistics } from "../components/StudyMode/Statistics";
function App() {
	return (
		<div className="screen-padding lg:not(first:flex-row))">
			<NavBar />
			{/* <div className="flex flex-col gap-300 lg:flex-row lg:gap-400"> */}
			<FlashCard />
			<Statistics />
			{/* </div> */}
		</div>
	);
}

export default App;
