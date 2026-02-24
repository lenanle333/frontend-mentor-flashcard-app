import { NavLink } from "react-router";
import classes from "./index.module.css";

export const Tabs = () => {
	const routes = [
		{ path: "/", name: "Study Mode" },
		{ path: "/allCards", name: "All Cards" },
	];
	return (
		<nav className={classes.tabBase}>
			{routes.map((item, index) => (
				<NavLink
					key={index}
					to={item.path}
					className={({ isActive }) => (isActive ? `${classes.active}` : "")}
					end={item.path === "/"}
				>
					{item.name}
				</NavLink>
			))}
		</nav>
	);
};
