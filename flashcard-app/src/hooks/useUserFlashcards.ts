import { useEffect } from "react";
import { getUserFlashcards } from "../services/flashcardService";
import type { Flashcard } from "../types/Flashcard";

interface UserFlashcards {
	userId: string | undefined;
	setFlashcards: (flashcards: Flashcard[]) => void;
}

export function useUserFlashcards({ userId, setFlashcards }: UserFlashcards) {
	useEffect(() => {
		if (!userId) return;

		const unsubscribe = getUserFlashcards(userId, setFlashcards);
		return () => unsubscribe?.();
	}, [userId, setFlashcards]);
}
