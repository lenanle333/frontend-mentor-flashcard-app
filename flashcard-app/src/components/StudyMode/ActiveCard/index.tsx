import blue_star from "../../../assets/images/pattern-star-blue.svg";
import yellow_star from "../../../assets/images/pattern-star-yellow.svg";
import Tag from "../../Tag";
import styles from "./index.module.css";
import ProgressBar from "../../ProgressBar";
export const ActiveCard = () => {
	return (
		<div>
			<div className={styles.flashcard_content}>
				<div className={styles.flashcard_bg} />
				{/* Category */}
				<Tag name="Web Development" />
				{/* Question */}
				<div className={styles.question_container}>
					<div className={styles.question}>What does HTML stand for?</div>
					<div className={styles.hint}>Click to reveal answer</div>
				</div>
				<img className="size-6 absolute right-7.5 top-10" src={blue_star} alt="blue star" />
				<img className="size-8 absolute left-7 bottom-13" src={yellow_star} alt="yellow star" />
				{/* Progress Bar */}
				<ProgressBar />
			</div>
		</div>
	);
};
