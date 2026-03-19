import React from "react";
import styles from "./index.module.css";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, id, value, placeholder, onChange, error, ...props }) => {
	return (
		<div className={styles.container}>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			<textarea
				id={id}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				required
				{...props}
				rows={2}
				className={error ? styles.inputErr : styles.input}
			>
				{value}
			</textarea>
			{error && <span className={styles.errorText}>{error}</span>}
		</div>
	);
};
