import { useState, useEffect } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../firebase";

export const useAuth = () => {
	const [user, setUser] = useState<User | null>(null);
	const [userId, setUserId] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				setUserId(user.uid);
				setLoading(false);
			} else {
				setUser(null);
				setUserId(null);
			}
		});

		return () => unsubscribe();
	}, []);

	return { user, userId, loading };
};
