import { NavBar } from "../components/NavBar";
import FlashcardForm from "../components/forms/FlashcardForm";
import Button from "../components/ui/Button";
import { Checkbox } from "../components/ui/Checkbox";
import shuffleIcon from "../assets/images/icon-shuffle.svg";
import { Dropdown } from "../components/ui/Dropdown";
import Flashcard from "../components/Flashcard";
export default function AllCards() {
	return (
		<div className="screen-padding">
			<NavBar />
			<div className="flex flex-col self-stretch gap-300 lg:gap-400 ">
				<FlashcardForm />
				{/* Flashcard Controls */}
				<div className="flex pt-200 justify-between items-start self-stretch md:items-center">
					{/* Cateogry Filter */}
					<div className="flex flex-col justify-center items-start gap-125 flex-[1_0_0] md:flex-row md:gap-250 md:items-center md:justify-start">
						<Dropdown />
						{/* Hide Mastered Checkbox */}
						<Checkbox label="Hide Mastered" />
					</div>
					<Button variant="border">
						<img src={shuffleIcon} alt="shuffle icon" />
						Shuffle
					</Button>
				</div>
				{/* Flashcards Container */}
				<div className="flex items-start content-start gap-250 self-stretch flex-wrap">
					<Flashcard />
					<Flashcard />
					<Flashcard />
				</div>
			</div>
		</div>
	);
}
