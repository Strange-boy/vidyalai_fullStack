import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AddPdf from "@/components/AddPdf";
import UploadedPdf from "@/components/UploadedPdf";

const PdfDetails = () => {
	return (
		<div className="bg-slate-900 min-h-screen flex justify-center items-center">
			<Tabs defaultValue="addPdf" className="w-2/3 lg:w-1/2 h-3/4 ">
				<TabsList className="grid w-full grid-cols-2 bg-slate-300 text-black">
					<TabsTrigger value="addPdf">
						<p className="font-semibold font-sans ">ADD PDF</p>
					</TabsTrigger>
					<TabsTrigger value="editPdf">
						<p className="font-semibold font-sans ">UPLOADED PDF</p>
					</TabsTrigger>
				</TabsList>
				<TabsContent value="addPdf">
					<AddPdf />
				</TabsContent>
				<TabsContent value="editPdf">
					<UploadedPdf />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default PdfDetails;
