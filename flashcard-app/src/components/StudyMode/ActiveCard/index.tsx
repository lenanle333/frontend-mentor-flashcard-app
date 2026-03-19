import { blueStar, yellowStar, pinkStar } from "../../../assets/images";
import Tag from "../../Tag";
import styles from "./index.module.css";
import ProgressBar from "../../ProgressBar";
import type { UserFlashcard } from "../../../types/UserFlashcard";
import { useState } from "react";

export const ActiveCard = ({ id, question, answer, category, correctStreak }: UserFlashcard) => {
	const [showAnswer, setShowAnswer] = useState(false);

	const handleShowAnswer = () => {
		return (
			<div
				className={`bg-blue-400 ease-out ${styles.flashcard_content}`}
				key={id}
				onClick={() => setShowAnswer((s) => !s)}
			>
				<div className={styles.flashcard_bg} />
				{/* Category */}
				<Tag name={category} />
				{/* Answer */}
				<div className={`justify-center ${styles.text_container}`}>
					<div className="text-preset-4-md opacity-80 text-center">Answer:</div>
					<div className={`text-preset-2 ${styles.answer}`}>{answer}</div>
				</div>
				<img className="size-6 absolute right-7.5 top-10" src={pinkStar} alt="pink star" />
				<img className="size-8 absolute left-7.5 bottom-13 " src={yellowStar} alt="yellow star" />
				{/* Progress Bar */}
				<ProgressBar correctStreak={correctStreak} />
			</div>
		);
	};

	const handleShowQuestion = () => {
		return (
			<div
				className={`bg-pink-400 ease-in-out ${styles.flashcard_content}`}
				key={id}
				onClick={() => setShowAnswer((s) => !s)}
			>
				<div className={styles.flashcard_bg} />
				{/* Category */}
				<Tag name={category} />
				{/* Question */}
				<div className={`justify-center ${styles.text_container}`}>
					<div className={styles.question}>{question}</div>
					<div className={styles.hint}>Click to reveal answer</div>
				</div>
				<img className="size-6 absolute right-7.5 top-10" src={blueStar} alt="blue star" />
				<img className="size-8 absolute left-7 bottom-13 " src={yellowStar} alt="yellow star" />
				{/* Progress Bar */}
				<ProgressBar correctStreak={correctStreak} />
			</div>
		);
	};
	return showAnswer ? handleShowAnswer() : handleShowQuestion();
};
