import { useState } from "react";

import styles from "./index.module.css";
import StudyMode from "../../pages/StudyMode";
export const Tabs = () => {
	// Dictonary of tabs and their pages
	const tabs = [
		{ id: "studyMode", label: "Study Mode", content: <StudyMode /> },
		{ id: "allCards", label: "All Cards", content: "AllCardsPage" },
	];
	// First tab is the default active tab
	const [activeTab, setActiveTab] = useState(tabs[0].id);
	return (
		<div className={styles.tabBase}>
			{tabs.map((tab) => (
				<button
					key={tab.id}
					onClick={() => setActiveTab(tab.id)}
					className={activeTab === tab.id ? `${styles.activeTab}` : ""}
				>
					{tab.label}
				</button>
			))}
		</div>
	);
};
