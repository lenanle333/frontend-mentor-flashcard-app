import { db } from "../firebase/firebase";
import { collection, addDoc, getDoc, updateDoc, deleteDoc, doc, query, where, onSnapshot } from "firebase/firestore";
import type { UserFlashcard } from "../types/UserFlashcard";

// Create a new flashcard
export const addFlashcard = async (flashcard: Omit<UserFlashcard, "id">): Promise<string> => {
	try {
		const docRef = await addDoc(collection(db, "flashcards"), flashcard);
		return docRef.id;
	} catch (error) {
		console.error("Error adding flashcard:", error);
		throw error;
	}
};

// Read a single flashcard
export const getFlashcard = async (flashcardId: string): Promise<UserFlashcard | null> => {
	try {
		const flashcardDoc = await getDoc(doc(db, "flashcards", flashcardId));
		if (flashcardDoc.exists()) {
			return { id: flashcardDoc.id, ...flashcardDoc.data() } as UserFlashcard;
		} else {
			return null;
		}
	} catch (error) {
		console.error("Error getting flashcard:", error);
		throw error;
	}
};

// Read all flashcards for a user
export const getUserFlashcards = (userId: string, callback: (flashcards: UserFlashcard[]) => void) => {
	const q = query(collection(db, "flashcards"), where("userId", "==", userId));
	return onSnapshot(q, (querySnapshot) => {
		const flashcards = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as UserFlashcard);
		callback(flashcards);
	});
};

// Update a flashcard
export const updateFlashcard = async (flashcardId: string, updates: Partial<UserFlashcard>): Promise<void> => {
	try {
		await updateDoc(doc(db, "flashcards", flashcardId), updates);
	} catch (error) {
		console.error("Error updating flashcard:", error);
		throw error;
	}
};

// Delete a flashcard
export const deleteFlashcard = async (flashcardId: string): Promise<void> => {
	try {
		await deleteDoc(doc(db, "flashcards", flashcardId));
	} catch (error) {
		console.error("Error deleting flashcards:", error);
		throw error;
	}
};
