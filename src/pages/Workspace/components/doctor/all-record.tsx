import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Pagination,
} from "@nextui-org/react";
import { FC, useState } from "react";
import { message, Table } from "antd";
import type { TableProps } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import Filter from "./filter";
import { useNavigate } from "react-router-dom";
import useMedicalRecordService from "@/api/hooks/mediacl";
import { MedicalRecord, MedicalRecordControllerService } from "@/api";
import { useDoctorId, useIsDoctor } from "@/hooks/user";
import { DeleteModal } from "./delete-modal";
import { useQueryClient } from "@tanstack/react-query";
import { ShareModal } from "./share-modal";
import dayjs from "dayjs";

interface DataType {
  key: string;
  patientName: string;
  diagnosis: string;
  nik: string;
  caseType: string;
  sharedBy: string;
  sharedDate: string;
  lastUpdated: string;
}

const data: DataType[] = [];

for (let i = 0; i < 30; i++) {
  data.push({
    key: i.toString(),
    patientName: `Patient ${i + 1}`,
    nik: `NIK ${i + 1}`,
    diagnosis: `Diagnosis ${i + 1}`,
    caseType: i % 2 === 0 ? "Internal" : "External",
    sharedBy: `Doctor ${Math.floor(Math.random() * 10) + 1}`,
    sharedDate: new Date(Date.now() - Math.floor(Math.random() * 10000000000))
      .toISOString()
      .split("T")[0],
    lastUpdated: new Date(Date.now() - Math.floor(Math.random() * 1000000000))
      .toISOString()
      .split("T")[0],
  });
}
export interface DoctorTableProps {
  tab: "All Records" | "Recent Visits" | "Shared Records";
}
const DoctorTable: FC<DoctorTableProps> = ({ tab }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [focusedRecord, setFocusedRecord] = useState<MedicalRecord | null>(
    null
  );
  const { data, isLoading, createRecord, deleteRecord } =
    useMedicalRecordService({
      page: currentPage - 1,
      size: 10,
    });
  const navigate = useNavigate();
  const isDoctor = useIsDoctor();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const columns: TableProps<MedicalRecord>["columns"] = [
    {
      title: "Record No",
      dataIndex: "id",
      key: "id",
      ellipsis: true,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Date of Diagnosis",
      dataIndex: "dateOfDiagnosis",
      key: "dateOfDiagnosis",
      ellipsis: true,
      render: (dateOfDiagnosis) =>
        dateOfDiagnosis ? dayjs(dateOfDiagnosis).format("YYYY-MM-DD") : "-",
    },
    {
      title: "SIN",
      dataIndex: "sin",
      ellipsis: true,
      key: "sin",
    },
    {
      title: isDoctor ? "Patient Name" : "Doctor Name",
      dataIndex: "patientName",
      ellipsis: true,
      key: "patientName",
    },
    {
      title: "Diagnosis",
      dataIndex: "primaryDiagnosis",
      ellipsis: true,
      key: "primaryDiagnosis",
    },
    // {
    //   title: "Case Type",
    //   dataIndex: "caseType",
    //   align: "left",
    //   key: "caseType",
    //   render: (caseType) => (
    //     <Button
    //       variant="bordered"
    //       size="sm"
    //       color={caseType === "Internal" ? "primary" : "success"}
    //     >
    //       {caseType}
    //     </Button>
    //   ),
    // },
    // {
    //   title: "Shared By",
    //   dataIndex: "sharedBy",
    //   key: "sharedBy",
    // },
    // {
    //   title: "Shared Date",
    //   dataIndex: "sharedDate",
    //   key: "sharedDate",
    // },
    {
      title: "Clinical Name",
      dataIndex: "clinicName",
      key: "clinicName",
    },
    {
      title: "Comment",
      ellipsis: true,
      dataIndex: "comment",
      key: "comment",
    },
    // {
    //   title: "Last Updated",
    //   dataIndex: "lastUpdated",
    //   key: "lastUpdated",
    // },
    {
      title: "Actions",
      key: "action",
      fixed: "right",
      render: (_, record) => (
        <div className="flex ">
          <Button
            size="sm"
            variant="light"
            color="primary"
            isIconOnly
            onClick={() =>
              navigate(
                `/workspace/reports/${record.id}?name=${
                  isDoctor ? record.doctorName : record.patientName
                }`
              )
            }
            aria-label="View"
          >
            <Icon className="text-lg" icon="mingcute:eye-line" />
          </Button>
          {isDoctor ? (
            <>
              <Button
                size="sm"
                variant="light"
                color="primary"
                isIconOnly
                onClick={() => {
                  setFocusedRecord(record);
                  setIsShareModalOpen(true);
                }}
                aria-label="Edit"
              >
                <Icon className="text-lg" icon="material-symbols:ios-share" />
              </Button>
              <Button
                size="sm"
                variant="light"
                color="primary"
                onClick={() => {
                  setFocusedRecord(record);
                  setIsDeleteModalOpen(true);
                }}
                isIconOnly
                aria-label="Delete"
              >
                <Icon className="text-lg" icon="mingcute:delete-2-line" />
              </Button>
            </>
          ) : null}
        </div>
      ),
    },
  ];
  const doctorId = useDoctorId();
  return (
    <Card shadow="none" className="py-4">
      <CardHeader className="border-b mb-4 border-b-[#E7EBEA]">
        <Filter
          createMedicalRecord={async (values) => {
            const res = await createRecord(values);
            if (currentPage > 0) {
              setCurrentPage(1);
            }
            setFocusedRecord(null);

            return res;
          }}
          tab={tab}
        />
      </CardHeader>
      <CardBody className="border-b border-b-[#E7EBEA]">
        <Table<MedicalRecord>
          scroll={{ y: 360, x: 1000 }}
          size="small"
          pagination={false}
          columns={columns}
          loading={isLoading}
          dataSource={data?.content}
        />
      </CardBody>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        onOk={async () => {
          if (focusedRecord?.id) {
            await deleteRecord(focusedRecord.id);
            setIsDeleteModalOpen(false);
          }
        }}
      />
      <ShareModal
        isOpen={isShareModalOpen}
        onOpenChange={setIsShareModalOpen}
        onOk={async () => {
          if (focusedRecord?.id && doctorId) {
            await MedicalRecordControllerService.shareMedicalRecord({
              recordId: focusedRecord.id,
              doctorId: doctorId,
            });
            message.success("Record shared successfully");
            setIsShareModalOpen(false);
          }
        }}
      />
      <CardFooter className="flex items-center justify-center ">
        <div className="flex items-center justify-center  ">
          <Button
            variant="light"
            color="primary"
            isDisabled={currentPage - 1 === 0}
            startContent={
              <Icon icon="material-symbols:arrow-back-ios-rounded" />
            }
            onPress={() =>
              setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
            }
          >
            Previous
          </Button>
          <Pagination
            total={data?.totalPages ?? 1}
            color="primary"
            variant="light"
            page={currentPage}
            onChange={setCurrentPage}
          />
          <Button
            variant="light"
            endContent={
              <Icon icon="material-symbols:arrow-forward-ios-rounded" />
            }
            color="primary"
            isDisabled={currentPage === (data?.totalPages ?? 1)}
            onPress={() =>
              setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
            }
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DoctorTable;
