export interface Flashcard {
	id?: string;
	question: string;
	answer: string;
	mastered: boolean;
	knownCount: number;
	userId: string;
}
