import styles from "./index.module.css";
import Button from "../Button";
import plusIcon from "../../assets/images/icon-circle-plus.svg";
import closeIcon from "../../assets/images/icon-cross.svg";
type EditCardModalProps = {
	isVisible: boolean;
	setIsVisible: (value: boolean) => void;
};

export default function EditCardModal({
	setIsVisible,
}: EditCardModalProps) {
	const handleCloseModal = () => {
		setIsVisible(false);
	};
	return (
		<div className="flex-center">
			<div className={styles.overlay} />
			<div className={`card-style relative ${styles.container}`}>
				<h1 className="text-preset-2 text-neutral-900">Edit your card</h1>
				<form className={styles.form}>
					<div className={styles.inputContainer}>
						<label className={styles.label}>Question</label>
						<input
							placeholder="e.g., What is the capital of France?"
							className={styles.input}
							type="text"
							name="question"
							required
						/>
					</div>
					<div className={styles.inputContainer}>
						<label className={styles.label}>Answer</label>
						<textarea
							placeholder="e.g., Paris"
							className={`h-[6.25rem] ${styles.input}`}
							name="answer"
							required
						/>
					</div>
					<div className={styles.inputContainer}>
						<label className={styles.label}>Category</label>
						<input
							placeholder="e.g., Geography"
							className={styles.input}
							type="text"
							name="category"
							required
						/>
					</div>
				</form>
				<div className="flex flex-col content-center items-end self-stretch">
					<Button variant="primary">
						<img src={plusIcon} alt="plus icon" />
						Update Card
					</Button>
				</div>
				<div className="flex-center absolute right-4 top-4 cursor-pointer" onClick={handleCloseModal}>
					<img src={closeIcon} alt="close edit flashcard modal" />
				</div>
			</div>
		</div>
	);
}
