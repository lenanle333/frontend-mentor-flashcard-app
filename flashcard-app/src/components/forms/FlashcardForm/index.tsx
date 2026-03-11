import React, { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import type { Flashcard } from "../../../types/Flashcard";
import { addFlashcard } from "../../../services/flashcardService";
import Button from "../../ui/Button";
import plusIcon from "../../../assets/images/icon-circle-plus.svg";
import { TextInput } from "../../ui/TextInput";
import { TextArea } from "../../ui/TextArea";
import FormContainer from "../../ui/FormContainer";

export default function FlashcardForm() {
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");
	const [category, setCategory] = useState("");
	const { user } = useAuth();

	const capitalizeSentence = (str: string) => {
		return str
			.split(" ")
			.map((word) => {
				return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
			})
			.join(" ");
	};

	const handleAddFlashcard = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (user && question.trim() && answer.trim() && category.trim()) {
			const newFlashcard: Omit<Flashcard, "id"> = {
				question: question,
				answer: answer,
				category: capitalizeSentence(category),
				mastered: false,
				knownCount: 0,
				userId: user.uid,
			};
			await addFlashcard(newFlashcard);
			console.log("Flashcard created!");
			setQuestion("");
			setAnswer("");
			setCategory("");
		}
	};

	// if(!user){
	// 	return <div>Please login to view Flashcards</div>;
	// }
	return (
		<FormContainer>
			<form className="flex flex-col items-start gap-200 self-stretch" onSubmit={handleAddFlashcard}>
				<TextInput
					id="question"
					label="Question"
					value={question}
					onChange={(e) => setQuestion(e.target.value)}
					name="flashcard-question"
					placeholder="e.g., What is the capital of France?"
				/>
				<TextArea
					id="answer"
					label="Answer"
					value={answer}
					onChange={(e) => setAnswer(e.target.value)}
					name="flashcard-answer"
					placeholder="e.g., Paris"
				/>
				<TextInput
					id="category"
					label="Category"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					placeholder="e.g., Geography"
					name="flashcard-category"
				/>
				<div className="flex flex-col content-center items-start self-stretch">
					<Button variant="primary" type="submit">
						<img src={plusIcon} alt="plus icon" />
						Create Card
					</Button>
				</div>
			</form>
		</FormContainer>
	);
}
