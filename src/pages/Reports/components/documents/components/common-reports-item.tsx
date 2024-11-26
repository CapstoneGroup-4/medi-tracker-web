import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/button";
import React, { FC, useState } from "react";
import { Attachment, MedicalRecordControllerService } from "@/api";
import to from "await-to-js";
import { useParams } from "react-router-dom";
import axios from "axios";
export interface CommonReportItemProps {}
export interface CommonReportItemProps {
  item: Attachment;
  isEdit?: boolean;
  onClick: (item: Attachment) => void;
}
const CommonReportItem: FC<CommonReportItemProps> = ({
  item,
  isEdit,
  onClick,
}) => {
  const { id } = useParams();
  const [downloading, setDownloading] = useState(false);
  return (
    <div className="group h-[120px] rounded-md relative bg-primary-300 flex flex-col gap-4 justify-center items-center">
      <Icon icon="lsicon:report-outline" className="text-white text-4xl" />
      <div className="text-sm font-medium text-white">
        {item.attachmentName}
      </div>
      <div className="hidden group-hover:flex bg-primary-300/50 rounded-md backdrop-blur-sm gap-2 absolute inset-0 justify-center items-center">
        <Button
          size="sm"
          variant="light"
          color="primary"
          isIconOnly
          radius="full"
          className="bg-white data-[hover=true]:bg-primary-500 data-[hover=true]:text-white"
          aria-label="View"
        >
          <Icon className="text-lg" icon="mingcute:eye-line" />
        </Button>
        <Button
          size="sm"
          variant="light"
          color="primary"
          isLoading={downloading}
          onClick={async () => {
            setDownloading(true);
            const [err, res] = await to(
              axios.get(
                `/api/medical-records/${id}/download/${item.attachmentId}`,
                {
                  responseType: "blob",
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              )
            );
            if (!err && res) {
              const url = window.URL.createObjectURL(new Blob([res.data]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", item.attachmentName ?? "");
              document.body.appendChild(link);
              link.click();
              link.remove();
              window.URL.revokeObjectURL(url);
            }
            setDownloading(false);
          }}
          isIconOnly
          radius="full"
          className="bg-white data-[hover=true]:bg-primary-500 data-[hover=true]:text-white"
          aria-label="Edit"
        >
          <Icon className="text-lg" icon="mingcute:download-line" />
        </Button>
        {isEdit ? (
          <Button
            size="sm"
            variant="light"
            isIconOnly
            radius="full"
            className="bg-white text-red-500 data-[hover=true]:bg-red-500 data-[hover=true]:text-white"
            aria-label="Delete"
          >
            <Icon className="text-lg  " icon="mingcute:delete-2-line" />
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default CommonReportItem;
