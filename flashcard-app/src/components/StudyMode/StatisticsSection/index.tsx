import { useState } from "react";
import { totalIcon, brainIcon, bookIcon, notStartedIcon } from "../../../assets/images";
import styles from "./index.module.css";
import type { UserFlashcard } from "../../../types/UserFlashcard";
import { useUserFlashcards } from "../../../hooks/useUserFlashcards";
import { countTotalMastered, countTotalInProgress, countTotalNotStarted } from "../../../utils/counter_utils";
import { useAuth } from "../../../hooks/useAuth";
export const StatisticsSection = () => {
	const { user } = useAuth();
	const [flashcards, setFlashcards] = useState<UserFlashcard[]>([]);
	useUserFlashcards({ userId: user?.uid, setFlashcards });

	const totalMastered = countTotalMastered(flashcards);
	const totalInProgress = countTotalInProgress(flashcards);
	const totalNotStarted = countTotalNotStarted(flashcards);

	return (
		<div className={styles.container}>
			<h1 className="text-preset-2">Study Statistics</h1>
			<div className={styles.content}>
				<div className={styles.card}>
					<div className={styles.info_container}>
						<h2>Total cards</h2>
						<span>{flashcards.length}</span>
					</div>
					<div className={`${styles.icon_container} bg-blue-400`}>
						<img className="size-6" src={totalIcon} alt="total cards icon" />
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.info_container}>
						<h2>Mastered</h2>
						<span>{totalMastered}</span>
					</div>
					<div className={`${styles.icon_container} bg-teal-400`}>
						<img className="size-6" src={brainIcon} alt="total cards icon" />
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.info_container}>
						<h2>In Progress</h2>
						<span>{totalInProgress}</span>
					</div>
					<div className={`${styles.icon_container} bg-pink-500`}>
						<img className="size-6" src={bookIcon} alt="total cards icon" />
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.info_container}>
						<h2>Not Started</h2>
						<span>{totalNotStarted}</span>
					</div>
					<div className={`${styles.icon_container} bg-pink-400`}>
						<img className="size-6" src={notStartedIcon} alt="total cards icon" />
					</div>
				</div>
			</div>
		</div>
	);
};
