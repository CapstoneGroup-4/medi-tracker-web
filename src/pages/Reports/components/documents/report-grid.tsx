import { FC, useState } from "react";
import { Attachment } from "@/api";
import CommonReportItem from "./components/common-reports-item";
import axios from "axios";
import { message } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export interface ReportGridProps {
  isEdit?: boolean;
  data?: Attachment[];
}

const ReportGrid: FC<ReportGridProps> = ({ isEdit = false, data }) => {
  const [progress, setProgress] = useState(0);
  const queryClient = useQueryClient();
  const { id } = useParams();
  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(
          `/api/medical-records/${id}/upload`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / (progressEvent.total || 1)
              );
              setProgress(percentCompleted);
            },
          }
        );
        message.success("Upload successful");
        queryClient.setQueryData(
          ["medical-record", "report", id],
          (prev: any) => {
            return [...prev, response.data?.data];
          }
        );
        setProgress(0);
      } catch (error) {
        message.error("Upload failed");
      }
    }
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
              {progress !== 0 ? `${progress}%` : "Upload"}
            </div>
            {progress !== 0 ? null : (
              <p className="text-xs  text-gray-500 dark:text-gray-400 text-center">
                Supported formats: JPG, JPEG, PNG, PDF.
              </p>
            )}
          </label>
          <input
            id="dropzone-file"
            type="file"
            disabled={progress !== 0}
            className="hidden"
            onChange={onFileChange}
            accept=".jpg,.jpeg,.png,.pdf"
          />
        </div>
      ) : null}
      {data?.map((report) => (
        <CommonReportItem
          key={report.attachmentId}
          item={report}
          isEdit={isEdit}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};

export default ReportGrid;
