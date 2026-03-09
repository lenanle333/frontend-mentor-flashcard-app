import "./App.css";
import { NavBar } from "../components/NavBar";
import { FlashcardSection } from "../components/StudyMode/FlashcardSection";
import { StatisticsSection } from "../components/StudyMode/StatisticsSection";
// import Playground from "../pages/Playground";
function App() {
	return (
		<div className="screen-padding">
			<NavBar />
			<div className="flex flex-col gap-y-300 lg:flex-row lg:justify-between lg:gap-y-400">
				<FlashcardSection />
				<StatisticsSection />
			</div>
			{/* <Playground /> */}
		</div>
	);
}

export default App;
