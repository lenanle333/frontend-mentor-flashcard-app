import type { UserFlashcard } from "../types/UserFlashcard";
/**
 * Filters flashcards by selected category.
 * @param selectedCategories The categories selected by the user.
 * @param flashcards The users flashcard list.
 * @returns The flashcards whose categories were selected.
 */
export const handleFilterByCategory = (selectedCategories: string[], flashcards: UserFlashcard[]) => {
	return selectedCategories.length === 0
		? flashcards
		: flashcards.filter((card) => card.category && selectedCategories.includes(card.category));
};
/**
 * Filters flashcards by selected category & cards mastered.
 * @param hideMasteredCards Is hide mastered cards checked?
 * @param flashcards The users flashcard list.
 * @returns The flashcards whose categories were selected and not yet mastered.
 */
export const handleFilterByMastered = (hideMasteredCards: boolean, flashcards: UserFlashcard[]) => {
	return hideMasteredCards ? flashcards.filter((card) => card.correctStreak < 5) : flashcards;
};
