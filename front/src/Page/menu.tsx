import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card.tsx";
import { CreatePassword, type identifiants } from "./formulaire";

const defaultData: identifiants[] = [
	{ login: "charles", password: "Coiz" },
	{ login: "tanner", password: "linsley" },
];

const columnHelper = createColumnHelper<identifiants>();

const columns = [
	columnHelper.accessor((row) => row.login, {
		id: "login",
		cell: (info) => <i>{info.getValue()}</i>,
		header: () => <span>LOGIN</span>,
		footer: (info) => info.column.id,
	}),
	columnHelper.accessor("password", {
		header: () => "PASSWORD",
		cell: (info) => info.renderValue(),
		footer: (info) => info.column.id,
	}),
];

export const Acceuil = () => {
	const [data, setData] = useState(() => [...defaultData]);
	const [isEditing, setIsEditing] = useState<boolean>(false);

	const handleEdit = () => {
		return <CreatePassword />;
	};

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<>
			{isEditing ? (
				<CreatePassword />
			) : (
				<Card className="mt-[20%]">
					<div className="p-2 flex align-middle items-center justify-center">
						<table>
							<thead>
								{table.getHeaderGroups().map((headerGroup) => (
									<tr key={headerGroup.id}>
										{headerGroup.headers.map((header) => (
											<th key={header.id} className="p-2">
												{header.isPlaceholder
													? null
													: flexRender(
															header.column.columnDef.header,
															header.getContext(),
														)}
											</th>
										))}
									</tr>
								))}
							</thead>
							<tbody>
								{table.getRowModel().rows.map((row) => (
									<tr key={row.id}>
										{row.getVisibleCells().map((cell) => (
											<td key={cell.id}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext(),
												)}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
						<div className="h-4" />
					</div>
					<div className="flex gap-4 align-middle items-center justify-center">
						<Button
							variant="default"
							onClick={() => handleEdit()}
							className={"border border-black"}
						>
							Ajouter
						</Button>

						<Button
							type="button"
							onClick={() => setData(...[], [])}
							className="border p-2 border-black"
						>
							Supprimer
						</Button>
					</div>
				</Card>
			)}
		</>
	);
};
