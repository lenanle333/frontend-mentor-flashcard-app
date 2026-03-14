import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuth } from "../hooks/useAuth";
import Button from "../components/ui/Button";
import { TextInput } from "../components/ui/TextInput";
import FormContainer from "../components/ui/FormContainer";

export default function Login() {
	const { user } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			console.log("User logged in successfully");
		} catch (error) {
			console.error("Error logging in:", error);
		}
	};

	return (
		<div className="screen-padding">
			<h1 className="text-preset-1">Login</h1>

			<FormContainer>
				<form onSubmit={handleLogin} className="flex flex-col items-start gap-200 self-stretch">
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
						Login
					</Button>
				</form>
			</FormContainer>
			<div>{user ? `Logged in as ${user.displayName}` : "Not logged in"}</div>
		</div>
	);
}
