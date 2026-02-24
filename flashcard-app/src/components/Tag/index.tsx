import styles from "./index.module.css";
interface TagProps {
	name: string;
}
export default function Tag({ name }: TagProps) {
	return <div className={styles.container}>{name}</div>;
}
