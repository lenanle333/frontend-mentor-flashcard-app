import styles from "./index.module.css";
import Tag from "../Tag";
import ProgressBar from "../ProgressBar";
import menuIcon from "../../assets/images/icon-menu.svg";
export default function Flashcard() {
	return (
		<div className={`card-style ${styles.container}`}>
			<div className={styles.question}>What does HTML stand for?</div>
			<div className={styles.answerBox}>
				<span>Answer:</span>
				<div className={styles.answer}>HyperText Markup Language</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.tagBox}>
					<Tag name="Web Development" />
				</div>
				<div className={styles.progressBarBox}>
					<ProgressBar />
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
