import React from "react";
import styles from "./index.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "border";
}

const button_type = {
	primary: styles.primary,
	secondary: styles.secondary,
	border: styles.border,
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ variant = "primary", className, ...props }, ref) => {
	return (
		<button ref={ref} className={`${className} ${styles.custom_button} ${button_type[variant]}`} {...props}></button>
	);
});

Button.displayName = "Button";

export default Button;
