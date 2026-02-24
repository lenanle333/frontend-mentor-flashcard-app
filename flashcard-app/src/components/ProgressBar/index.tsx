import styles from "./index.module.css";
export default function ProgressBar() {
	return (
		<div className={styles.progress_container}>
			<div className={styles.progress_bar}></div>
			<div className={styles.progress_bar_hint}>0/5</div>
		</div>
	);
}
