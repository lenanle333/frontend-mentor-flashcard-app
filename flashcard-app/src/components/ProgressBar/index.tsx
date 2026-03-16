import styles from "./index.module.css";
import { brainIcon } from "../../assets/images";
interface ProgressBarProps {
	knownCount: number;
}
export default function ProgressBar({ knownCount }: ProgressBarProps) {
	const fillProgressBar = { 0: "0", 1: ".75rem", 2: "1.5rem", 3: "2.25rem", 4: "3rem" };
	return (
		<>
			{knownCount == 5 ? (
				<div className={styles.mastered_container}>
					<img src={brainIcon} alt="mastered icon" />
					<span>Mastered 5/5</span>
				</div>
			) : (
				<div className={styles.progress_container}>
					<div className={styles.progress_bar}>
						<div className={`w-[${fillProgressBar}] ${styles.bar}`}></div>
					</div>
					<div className={styles.progress_bar_hint}>{knownCount}/5</div>
				</div>
			)}
		</>
	);
}
