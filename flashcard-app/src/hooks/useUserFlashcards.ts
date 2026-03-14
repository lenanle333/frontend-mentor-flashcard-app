import { useEffect } from "react";
import { getUserFlashcards } from "../services/flashcardService";
import type { UserFlashcard } from "../types/UserFlashcard";

interface UserFlashcards {
	userId: string | undefined;
	setFlashcards: (flashcards: UserFlashcard[]) => void;
}

export function useUserFlashcards({ userId, setFlashcards }: UserFlashcards) {
	useEffect(() => {
		if (!userId) return;

		const unsubscribe = getUserFlashcards(userId, setFlashcards);
		return () => unsubscribe?.();
	}, [userId, setFlashcards]);
}
