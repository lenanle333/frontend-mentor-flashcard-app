import styles from "./index.module.css";
import Button from "../ui/Button";
import { plusIcon, closeIcon } from "../../assets/images";
import { updateFlashcard } from "../../services/flashcardService";
import type { UserFlashcard } from "../../types/UserFlashcard";
import { CapitalizeSentence } from "../../utils/CapitalizeSentence";
type EditCardModalProps = {
	isVisible: boolean;
	setIsVisible: (value: boolean) => void;
	id: string;
	question: string;
	answer: string;
	category: string;
};

import { useState } from "react";

export default function EditCardModal({ setIsVisible, id, question, answer, category }: EditCardModalProps) {
	const [draftQuestion, setDraftQuestion] = useState(question);
	const [draftAnswer, setDraftAnswer] = useState(answer);
	const [draftCategory, setDraftCategory] = useState(category);

	const handleCloseModal = () => {
		setIsVisible(false);
	};

	const handleUpdateFlashcard = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			if (draftQuestion.trim() && draftAnswer.trim() && draftCategory.trim()) {
				const newFlashcard: Partial<UserFlashcard> = {
					question: draftQuestion,
					answer: draftAnswer,
					category: CapitalizeSentence(draftCategory),
				};
				await updateFlashcard(id, newFlashcard);
			}
		} catch (err) {
			console.log(err);
		}
		handleCloseModal();
	};

	return (
		<div className="flex-center relative" key={id}>
			<div className={styles.overlay} />
			<div className={`card-style relative ${styles.container}`}>
				<h1 className="text-preset-2 text-neutral-900">Edit your card</h1>
				<form className={styles.form} onSubmit={handleUpdateFlashcard}>
					<div className={styles.inputContainer}>
						<label className={styles.label}>Question</label>
						<input
							placeholder="e.g., What is the capital of France?"
							className={styles.input}
							type="text"
							name="question"
							value={draftQuestion}
							onChange={(e) => setDraftQuestion(e.target.value)}
							required
						/>
					</div>
					<div className={styles.inputContainer}>
						<label className={styles.label}>Answer</label>
						<textarea
							placeholder="e.g., Paris"
							className={`h-[6.25rem] ${styles.input}`}
							name="answer"
							value={draftAnswer}
							onChange={(e) => setDraftAnswer(e.target.value)}
							required
						/>
					</div>
					<div className={styles.inputContainer}>
						<label className={styles.label}>Category</label>
						<input
							placeholder="e.g., Geography"
							className={styles.input}
							type="text"
							name="category"
							value={draftCategory}
							onChange={(e) => setDraftCategory(e.target.value)}
							required
						/>
					</div>
					<div className="flex flex-col content-center items-end self-stretch">
						<Button variant="primary" type="submit">
							<img src={plusIcon} alt="plus icon" />
							Update Card
						</Button>
					</div>
				</form>
				<div className="flex-center absolute right-4 top-4 cursor-pointer" onClick={handleCloseModal}>
					<img src={closeIcon} alt="close edit flashcard modal" />
				</div>
			</div>
		</div>
	);
}
