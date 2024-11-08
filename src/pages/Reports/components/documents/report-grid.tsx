import { FC } from "react";
import CommonReportItem, {
  CommonReportItemType,
} from "./components/common-reports-item";
export interface ReportGridProps {
  isEdit?: boolean;
}
const ReportGrid: FC<ReportGridProps> = ({ isEdit = false }) => {
  const generateLabReports = (): CommonReportItemType[] => {
    const reports: CommonReportItemType[] = [];
    for (let i = 1; i <= 30; i++) {
      reports.push({
        id: `lab-report-${i}`,
        name: `Lab Report ${i}`,
        url: `https://example.com/lab-report-${i}`,
      });
    }
    return reports;
  };

  const labReports = generateLabReports();

  const handleReportClick = (item: CommonReportItemType) => {
    // Add your logic here for handling the click event
  };
  return (
    <div className="grid grid-cols-6 gap-4 3xl:grid-cols-10">
      {isEdit ? (
        <div className="flex  flex-col items-center justify-center w-full h-full border-2 border-primary border-dashed rounded-lg cursor-pointer hover:bg-primary-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center cursor-pointer "
          >
            <div className=" border-primary text-sm text-primary flex bg-white items-center justify-center mb-4  border-[1px] h-8 w-[118px] rounded-lg">
              Upload
            </div>
            <p className="text-xs  text-gray-500 dark:text-gray-400 text-center">
              Supported formats: JPG, JPEG, PNG, PDF.
            </p>
          </label>
          <input id="dropzone-file" type="file" className="hidden" />
        </div>
      ) : null}
      {labReports.map((report) => (
        <CommonReportItem
          key={report.id}
          item={report}
          isEdit={isEdit}
          onClick={handleReportClick}
        />
      ))}
    </div>
  );
};

export default ReportGrid;
