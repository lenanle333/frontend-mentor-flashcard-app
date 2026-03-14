import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import Button from "../components/ui/Button";
const Logout: React.FC = () => {
	const handleLogout = async () => {
		try {
			await signOut(auth);
			console.log("User logged out successfully");
		} catch (error) {
			console.error("Error logging out:", error);
		}
	};

	return <Button onClick={handleLogout}>Logout</Button>;
};

export default Logout;
