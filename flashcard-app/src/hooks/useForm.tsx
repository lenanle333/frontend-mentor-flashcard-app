import { useState } from "react";

interface FormErrors {
	[key: string]: string;
}

export const useForm = <T extends object>(initialState: T, validate: (values: T) => FormErrors) => {
	const [values, setValues] = useState<T>(initialState);
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = async (e: React.SubmitEvent, onSubmit: (values: T) => Promise<void>) => {
		e.preventDefault();
		const validationErrors = validate(values);
		setErrors(validationErrors);
		setIsSubmitting(true);

		if (Object.keys(validationErrors).length === 0) {
			try {
				await onSubmit(values);
			} catch (error) {
				console.error("Form submission error:", error);
				setErrors({ submit: "An error occurred while submitting the form" });
			}
		}

		setIsSubmitting(false);
	};

	return { values, errors, isSubmitting, handleChange, handleSubmit };
};
