import styles from "./index.module.css";
import Tag from "../Tag";
import ProgressBar from "../ProgressBar";
import menuIcon from "../../assets/images/icon-menu.svg";
import type { Flashcard } from "../../types/Flashcard";

export default function Flashcard({ id, question, answer, category, knownCount, mastered }: Flashcard) {
	return (
		<div className={`card-style ${styles.container}`} key={id}>
			<div className={styles.question}>{question}</div>
			<div className={styles.answerBox}>
				<span>Answer:</span>
				<div className={styles.answer}>{answer}</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.tagBox}>
					<Tag name={category} />
				</div>
				<div className={styles.progressBarBox}>
					<ProgressBar knownCount={knownCount} mastered={mastered} />
				</div>
				<div className={styles.menuBox}>
					<button className={styles.menuBtn}>
						<img src={menuIcon} alt="menu icon" />
					</button>
				</div>
			</div>
		</div>
	);
}
