import type { UserFlashcard } from "../types/UserFlashcard";
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useUserFlashcards } from "../hooks/useUserFlashcards";
import { NavBar } from "../components/NavBar";
import FlashcardForm from "../components/forms/FlashcardForm";
import Button from "../components/ui/Button";
import { Checkbox } from "../components/ui/Checkbox";
import { shuffleIcon } from "../assets/images";
import { CategoryDropdown } from "../components/ui/CategoryDropdown";
import Flashcard from "../components/Flashcard";
import { handleFilterByCategory, handleFilterByMastered } from "../utils/filter_cards_utils";

export default function AllCards() {
	const { user } = useAuth();
	const [flashcards, setFlashcards] = useState<UserFlashcard[]>([]);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [hideMasteredCards, setHideMasteredCards] = useState(false);

	useUserFlashcards({ userId: user?.uid, setFlashcards });

	// Filtered by category
	const cards_filtered_by_category = handleFilterByCategory(selectedCategories, flashcards);
	// Hide mastered cards
	const visibleFlashcards = handleFilterByMastered(hideMasteredCards, cards_filtered_by_category);

	const handleHideMasteredCards = () => {
		setHideMasteredCards((check) => !check);
	};
	return (
		<div className="screen-padding relative">
			<NavBar />
			<div className="flex flex-col self-stretch gap-300 lg:gap-400 ">
				<FlashcardForm />
				{/* Flashcard Controls */}
				<div className="flex pt-200 justify-between items-start self-stretch md:items-center">
					<div className="flex flex-col justify-center items-start gap-125 flex-[1_0_0] md:flex-row md:gap-250 md:items-center md:justify-start">
						{/* Cateogry Filter */}
						<CategoryDropdown selectedCategories={selectedCategories} onSelectionChange={setSelectedCategories} />
						{/* Hide Mastered Checkbox */}
						<Checkbox label="Hide Mastered" checked={hideMasteredCards} onChange={handleHideMasteredCards} />
					</div>
					<Button variant="border">
						<img src={shuffleIcon} alt="shuffle icon" />
						Shuffle
					</Button>
				</div>
				{/* Flashcards Container */}
				<div className="flex items-start content-start gap-200 self-stretch flex-wrap lg:gap-300 ">
					{visibleFlashcards.map((flashcards) => (
						<React.Fragment key={flashcards.id}>
							<Flashcard
								id={flashcards.id}
								question={flashcards.question}
								answer={flashcards.answer}
								category={flashcards.category}
								correctStreak={flashcards.correctStreak}
								userId={flashcards.userId}
							/>
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	);
}
