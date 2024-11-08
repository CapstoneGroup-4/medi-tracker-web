import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FC } from "react";
import ReportGrid from "./report-grid";
import ReportTable from "./report-table";
export interface DocumentsProps {
  isEdit?: boolean;
}
const Documents: FC<DocumentsProps> = ({ isEdit = false }) => {
  return (
    <div className="space-y-8 h-[calc(100vh-200px)] overflow-y-auto">
      <Card shadow="none">
        <CardHeader>
          <h1 className="text-xl font-bold">Medical Reports</h1>
        </CardHeader>
        <CardBody className="mb-2  max-h-[300px] 3xl:max-h-[500px] overflow-auto">
          <ReportGrid isEdit={isEdit} />
        </CardBody>
      </Card>
      <Card shadow="none">
        <CardHeader>
          <h1 className="text-xl font-bold">Lab & Imaging Reports</h1>
        </CardHeader>
        <CardBody className="mb-2">
          <ReportTable isEdit={isEdit} />
        </CardBody>
      </Card>
      <Card shadow="none">
        <CardHeader>
          <h1 className="text-xl font-bold">Surgical Reports</h1>
        </CardHeader>
        <CardBody className="mb-2  max-h-[300px] 3xl:max-h-[500px] overflow-auto">
          <ReportGrid isEdit={isEdit} />
        </CardBody>
      </Card>
    </div>
  );
};

export default Documents;
