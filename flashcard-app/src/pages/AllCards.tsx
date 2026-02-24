import { useState } from "react";
import { NavBar } from "../components/NavBar";
import NewCard from "../components/NewCard";
import Button from "../components/Button";
import shuffleIcon from "../assets/images/icon-shuffle.svg";
import checkIcon from "../assets/images/icon-check.svg";
import { Dropdown } from "../components/Dropdown";
import FlashCard from "../components/FlashCard";
export default function AllCards() {
	const [isHidden, setIsHidden] = useState(false);
	return (
		<div className="items-center flex flex-col screen-padding gap-300 lg:gap-400 lg:items-start">
			<NavBar />
			<div className="flex flex-col self-stretch gap-300 lg:gap-400 lg:items-start">
				<NewCard />
				{/* Flashcard Controls */}
				<div className="flex pt-200 justify-between items-start self-stretch md:items-center">
					{/* Cateogry Filter */}
					<div className="flex flex-col justify-center items-start gap-125 flex-[1_0_0] md:flex-row md:gap-250 md:items-center md:justify-start">
						<Dropdown />
						{/* Hide Mastered Checkbox */}
						<div className="hide-filter" onClick={() => setIsHidden(!isHidden)}>
							<button className={isHidden === true ? "checked" : "checkbox"}>
								<img className={isHidden === true ? "block" : "hidden"} src={checkIcon} alt="hide mastered card" />
							</button>
							Hide Mastered
						</div>
					</div>
					<Button variant="border">
						<img src={shuffleIcon} alt="shuffle icon" />
						Shuffle
					</Button>
				</div>
				{/* Flashcards Container */}
				<div className="flex items-start content-start gap-250 self-stretch flex-wrap">
					<FlashCard />
				</div>
			</div>
		</div>
	);
}
