import { forwardRef, useState } from "react";
import style from "./index.module.css";
import { editIcon, deleteIcon } from "../../assets/images";
import EditCardModal from "../EditCardModal";
import DeleteCardModal from "../DeleteCardModal";
export const CardDropdown = forwardRef<HTMLDivElement>(function CardDropdown(_, ref) {
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);

	return (
		<div className={style.container} ref={ref}>
			<div className={style.item} onClick={() => setEditModalOpen(!editModalOpen)}>
				<img src={editIcon} alt="edit" />
				<span>Edit</span>
			</div>
			<div className="h-[0.0625rem] self-stretch bg-neutral-900" />
			<div className={style.item} onClick={() => setDeleteModalOpen(!deleteModalOpen)}>
				<img src={deleteIcon} alt="delete" />
				<span>Delete</span>
			</div>
			{editModalOpen ? <EditCardModal isVisible={editModalOpen} setIsVisible={setEditModalOpen} /> : null}
			{deleteModalOpen ? <DeleteCardModal isVisible={deleteModalOpen} setIsVisible={setDeleteModalOpen} /> : null}
		</div>
	);
});
