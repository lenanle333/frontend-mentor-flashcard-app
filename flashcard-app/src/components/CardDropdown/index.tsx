import { forwardRef, useState } from "react";
import style from "./index.module.css";
import editIcon from "../../assets/images/icon-edit.svg";
import deleteIcon from "../../assets/images/icon-delete.svg";
import EditCardModal from "../EditCardModal";
export const CardDropdown = forwardRef<HTMLDivElement>(function CardDropdown(_, ref) {
	const [editModalOpen, setEditModalOpen] = useState(false);

	return (
		<div className={style.container} ref={ref}>
			<div className={style.item} onClick={() => setEditModalOpen(!editModalOpen)}>
				<img src={editIcon} alt="edit" />
				<span>Edit</span>
			</div>
			<div className="h-[0.0625rem] self-stretch bg-neutral-900" />
			<div className={style.item}>
				<img src={deleteIcon} alt="delete" />
				<span>Delete</span>
			</div>
			{editModalOpen ? <EditCardModal /> : null}
		</div>
	);
});
