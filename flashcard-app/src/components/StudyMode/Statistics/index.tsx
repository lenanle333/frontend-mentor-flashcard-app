import React from "react";
import layers_icon from "../../../assets/images/icon-stats-total.svg";
import brain_icon from "../../../assets/images/icon-stats-mastered.svg";
import book_icon from "../../../assets/images/icon-stats-in-progress.svg";
import box_icon from "../../../assets/images/icon-stats-not-started.svg";
import styles from "./index.module.css";
export const Statistics = () => {
	return (
		<div className={styles.container}>
			<h1 className="text-preset-2">Study Statistics</h1>
			<div className={styles.content}>
				<div className={styles.total_cards}>
					<div className={styles.info_container}>
						<span>Total cards</span>
						<span>40</span>
					</div>
					<div className={`${styles.icon_container} bg-blue-400`}>
						<img className="size-6" src={layers_icon} alt="total cards icon" />
					</div>
				</div>
				<div className={styles.total_cards}>
					<div className={styles.info_container}>
						<span>Mastered</span>
						<span>11</span>
					</div>
					<div className={`${styles.icon_container} bg-teal-400`}>
						<img className="size-6" src={brain_icon} alt="total cards icon" />
					</div>
				</div>
				<div className={styles.total_cards}>
					<div className={styles.info_container}>
						<span>In Progress</span>
						<span>21</span>
					</div>
					<div className={`${styles.icon_container} bg-pink-500`}>
						<img className="size-6" src={book_icon} alt="total cards icon" />
					</div>
				</div>
				<div className={styles.total_cards}>
					<div className={styles.info_container}>
						<span>Not Started</span>
						<span>8</span>
					</div>
					<div className={`${styles.icon_container} bg-pink-400`}>
						<img className="size-6" src={box_icon} alt="total cards icon" />
					</div>
				</div>
			</div>
		</div>
	);
};
