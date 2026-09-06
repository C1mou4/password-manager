import { Card } from "../../components/ui/card";
import type { identifiants } from "./formulaire";

const _data: Array<identifiants> = [
	{ login: "charles", password: "Coiz" },
	{ login: "tanner", password: "linsley" },
];

const Tableau = () => {
	const table = useReactTable();
}

export const Acceuil = () => {
	return (
		<>
			<Card className="rounded m-4 bg-purple-950">
				<h2>Identifiants</h2>
			</Card>
			<Card>
				<Tableau />
			</Card>
		</>
	);
};
