import blue_star from "../../../assets/images/pattern-star-blue.svg";
import yellow_star from "../../../assets/images/pattern-star-yellow.svg";
import styles from "./index.module.css";
export const ActiveCard = () => {
	return (
		<div>
			<div className={styles.flashcard_content}>
				<div className={styles.flashcard_bg} />
				{/* Category */}
				<div className={styles.category}>Web Development</div>
				{/* Question */}
				<div className={styles.question_container}>
					<div className={styles.question}>What does HTML stand for?</div>
					<div className={styles.hint}>Click to reveal answer</div>
				</div>
				<img className="size-6 absolute right-7.5 top-10" src={blue_star} alt="blue star" />
				<img className="size-8 absolute left-7 bottom-13" src={yellow_star} alt="yellow star" />
				{/* Progress Bar */}
				<div className={styles.progress_container}>
					<div className={styles.progress_bar}></div>
					<div className={styles.progress_bar_hint}>0/5</div>
				</div>
			</div>
		</div>
	);
};
