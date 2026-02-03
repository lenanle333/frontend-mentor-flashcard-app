import { Dropdown } from "../../Dropdown";
import Button from "../../Button";
import check_icon from "../../../assets/images/icon-check.svg";
import circle_check from "../../../assets/images/icon-circle-check.svg";
import shuffle_icon from "../../../assets/images/icon-shuffle.svg";
import reset_icon from "../../../assets/images/icon-reset.svg";
import prev_icon from "../../../assets/images/icon-chevron-left.svg";
import next_icon from "../../../assets/images/icon-chevron-right.svg";
import { ActiveCard } from "../ActiveCard";
import styles from "./index.module.css";
import { useState } from "react";
export const FlashCard = () => {
	const [isHidden, setIsHidden] = useState(false);
	return (
		<div className={styles.container}>
			{/* Header */}
			<div className={styles.header}>
				<div className={styles.flashcard_controls}>
					<div className={styles.filters}>
						<Dropdown />
						<div className={styles.hide_filter} onClick={() => setIsHidden(!isHidden)}>
							<button className={isHidden === true ? "checked" : "checkbox"}>
								<img className={isHidden === true ? "block" : "hidden"} src={check_icon} alt="hide mastered card" />
							</button>
							Hide Mastered
						</div>
					</div>
					{/* TODO: ADD SHUFFLE FUNCTIONALITY */}
					<Button variant="border" onClick={() => ""}>
						<img src={shuffle_icon} alt="shuffle" />
						Shuffle
					</Button>
				</div>
			</div>
			<div className={styles.divider} />
			{/* FlashCard Section */}
			<div className={styles.flashcard_container}>
				<ActiveCard />
				<div className={styles.actions}>
					<Button variant="primary" className="w-full md:w-auto">
						<img src={circle_check} alt="I know this" />I Know This
					</Button>
					<Button variant="secondary" className="w-full md:w-auto">
						<img src={reset_icon} alt="reset progress" />
						Reset Progress
					</Button>
				</div>
			</div>
			<div className={styles.divider} />
			{/* Navigation */}
			{/* TODO: Add functionality */}
			<div className={styles.nav_controls}>
				<button className={styles.nav_button}>
					<img src={prev_icon} alt="Previous Card" />
					<span className="hidden md:flex">Previous</span>
				</button>
				<span>Card 1 of 40</span>
				<button className={styles.nav_button}>
					<span className="hidden md:flex">Next</span>
					<img src={next_icon} alt="Next Card" />
				</button>
			</div>
		</div>
	);
};
