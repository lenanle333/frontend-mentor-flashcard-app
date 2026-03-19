import type { UserFlashcard } from "../types/UserFlashcard";

/**
 * Counts the number of mastered flashcards.
 * @param flashcards The users flashcard list.
 * @returns The total count of mastered cards.
 */
export const countTotalMastered = (flashcards: UserFlashcard[]) => {
	const totalMastered = flashcards.filter((card) => card.correctStreak >= 5).length;
	return totalMastered;
};

/**
 * Counts the number of times a category occurs in the users list of flashcards.
 * @param flashcards The user's flashcard list.
 * @returns The total count of categories.
 */
export const CountCategories = (flashcards: UserFlashcard[]): Record<string, number> => {
	return flashcards.reduce(
		(acc, currentCategory) => {
			const type = currentCategory.category;
			// If the type already exists in the accumulator, increment its count
			if (acc[type]) {
				acc[type] += 1;
			}
			// Otherwise, initialize its count to 1
			else {
				acc[type] = 1;
			}
			return acc;
		},
		{} as Record<string, number>,
	); // Initialize with an empty object
};

/**
 * Counts the number of in progress flashcards.
 * @param flashcards The users flashcard list.
 * @returns The total count of in progress cards.
 */
export const countTotalInProgress = (flashcards: UserFlashcard[]) => {
	const total_in_progress = flashcards.filter((card) => card.correctStreak < 5 && card.correctStreak > 0).length;
	return total_in_progress;
};

/**
 * Counts the number of not started flashcards.
 * @param flashcards The users flashcard list.
 * @returns The total count of not started cards.
 */
export const countTotalNotStarted = (flashcards: UserFlashcard[]) => {
	const total_not_started = flashcards.filter((card) => card.correctStreak < 1).length;
	return total_not_started;
};
