import React, { useState } from "react";
import styles from "./index.module.css";
import { eyeIcon as eyeOn, eyeSlashIcon as eyeOff } from "../../../assets/images";
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
	setIsVisible?: (value: boolean) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
	label,
	id,
	type,
	name,
	value,
	placeholder,
	onChange,
	error,
	...props
}) => {
	const [isPassVisible, setIsPassVisible] = useState(false);

	return (
		<div className={styles.container}>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			{id === "password" ? (
				<div className="flex items-center relative w-full">
					<input
						id={id}
						name={name}
						type={isPassVisible ? "text" : "password"}
						value={value}
						placeholder={placeholder}
						onChange={onChange}
						{...props}
						className={`${error ? styles.inputErr : styles.input} w-full pr-13!`}
					/>
					<img
						className="size-8 cursor-pointer absolute right-200 hover:opacity-70 ease-in-out duration-200"
						src={isPassVisible ? eyeOff : eyeOn}
						alt="toggle password icon"
						onClick={() => setIsPassVisible(!isPassVisible)}
					/>
				</div>
			) : (
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
			)}

			{error && <span className={styles.errorText}>{error}</span>}
		</div>
	);
};
