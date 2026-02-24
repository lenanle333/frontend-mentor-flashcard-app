import { useState, type ChangeEvent } from "react";
import styles from "./index.module.css";
interface CheckboxProps {
	label: string;
	checked?: boolean;
	className?: string;
}
export const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, className }) => {
	const [isChecked, setIsChecked] = useState<boolean>(checked);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	};
	return (
		<label htmlFor={label} className="text-preset-4-md flex p-0 items-center gap-100">
			<input
				className={isChecked === true ? `${styles.checked}` : ""}
				type="checkbox"
				checked={isChecked}
				onChange={handleChange}
			/>

			<span className={className}>{label}</span>
		</label>
	);
};
