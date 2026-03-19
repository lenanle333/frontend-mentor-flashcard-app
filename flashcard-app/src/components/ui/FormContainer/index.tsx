import React from "react";

interface FormContainerProps {
	children: React.ReactNode;
}
export default function FormContainer({ children }: FormContainerProps) {
	return (
		<div className="card-style flex p-250 flex-col items-center gap-300 self-stretch md:p-300 lg-400">{children}</div>
	);
}
