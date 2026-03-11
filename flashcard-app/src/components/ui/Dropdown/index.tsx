import { useState, useEffect, useRef } from "react";
import { CountCategories } from "../../../utils/CountCategories";
import { useUserFlashcards } from "../../../hooks/useUserFlashcards";
import { useAuth } from "../../../hooks/useAuth";
import dropdown_icon from "../../../assets/images/icon-chevron-down.svg";
import { Checkbox } from "../Checkbox";
import styles from "./index.module.css";
import type { UserFlashcard } from "../../../types/UserFlashcard";

interface DropdownProps {
	selectedCategories: string[];
	onSelectionChange: (categories: string[]) => void;
}

export const Dropdown = ({ selectedCategories, onSelectionChange }: DropdownProps) => {
	const { user } = useAuth();
	const [flashcards, setFlashcards] = useState<UserFlashcard[]>([]);

	useUserFlashcards({ userId: user?.uid, setFlashcards });

	const menuRef = useRef<HTMLDivElement | null>(null);
	const [menuIsVisible, setMenuIsVisible] = useState(false);

	const counts = CountCategories(flashcards);

	const setCategory = (category: string) => {
		if (selectedCategories.includes(category)) {
			onSelectionChange(selectedCategories.filter((c) => c !== category));
		} else {
			onSelectionChange([...selectedCategories, category]);
		}
	};
	// Close dropdown when clicked outside card
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
