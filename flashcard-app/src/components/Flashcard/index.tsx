import { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import styles from "./index.module.css";
import Tag from "../Tag";
import ProgressBar from "../ProgressBar";
import { menuIcon } from "../../assets/images";
import { CardDropdown } from "../CardDropdown";
import type { UserFlashcard } from "../../types/UserFlashcard";
import EditCardModal from "../EditCardModal";
import DeleteCardModal from "../DeleteCardModal";

export default function Flashcard({ id, question, answer, category, correctStreak }: UserFlashcard) {
	const dropdownRef = useRef<HTMLDivElement>(null);

	const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);

	const handleClicksOutside = () => {
		setDropdownIsOpen(false);
	};
	useOnClickOutside(dropdownRef, handleClicksOutside);

	const handleEditClick = () => {
		setEditModalOpen(true);
		setDropdownIsOpen(false);
	};
	const handleDeleteClick = () => {
		setDeleteModalOpen(true);
		setDropdownIsOpen(false);
	};

	return (
		<div className={`card-style ${styles.container}`} key={id}>
			<div className={styles.question}>
				<h1 className="text-preset-3">{question}</h1>
			</div>
			<div className={styles.answer}>
				<h2 className="opacity-60! text-preset-5">Answer:</h2>
				<span className="text-preset-5">{answer}</span>
				{dropdownIsOpen ? (
					<CardDropdown ref={dropdownRef} onEditClick={handleEditClick} onDeleteClick={handleDeleteClick} />
				) : null}
			</div>
			<div className={styles.footer}>
				<div className={styles.tagBox}>
					<Tag name={category} />
				</div>
				<div className={styles.progressBarBox}>
					<ProgressBar correctStreak={correctStreak} />
				</div>
				<div className={styles.dropdownBox}>
					<button className={styles.dropdownBtn} onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
						<img src={menuIcon} alt="menu icon" />
					</button>
				</div>
			</div>

			{editModalOpen ? (
				<EditCardModal
					id={id}
					question={question}
					answer={answer}
					category={category}
					isVisible={editModalOpen}
					setIsVisible={setEditModalOpen}
				/>
			) : null}
			{deleteModalOpen ? (
				<DeleteCardModal id={id} isVisible={deleteModalOpen} setIsVisible={setDeleteModalOpen} />
			) : null}
		</div>
	);
}
