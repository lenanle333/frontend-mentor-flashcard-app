import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useForm } from "../hooks/useForm";
import Button from "../components/ui/Button";
import { TextInput } from "../components/ui/TextInput";
import FormContainer from "../components/ui/FormContainer";

interface SignUpForm {
	displayName: string;
	email: string;
	password: string;
}
const initialState: SignUpForm = {
	displayName: "",
	email: "",
	password: "",
};

const validate = (values: SignUpForm) => {
	const errors: { [key: string]: string } = {};
	if (!values.displayName) {
		errors.displayName = "Display name is required";
	}
	if (!values.email) {
		errors.email = "Email is required";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email is invalid";
	}
	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 8) {
		errors.password = "Password must be at least 8 characters";
	}
	return errors;
};
export default function SignUp() {
	const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm<SignUpForm>(initialState, validate);

	const onSubmit = async (values: SignUpForm) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
			await updateProfile(userCredential.user, { displayName: values.displayName });
			console.log("User registered successfully");
		} catch (error) {
			console.error("Error registering user:", error);
			throw error;
		}
	};

	return (
		<div className="screen-padding">
			<h1 className="text-preset-1">Create an account</h1>
			<FormContainer>
				<form onSubmit={(e) => handleSubmit(e, onSubmit)} className="flex flex-col items-start gap-200 self-stretch">
					<TextInput
						label="Display Name"
						id="display-name"
						name="users-display-name"
						value={values.displayName}
						onChange={handleChange}
						placeholder="e.g., cooldog123"
					/>
					{errors.displayName && <p>{errors.displayName}</p>}
					<TextInput
						label="Email"
						type="email"
						id="email"
						name="users-email"
						value={values.email}
						onChange={handleChange}
						placeholder="e.g., cooldog123@flashcards.com"
					/>
					{errors.email && <p>{errors.email}</p>}
					<TextInput
						label="Password"
						type="password"
						id="password"
						name="users-password"
						value={values.password}
						onChange={handleChange}
						placeholder="e.g., *************"
					/>
					{errors.password && <p>{errors.password}</p>}
					<Button variant="primary" type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Creating account..." : "Create account"}
					</Button>
					{errors.submit && <p>{errors.submit}</p>}
				</form>
			</FormContainer>
		</div>
	);
}
