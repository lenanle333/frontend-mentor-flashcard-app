import styles from "./index.module.css";
import Button from "../Button";
import plusIcon from "../../assets/images/icon-circle-plus.svg";
export default function EditCardModal() {
	return (
		<div className={`card-style ${styles.container}`}>
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
					<textarea placeholder="e.g., Paris" className={`h-[6.25rem] ${styles.input}`} name="answer" required />
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.label}>Category</label>
					<input placeholder="e.g., Geography" className={styles.input} type="text" name="category" required />
				</div>
			</form>
			<div className="flex flex-col content-center items-start self-stretch">
				<Button variant="primary">
					<img src={plusIcon} alt="plus icon" />
					Create Card
				</Button>
			</div>
		</div>
	);
}
