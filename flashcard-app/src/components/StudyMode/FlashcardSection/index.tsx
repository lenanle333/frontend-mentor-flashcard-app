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
import { handleFilterByCategory, handleFilterByMastered } from "../../../utils/filter_cards_utils";
import { updateFlashcard } from "../../../services/flashcardService";

export const FlashcardSection = () => {
	const { user } = useAuth();
	const [flashcards, setFlashcards] = useState<UserFlashcard[]>([]);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [hideMasteredCards, setHideMasteredCards] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	useUserFlashcards({ userId: user?.uid, setFlashcards });
	// Hide cards not selected
	const cards_filtered_by_category = handleFilterByCategory(selectedCategories, flashcards);
	// Hide mastered cards
	const visibleFlashcards = handleFilterByMastered(hideMasteredCards, cards_filtered_by_category);

	const handleHideMasteredCards = () => {
		setHideMasteredCards((check) => !check);
	};

	const displayIndex = visibleFlashcards.length ? Math.min(currentIndex, Math.max(0, visibleFlashcards.length - 1)) : 0;
	const currentCard = visibleFlashcards[displayIndex];
	const canGoPrev = displayIndex > 0;
	const canGoNext = displayIndex < visibleFlashcards.length - 1 && visibleFlashcards.length > 0;

	const goPrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
	const goNext = () => setCurrentIndex((i) => Math.min(visibleFlashcards.length - 1, i + 1));

	// Update progress
	const handleClickCardKnown = async () => {
		try {
			if (currentCard.correctStreak < 5) {
				const newStreak = currentCard.correctStreak + 1;
				const updatedFlashcard: Partial<UserFlashcard> = {
					correctStreak: newStreak,
				};
				await updateFlashcard(currentCard.id, updatedFlashcard);
				goNext();
			} else return;
		} catch (error) {
			console.log(error);
		}
	};
	// Reset Flashcard progress
	const handleClickReset = async () => {
		try {
			if (currentCard.correctStreak === 0) {
				return;
			} else {
				const updatedFlashcard: Partial<UserFlashcard> = {
					correctStreak: 0,
				};
				await updateFlashcard(currentCard.id, updatedFlashcard);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className={styles.container}>
			{/* Header */}
			<div className={styles.header}>
				<div className={styles.flashcard_controls}>
					<div className={styles.filters}>
						{/* Category selection */}
						<CategoryDropdown selectedCategories={selectedCategories} onSelectionChange={setSelectedCategories} />
						{/* Hide mastered cards */}
						<Checkbox label="Hide Mastered" checked={hideMasteredCards} onChange={handleHideMasteredCards} />
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
					{/* I know this  */}
					<Button variant="primary" className="w-full md:w-auto" onClick={handleClickCardKnown}>
						<img src={circleCheckIcon} alt="I know this" />I Know This
					</Button>
					{/* Reset progress  */}
					<Button variant="secondary" className="w-full md:w-auto" onClick={handleClickReset}>
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
					Card {visibleFlashcards.length ? displayIndex + 1 : 0} of {visibleFlashcards.length}
				</span>
				<button className={styles.nav_button} onClick={goNext} disabled={!canGoNext} type="button">
					<span className="hidden md:flex">Next</span>
					<img src={rightIcon} alt="Next Card" />
				</button>
			</div>
		</div>
	);
};
