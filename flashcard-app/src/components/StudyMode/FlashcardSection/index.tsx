import { useState, useEffect } from "react";
import { Dropdown } from "../../ui/Dropdown";
import Button from "../../ui/Button";
import { Checkbox } from "../../ui/Checkbox";
import circle_check from "../../../assets/images/icon-circle-check.svg";
import shuffle_icon from "../../../assets/images/icon-shuffle.svg";
import reset_icon from "../../../assets/images/icon-reset.svg";
import prev_icon from "../../../assets/images/icon-chevron-left.svg";
import next_icon from "../../../assets/images/icon-chevron-right.svg";
import { ActiveCard } from "../ActiveCard";
import { useAuth } from "../../../hooks/useAuth";
import { getUserFlashcards } from "../../../services/flashcardService";
import type { Flashcard } from "../../../types/Flashcard";
import styles from "./index.module.css";

export const FlashcardSection = () => {
	const { userId } = useAuth();
	const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (!userId) return;
		const unsubscribe = getUserFlashcards(userId, setFlashcards);
		return () => unsubscribe();
	}, [userId]);

	const displayIndex = flashcards.length
		? Math.min(currentIndex, Math.max(0, flashcards.length - 1))
		: 0;
	const currentCard = flashcards[displayIndex];
	const canGoPrev = displayIndex > 0;
	const canGoNext = displayIndex < flashcards.length - 1 && flashcards.length > 0;

	const goPrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
	const goNext = () => setCurrentIndex((i) => Math.min(flashcards.length - 1, i + 1));

	return (
		<div className={styles.container}>
			{/* Header */}
			<div className={styles.header}>
				<div className={styles.flashcard_controls}>
					<div className={styles.filters}>
						<Dropdown />
						<Checkbox label="Hide Mastered" />
					</div>
					{/* TODO: ADD SHUFFLE FUNCTIONALITY */}
					<Button variant="border" onClick={() => ""}>
						<img src={shuffle_icon} alt="shuffle" />
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
						<img src={circle_check} alt="I know this" />I Know This
					</Button>
					<Button variant="secondary" className="w-full md:w-auto">
						<img src={reset_icon} alt="reset progress" />
						Reset Progress
					</Button>
				</div>
			</div>
			<div className={styles.divider} />
			{/* Navigation */}
			<div className={styles.nav_controls}>
				<button className={styles.nav_button} onClick={goPrev} disabled={!canGoPrev} type="button">
					<img src={prev_icon} alt="Previous Card" />
					<span className="hidden md:flex">Previous</span>
				</button>
				<span>
					Card {flashcards.length ? displayIndex + 1 : 0} of {flashcards.length}
				</span>
				<button className={styles.nav_button} onClick={goNext} disabled={!canGoNext} type="button">
					<span className="hidden md:flex">Next</span>
					<img src={next_icon} alt="Next Card" />
				</button>
			</div>
		</div>
	);
};
