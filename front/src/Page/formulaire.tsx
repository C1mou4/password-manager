import { Button } from "@base-ui/react/button";
import { Input } from "@base-ui/react/input";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Card } from "../../components/ui/card";
import {
	Field,
	FieldGroup,
	FieldLegend,
	FieldSet,
} from "../../components/ui/field";

export type identifiants = {
	login: string;
	password: string;
};

export const CreatePassword = () => {
	const { register, handleSubmit } = useForm<identifiants>();

	const onSubmit: SubmitHandler<identifiants> = async (data) => {
		const reponse = await fetch("http://localhost:3006/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ login: data.login, password: data.password }),
		});
		if (!reponse.ok) {
			console.log("Erreur de sauvegarde");
		}
	};

	return (
		<div className="h-screen flex items-center justify-center">
			<Card className="flex w-1/2">
				<FieldSet>
					<FieldLegend className="pb-4">Nouveau mot de passe</FieldLegend>
					<FieldGroup className="justify-center items-center">
						<form onSubmit={handleSubmit(onSubmit)} className="w-full">
							<Field className="w-1/2 left-1/2 translate-x-1/2">
								<Input
									className="border-2 border-gray-200 rounded mb-4"
									defaultValue="indentifiant"
									{...register("login", { required: true })}
								/>
							</Field>

							<Field className="w-1/2 left-1/2 translate-x-1/2">
								<Input
									className="border-2 border-gray-200 rounded mb-4"
									defaultValue="mot de passe"
									{...register("password", {
										required: "Entrez un mot de passe",
									})}
								/>
							</Field>

							<div className="w-full flex justify-center gap-10">
								<Button
									className={
										"border rounded-xl border-gray-800 hover:bg-blue-900 hover:text-black w-1/6"
									}
									id="cancel"
								>
									Cancel
								</Button>
								<Button
									className={
										"border rounded-xl border-purple-800 hover:bg-purple-900 hover:text-black w-1/6"
									}
									id="save"
									type="submit"
								>
									Enregistrer
								</Button>
							</div>
						</form>
					</FieldGroup>
				</FieldSet>
			</Card>
		</div>
	);
};
