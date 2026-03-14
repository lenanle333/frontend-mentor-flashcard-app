import { useEffect, type RefObject } from "react";

export const useOnClickOutside = (
	ref: RefObject<HTMLElement | null>,
	callback: () => void,
	addEventListener = true,
) => {
	const handleClick = (e: MouseEvent | TouchEvent) => {
		// Dont do anything if mouse clicks on element!
		if (!ref.current || ref.current.contains(e.target as Node)) {
			return;
		}
		// Otherwise, run function
		callback();
	};

	useEffect(() => {
		if (addEventListener) {
			document.addEventListener("mousedown", handleClick);
			document.addEventListener("touchstart", handleClick);
		}
		// Checks for clicks and taps
		return () => {
			document.removeEventListener("mousedown", handleClick);
			document.removeEventListener("touchstart", handleClick);
		};
	});
};
