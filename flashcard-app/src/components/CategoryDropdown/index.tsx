import { useState, useRef } from "react";
import flashcard_data from "../../utils/data.json";
import { CountCategories } from "../../utils/CountCategories";
import { useOnClickOutside } from "../../utils/useOnClickOutside";
import dropdown_icon from "../../assets/images/icon-chevron-down.svg";
import { Checkbox } from "../Checkbox";
import styles from "./index.module.css";
export const CategoryDropdown = () => {
	const menuRef = useRef<HTMLDivElement>(null);
	const [menuIsVisible, setMenuIsVisible] = useState(false);

	const handleClicksOutside = () => {
		setMenuIsVisible(false);
	};

	useOnClickOutside(menuRef, handleClicksOutside);

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
