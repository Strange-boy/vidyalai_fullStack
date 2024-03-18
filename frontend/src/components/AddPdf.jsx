import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

//components from react hook form
import { useForm } from "react-hook-form";

const AddPdf = () => {
	const form = useForm();
	const { register, handleSubmit, formState } = form;
	const { errors } = formState;

	const postPdfDocument = (data) => {
		console.log("Data", data);
	};

	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Add Pdf</CardTitle>
					<CardDescription>
						You can upload your pdf document here
					</CardDescription>
				</CardHeader>

				<form action="" onSubmit={handleSubmit(postPdfDocument)} className="">
					<CardContent>
						<input
							type="file"
							id="pdfUpload"
							{...register("pdfUpload", {
								required: {
									value: true,
									message: "You need to upload a pdf file",
								},
								validate: {
									pdfDocPresent: (fileList) => {
										const currentFile = fileList[0];
										const fileType = currentFile?.type;
										return (
											fileType === "application/pdf" ||
											"Only pdf docs are supported"
										);
									},
								},
							})}
						/>
						<p className="mt-1  text-red-600 font-semibold text-sm">
							{errors.pdfUpload?.message}
						</p>
					</CardContent>
					<CardFooter>
						<Button className="block bg-slate-800">
							<span className="font-semibold font-sans">Upload pdf</span>
						</Button>
					</CardFooter>
				</form>
			</Card>
		</>
	);
};

export default AddPdf;
