import { useState, useEffect, useRef } from "react";
import flashcard_data from "../../../utils/data.json";
import { CountCategories } from "../../../utils/CountCategories";
import dropdown_icon from "../../../assets/images/icon-chevron-down.svg";
import { Checkbox } from "../Checkbox";
import styles from "./index.module.css";
export const Dropdown = () => {
	const menuRef = useRef<HTMLDivElement | null>(null);

	// Show dropdown menu
	const [menuIsVisible, setMenuIsVisible] = useState(false);
	// Category counts derived from flashcard data (no effect needed)
	const counts = CountCategories(flashcard_data.flashcards);
	// All of the selected cateogries
	const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
	const setCategory = (category: string) => {
		if (selectedCategory.includes(category)) {
			const items = selectedCategory.filter((item) => item !== category);
			setSelectedCategory([...items]);
		} else {
			setSelectedCategory([...selectedCategory, category]);
		}
	};
	useEffect(() => {
		const handler = (event: MouseEvent | TouchEvent) => {
			if (menuIsVisible && menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setMenuIsVisible(false);
			}
		};
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [menuIsVisible]);
	return (
		<div className="flex flex-col gap-2 relative" ref={menuRef}>
			{/* Dropdown btn */}
			<button
				className={styles.dropdown_btn}
				onClick={() => setMenuIsVisible(!menuIsVisible)}
				id="dropdown-button"
				aria-haspopup="true"
				aria-controls="dropdown-menu"
			>
				All Categories <img src={dropdown_icon} alt="dropdown arrow" />
			</button>
			{/* Dropdown menu */}
			<div
				className={menuIsVisible === true ? `${styles.dropdown_menu} block` : "hidden"}
				role="menu"
				id="dropdown-menu"
				aria-labelledby="dropdown-button"
			>
				{Object.keys(counts).map((category) => (
					<div key={category} className={styles.dropdown_item} onClick={() => setCategory(category)} role="menuitem">
						<Checkbox label={category} className="text-preset-5" />
						<span className={styles.count}> ({counts[category]})</span>
					</div>
				))}
			</div>
		</div>
	);
};
