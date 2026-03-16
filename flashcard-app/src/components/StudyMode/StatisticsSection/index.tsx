import { totalIcon, brainIcon, bookIcon, notStartedIcon } from "../../../assets/images";
import styles from "./index.module.css";
export const StatisticsSection = () => {
	return (
		<div className={styles.container}>
			<h1 className="text-preset-2">Study Statistics</h1>
			<div className={styles.content}>
				<div className={styles.card}>
					<div className={styles.info_container}>
						<span>Total cards</span>
						<span>40</span>
					</div>
					<div className={`${styles.icon_container} bg-blue-400`}>
						<img className="size-6" src={totalIcon} alt="total cards icon" />
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.info_container}>
						<span>Mastered</span>
						<span>11</span>
					</div>
					<div className={`${styles.icon_container} bg-teal-400`}>
						<img className="size-6" src={brainIcon} alt="total cards icon" />
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.info_container}>
						<span>In Progress</span>
						<span>21</span>
					</div>
					<div className={`${styles.icon_container} bg-pink-500`}>
						<img className="size-6" src={bookIcon} alt="total cards icon" />
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.info_container}>
						<span>Not Started</span>
						<span>8</span>
					</div>
					<div className={`${styles.icon_container} bg-pink-400`}>
						<img className="size-6" src={notStartedIcon} alt="total cards icon" />
					</div>
				</div>
			</div>
		</div>
	);
};
