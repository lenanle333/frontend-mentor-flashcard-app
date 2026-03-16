import { forwardRef } from "react";
import style from "./index.module.css";
import { editIcon, deleteIcon } from "../../assets/images";

interface CardDropdownProps {
	onEditClick?: () => void;
	onDeleteClick?: () => void;
}

export const CardDropdown = forwardRef<HTMLDivElement, CardDropdownProps>(function CardDropdown(
	{ onEditClick, onDeleteClick },
	ref,
) {
	return (
		<div className={style.container} ref={ref}>
			<div className={style.item} onClick={onEditClick}>
				<img src={editIcon} alt="edit" />
				<span>Edit</span>
			</div>
			<div className="h-[0.0625rem] self-stretch bg-neutral-900" />
			<div className={style.item} onClick={onDeleteClick}>
				<img src={deleteIcon} alt="delete" />
				<span>Delete</span>
			</div>
		</div>
	);
});
