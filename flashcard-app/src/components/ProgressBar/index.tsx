import styles from "./index.module.css";
import { brainIcon } from "../../assets/images";
interface ProgressBarProps {
	correctStreak: number;
}
export default function ProgressBar({ correctStreak }: ProgressBarProps) {
	const widths: string[] = ["0", ".75rem", "1.5rem", "2.25rem", "3rem"];
	const bar_width = widths[correctStreak];
	return (
		<>
			{correctStreak >= 5 ? (
				<div className={styles.mastered_container}>
					<img src={brainIcon} alt="mastered icon" />
					<span>Mastered 5/5</span>
				</div>
			) : (
				<div className={styles.progress_container}>
					<div className={styles.progress_bar}>
						<div className={styles.bar} style={{ width: bar_width }} />
					</div>
					<div className={styles.progress_bar_hint}>{correctStreak}/5</div>
				</div>
			)}
		</>
	);
}
