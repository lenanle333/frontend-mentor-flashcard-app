import logoSmall from "../../assets/images/logo-small.svg";
import logoLarge from "../../assets/images/logo-large.svg";
import { Tabs } from "../Tabs";
export const NavBar = () => {
	return (
		<div className="flex justify-between items-centerw-full self-stretch">
			<div className="flex place-items-center">
				<img className="md:hidden flex" src={logoSmall} alt="logo icon" />
				<img className="hidden md:flex" src={logoLarge} alt="logo icon with text" />
			</div>
			<Tabs />
		</div>
	);
};
