import { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import styles from "./index.module.css";
import Tag from "../Tag";
import ProgressBar from "../ProgressBar";
import { menuIcon } from "../../assets/images";
import { CardDropdown } from "../CardDropdown";
import type { UserFlashcard } from "../../types/UserFlashcard";

export default function Flashcard({ id, question, answer, category, knownCount, mastered }: UserFlashcard) {
	const menuRef = useRef<HTMLDivElement>(null);
	const [menuIsVisible, setMenuIsVisible] = useState(false);

	const handleClicksOutside = () => {
		setMenuIsVisible(false);
	};

	useOnClickOutside(menuRef, handleClicksOutside);
	return (
		<div className={`card-style bg-amber-200 ${styles.container}`} key={id}>
			<div className={styles.question}>{question}</div>
			<div className={styles.answerBox}>
				<span>Answer:</span>
				<div className={styles.answer}>
					{answer}
					{menuIsVisible ? <CardDropdown ref={menuRef} /> : null}
				</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.tagBox}>
					<Tag name={category} />
				</div>
				<div className={styles.progressBarBox}>
					<ProgressBar knownCount={knownCount} mastered={mastered} />
				</div>
				<div className={styles.menuBox}>
					<button className={styles.menuBtn} onClick={() => setMenuIsVisible(!menuIsVisible)}>
						<img src={menuIcon} alt="menu icon" />
					</button>
				</div>
			</div>
		</div>
	);
}
