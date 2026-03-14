import { useState, type ChangeEvent } from "react";
import styles from "./index.module.css";
interface CheckboxProps {
	label: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	className?: string;
}
export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, className }) => {
	const [uncontrolledChecked, setUncontrolledChecked] = useState<boolean>(false);

	const isControlled = onChange !== undefined;
	const isChecked = isControlled ? (checked ?? false) : uncontrolledChecked;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const next = e.target.checked;
		if (isControlled) {
			onChange(next);
		} else {
			setUncontrolledChecked(next);
		}
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
