export interface UserFlashcard {
	id?: string;
	question: string;
	answer: string;
	category: string;
	mastered: boolean;
	knownCount: number;
	userId: string;
}
