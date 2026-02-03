interface Category {
	id: string;
	category: string;
}

export const CountCategories = (categories: Category[]): Record<string, number> => {
	return categories.reduce((acc, currentCategory) => {
		const type = currentCategory.category;
		// If the type already exists in the accumulator, increment its count
		if (acc[type]) {
			acc[type] += 1;
		}
		// Otherwise, initialize its count to 1
		else {
			acc[type] = 1;
		}
		return acc;
	}, {} as Record<string, number>); // Initialize with an empty object
};
