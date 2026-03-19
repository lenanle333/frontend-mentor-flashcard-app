import { useState, useRef } from "react";
import { CountCategories } from "../../../utils/counter_utils";
import { useUserFlashcards } from "../../../hooks/useUserFlashcards";
import { useAuth } from "../../../hooks/useAuth";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { downIcon } from "../../../assets/images";
import { Checkbox } from "../Checkbox";
import styles from "./index.module.css";
import type { UserFlashcard } from "../../../types/UserFlashcard";

interface CategoryDropdownProps {
	selectedCategories: string[];
	onSelectionChange: (categories: string[]) => void;
}

export const CategoryDropdown = ({ selectedCategories, onSelectionChange }: CategoryDropdownProps) => {
	const { user } = useAuth();
	const [flashcards, setFlashcards] = useState<UserFlashcard[]>([]);
	useUserFlashcards({ userId: user?.uid, setFlashcards });

	// Counts # of categories
	const counts = CountCategories(flashcards);
	const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
	const setCategory = (category: string) => {
		if (selectedCategory.includes(category)) {
			const items = selectedCategory.filter((item) => item !== category);
			setSelectedCategory([...items]);
		} else {
			setSelectedCategory([...selectedCategory, category]);
		}
	};
	// Dropdown visibility
	const menuRef = useRef<HTMLDivElement>(null);
	// const menuRef = useRef<HTMLDivElement | null>(null);
	const [menuIsVisible, setMenuIsVisible] = useState(false);

	const handleClicksOutside = () => {
		setMenuIsVisible(false);
	};
	useOnClickOutside(menuRef, handleClicksOutside);

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
				All Categories <img src={downIcon} alt="dropdown arrow" />
			</button>
			{/* Dropdown menu */}
			<div
				className={menuIsVisible === true ? `${styles.dropdown_menu} block` : "hidden"}
				role="menu"
				id="dropdown-menu"
				aria-labelledby="dropdown-button"
			>
				{Object.keys(counts).map((category) => (
					<div
						key={category}
						className={styles.dropdown_item}
						onClick={(e) => {
							if ((e.target as HTMLElement).closest("input, label")) return;
							setCategory(category);
						}}
						role="menuitem"
					>
						<Checkbox
							label={category}
							className="text-preset-5"
							checked={selectedCategories.includes(category)}
							onChange={(checked) =>
								onSelectionChange(
									checked ? [...selectedCategories, category] : selectedCategories.filter((c) => c !== category),
								)
							}
						/>
						<span className={styles.count}> ({counts[category]})</span>
					</div>
				))}
			</div>
		</div>
	);
};
