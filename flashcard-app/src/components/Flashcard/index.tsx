import { useRef, useState } from "react";
import { useOnClickOutside } from "../../utils/useOnClickOutside";
import styles from "./index.module.css";
import Tag from "../Tag";
import ProgressBar from "../ProgressBar";
import menuIcon from "../../assets/images/icon-menu.svg";
import { CardDropdown } from "../CardDropdown";
export default function Flashcard() {
	const menuRef = useRef<HTMLDivElement>(null);
	const [menuIsVisible, setMenuIsVisible] = useState(false);

	const handleClicksOutside = () => {
		setMenuIsVisible(false);
	};

	useOnClickOutside(menuRef, handleClicksOutside);
	return (
		<div className={`card-style ${styles.container} bg-amber-200`}>
			<div className={styles.question}>What does HTML stand for?</div>
			<div className={styles.answerBox}>
				<span>Answer:</span>
				<div className={styles.answer}>
					HyperText Markup Language
					{menuIsVisible ? <CardDropdown ref={menuRef} /> : null}
				</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.tagBox}>
					<Tag name="Web Development" />
				</div>
				<div className={styles.progressBarBox}>
					<ProgressBar />
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
