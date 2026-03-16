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

export default function Flashcard({ id, question, answer, category, knownCount }: UserFlashcard) {
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
			<div className={styles.question}>{question}</div>
			<div className={styles.answerBox}>
				<span>Answer:</span>
				<div className={styles.answer}>
					{answer}
					{dropdownIsOpen ? (
						<CardDropdown ref={dropdownRef} onEditClick={handleEditClick} onDeleteClick={handleDeleteClick} />
					) : null}
				</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.tagBox}>
					<Tag name={category} />
				</div>
				<div className={styles.progressBarBox}>
					<ProgressBar knownCount={knownCount} />
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
