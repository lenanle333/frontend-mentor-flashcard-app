import styles from "./index.module.css";
import Button from "../ui/Button";
import { deleteFlashcard } from "../../services/flashcardService";

type DeleteCardModalProps = {
	isVisible: boolean;
	setIsVisible: (value: boolean) => void;
	id: string;
};

export default function DeleteCardModal({ setIsVisible, id }: DeleteCardModalProps) {
	const handleCloseModal = () => {
		setIsVisible(false);
	};
	const handleDeleteCard = async (id: string) => {
		await deleteFlashcard(id);
		handleCloseModal();
	};
	return (
		<div className="flex-center">
			<div className={styles.overlay} />
			<div className={`card-style ${styles.container}`}>
				<div className={styles.header}>
					<h1 className="text-preset-2">Delete this card?</h1>
					<p className="text-preset-4">This action can't be undone.</p>
				</div>
				<div className="h-[.0625rem] self-stretch bg-neutral-900" />
				<div className="flex p-150 gap-2.5 self-stretch justify-end">
					<Button variant="secondary" onClick={handleCloseModal}>
						Cancel Card
					</Button>
					<Button variant="primary" onClick={() => handleDeleteCard(id)}>
						Delete Card
					</Button>
				</div>
			</div>
		</div>
	);
}
