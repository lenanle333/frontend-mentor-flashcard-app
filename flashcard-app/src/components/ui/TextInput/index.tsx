import React from "react";
import styles from "./index.module.css";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
	label,
	id,
	name,
	type = "text",
	value,
	placeholder,
	onChange,
	error,
	...props
}) => {
	return (
		<div className={styles.container}>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			<input
				id={id}
				name={name}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				{...props}
				className={error ? styles.inputErr : styles.input}
			/>
			{error && <span className={styles.errorText}>{error}</span>}
		</div>
	);
};
