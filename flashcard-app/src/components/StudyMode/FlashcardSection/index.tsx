import { useState } from "react";
import { CategoryDropdown } from "../../ui/CategoryDropdown";
import Button from "../../ui/Button";
import { Checkbox } from "../../ui/Checkbox";
import { circleCheckIcon, shuffleIcon, resetIcon, leftIcon, rightIcon } from "../../../assets/images";
import { ActiveCard } from "../ActiveCard";
import { useAuth } from "../../../hooks/useAuth";
import { useUserFlashcards } from "../../../hooks/useUserFlashcards";
import type { UserFlashcard } from "../../../types/UserFlashcard";
import styles from "./index.module.css";

export const FlashcardSection = () => {
	const { user } = useAuth();
	const [flashcards, setFlashcards] = useState<UserFlashcard[]>([]);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useUserFlashcards({ userId: user?.uid, setFlashcards });

	const filteredFlashcards =
		selectedCategories.length === 0
			? flashcards
			: flashcards.filter((card) => card.category && selectedCategories.includes(card.category));

	const displayIndex = filteredFlashcards.length
		? Math.min(currentIndex, Math.max(0, filteredFlashcards.length - 1))
		: 0;
	const currentCard = filteredFlashcards[displayIndex];
	const canGoPrev = displayIndex > 0;
	const canGoNext = displayIndex < filteredFlashcards.length - 1 && filteredFlashcards.length > 0;

	const goPrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
	const goNext = () => setCurrentIndex((i) => Math.min(filteredFlashcards.length - 1, i + 1));

	return (
		<div className={styles.container}>
			{/* Header */}
			<div className={styles.header}>
				<div className={styles.flashcard_controls}>
					<div className={styles.filters}>
						<CategoryDropdown selectedCategories={selectedCategories} onSelectionChange={setSelectedCategories} />
						<Checkbox label="Hide Mastered" />
					</div>
					{/* TODO: ADD SHUFFLE FUNCTIONALITY */}
					<Button variant="border" onClick={() => ""}>
						<img src={shuffleIcon} alt="shuffle" />
						Shuffle
					</Button>
				</div>
			</div>
			<div className={styles.divider} />
			{/* FlashCard Section */}
			<div className={styles.flashcard_container}>
				<div className="w-full flex-center">
					{currentCard ? (
						<ActiveCard {...currentCard} />
					) : (
						<p className={styles.empty}>No flashcards yet. Add some to get started.</p>
					)}
				</div>
				<div className={styles.actions}>
					<Button variant="primary" className="w-full md:w-auto">
						<img src={circleCheckIcon} alt="I know this" />I Know This
					</Button>
					<Button variant="secondary" className="w-full md:w-auto">
						<img src={resetIcon} alt="reset progress" />
						Reset Progress
					</Button>
				</div>
			</div>
			<div className={styles.divider} />
			{/* Navigation */}
			<div className={styles.nav_controls}>
				<button className={styles.nav_button} onClick={goPrev} disabled={!canGoPrev} type="button">
					<img src={leftIcon} alt="Previous Card" />
					<span className="hidden md:flex">Previous</span>
				</button>
				<span>
					Card {filteredFlashcards.length ? displayIndex + 1 : 0} of {filteredFlashcards.length}
				</span>
				<button className={styles.nav_button} onClick={goNext} disabled={!canGoNext} type="button">
					<span className="hidden md:flex">Next</span>
					<img src={rightIcon} alt="Next Card" />
				</button>
			</div>
		</div>
	);
};
