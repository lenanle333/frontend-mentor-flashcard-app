import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../hooks/useAuth";
import Button from "../components/ui/Button";
import { TextInput } from "../components/ui/TextInput";
import FormContainer from "../components/ui/FormContainer";

export default function SignUp() {
	const { user } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayName, setDisplayName] = useState("");

	const handleSignUp = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			await updateProfile(userCredential.user, { displayName });
			console.log("User registered successfully");
		} catch (error) {
			console.error("Error registering user:", error);
		}
	};

	return (
		<div className="screen-padding">
			<h1 className="text-preset-1">Create an account</h1>
			<FormContainer>
				<form onSubmit={handleSignUp} className="flex flex-col items-start gap-200 self-stretch">
					<TextInput
						label="Display Name"
						id="display-name"
						name="users-display-name"
						value={displayName}
						onChange={(e) => setDisplayName(e.target.value)}
						placeholder="e.g., cooldog123"
					/>
					<TextInput
						label="Email"
						type="email"
						id="email"
						name="users-email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="e.g., cooldog123@flashcards.com"
					/>{" "}
					<TextInput
						label="Password"
						type="password"
						id="password"
						name="users-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="e.g., *************"
					/>
					<Button variant="primary" type="submit">
						Sign Up
					</Button>
				</form>
			</FormContainer>
			<div>{user ? `Signed up as ${user.displayName}` : "Failed to sign up"}</div>
		</div>
	);
}
