export interface Flashcard {
	id?: string;
	question: string;
	answer: string;
	category: string;
	mastered: boolean;
	knownCount: number;
	userId: string;
}
