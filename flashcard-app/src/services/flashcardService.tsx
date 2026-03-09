import { db } from "../firebase";
import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import type { Flashcard } from "../types/Flashcard";

// Create a new flashcard
export const addFlashcard = async (flashcard: Omit<Flashcard, "id">): Promise<string> => {
	try {
		const docRef = await addDoc(collection(db, "flashcards"), flashcard);
		return docRef.id;
	} catch (error) {
		console.error("Error adding flashcard:", error);
		throw error;
	}
};

// Read a single flashcard
export const getFlashcard = async (flashcardId: string): Promise<Flashcard | null> => {
	try {
		const flashcardDoc = await getDoc(doc(db, "flashcards", flashcardId));
		if (flashcardDoc.exists()) {
			return { id: flashcardDoc.id, ...flashcardDoc.data() } as Flashcard;
		} else {
			return null;
		}
	} catch (error) {
		console.error("Error getting flashcard:", error);
		throw error;
	}
};

// Read all flashcards for a user
export const getUserFlashcards = async (userId: string): Promise<Flashcard[]> => {
	try {
		const q = query(collection(db, "flashcards"), where("userId", "==", userId));
		const querySnapshot = await getDocs(q);
		return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Flashcard);
	} catch (error) {
		console.error("Error getting user flashcards:", error);
		throw error;
	}
};

// Update a flashcard
export const updateFlashcard = async (flashcardId: string, updates: Partial<Flashcard>): Promise<void> => {
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
