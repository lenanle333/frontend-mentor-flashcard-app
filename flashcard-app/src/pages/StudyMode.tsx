import { NavBar } from "../components/NavBar";
import { FlashCard } from "../components/StudyMode/FlashCard";
import { Statistics } from "../components/StudyMode/Statistics";
export default function StudyMode() {
	return (
		<div className="flex flex-col screen-padding gap-300 lg:gap-400">
			<NavBar />
			<div className="flex flex-col lg:flex-row gap-300 lg:gap-400">
				<FlashCard />
				<Statistics />
			</div>
		</div>
	);
}
