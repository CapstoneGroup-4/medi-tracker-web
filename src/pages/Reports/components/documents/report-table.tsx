import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Table, TableProps } from "antd";
import { FC } from "react";
export interface ReportTableProps {
  isEdit?: boolean;
}
export interface DataType {
  id: string;
  testName: string;
  testDate: string;
  testType: string;
  summary: string;
}
const generateReportData = (): DataType[] => {
  const data: DataType[] = [];
  for (let i = 1; i <= 30; i++) {
    data.push({
      id: `report-${i}`,
      testName: `Test ${i}`,
      testDate: new Date(Date.now() - Math.floor(Math.random() * 10000000000))
        .toISOString()
        .split("T")[0],
      testType: i % 2 === 0 ? "Lab Test" : "Imaging",
      summary: `Summary for Test ${i}`,
    });
  }
  return data;
};

const data = generateReportData();

const ReportTable: FC<ReportTableProps> = ({ isEdit = false }) => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Test Name",
      dataIndex: "testName",
      key: "testName",
      ellipsis: true,
    },
    {
      title: "Test Date",
      dataIndex: "testDate",
      ellipsis: true,
      key: "testDate",
    },
    {
      title: "Test Type",
      dataIndex: "testType",
      ellipsis: true,
      key: "testType",
    },
    {
      title: "Summary",
      dataIndex: "summary",
      key: "summary",
      ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      render: (_) => (
        <div className=" space-x-2">
          <Link size="sm" color="primary" aria-label="View">
            View
          </Link>
          <Link size="sm" color="primary" aria-label="Edit">
            Edit
          </Link>
          <Link size="sm" color="primary" aria-label="Delete">
            Delete
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table
        scroll={{ y: 360, x: 1000 }}
        size="small"
        pagination={false}
        columns={columns}
        dataSource={data}
      />
      {isEdit ? (
        <div className="flex  flex-col items-center justify-center w-full h-[50px] border-2 border-primary border-dashed rounded-lg cursor-pointer  dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <label
            htmlFor="dropzone-file"
            className="flex  items-center justify-center cursor-pointer gap-2"
          >
            <Icon icon="ri:upload-2-line" className="text-xl text-primary" />{" "}
            <div className=" text-sm text-primary flex bg-white items-center justify-center    h-[30px]w-[118px] rounded-lg">
              Upload Files
            </div>
          </label>
          <input id="dropzone-file" type="file" className="hidden" />
        </div>
      ) : null}
    </div>
  );
};

export default ReportTable;
