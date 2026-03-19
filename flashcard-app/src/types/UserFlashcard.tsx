export interface UserFlashcard {
	id: string;
	question: string;
	answer: string;
	category: string;
	correctStreak: number;
	userId: string;
}
