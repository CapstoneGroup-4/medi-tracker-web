export interface ShareRecordProps { }
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Pagination,
} from "@nextui-org/react";
import { FC, useState } from "react";
import { Space, Table } from "antd";
import type { TableProps } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import Filter from "./filter";
import { useNavigate } from "react-router-dom";

interface DataType {
    key: string;
    patientName: string;
    diagnosis: string;
    nik: string;
    caseType: string;
    sharedBy: string;
    sharedCount: number;
    sharedDate: string;
    lastShared: string;
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
        sharedCount: Math.floor(Math.random() * 10) + 1,
        sharedBy: `Doctor ${Math.floor(Math.random() * 10) + 1}`,
        sharedDate: new Date(Date.now() - Math.floor(Math.random() * 10000000000))
            .toISOString()
            .split("T")[0],
        lastShared: new Date(Date.now() - Math.floor(Math.random() * 1000000000))
            .toISOString()
            .split("T")[0],
        lastUpdated: new Date(Date.now() - Math.floor(Math.random() * 1000000000))
            .toISOString()
            .split("T")[0],
    });
}
const ShareRecord: FC<ShareRecordProps> = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const columns: TableProps<DataType>["columns"] = [
        {
            title: "Record No",
            dataIndex: "key",
            key: "key",
            ellipsis: true,
            render: (text) => <a>{text}</a>,
        },
        {
            title: "NIK",
            dataIndex: "nik",
            ellipsis: true,
            key: "nik",
        },
        {
            title: "Patient Name",
            dataIndex: "patientName",
            ellipsis: true,
            key: "patientName",
        },
        {
            title: "Diagnosis",
            dataIndex: "diagnosis",
            key: "diagnosis",
        },
        {
            title: "Case Type",
            dataIndex: "caseType",
            align: "left",
            key: "caseType",
            render: (caseType) => (
                <Button
                    variant="bordered"
                    size="sm"
                    color={caseType === "Internal" ? "primary" : "success"}
                >
                    {caseType}
                </Button>
            ),
        },
        {
            title: "Shared Count",
            dataIndex: "sharedCount",
            key: "sharedCount",
        },
        {
            title: "Last Shared",
            dataIndex: "lastShared",
            key: "lastShared",
        },
        {
            title: "Actions",
            key: "action",
            fixed: "right",
            render: (_) => (
                <div className="flex ">
                    <Button
                        size="sm"
                        variant="light"
                        color="primary"
                        isIconOnly
                        onClick={() => navigate("/workspace/reports/11")}
                        aria-label="View"
                    >
                        <Icon className="text-lg" icon="mingcute:eye-line" />
                    </Button>
                    <Button
                        size="sm"
                        variant="light"
                        color="primary"
                        isIconOnly
                        aria-label="Edit"
                    >
                        <Icon className="text-lg" icon="mingcute:download-line" />
                    </Button>
                </div>
            ),
        },
    ];
    return (
        <Card shadow="none" className="py-4">
            <CardHeader className="border-b mb-4 border-b-[#E7EBEA]">
                <Filter />
            </CardHeader>
            <CardBody className="border-b border-b-[#E7EBEA]">
                <Table<DataType>
                    scroll={{ y: 360, x: 1000 }}
                    size="small"
                    pagination={false}
                    columns={columns}
                    dataSource={data}
                />
            </CardBody>
            <CardFooter className="flex items-center justify-center ">
                <div className="flex items-center justify-center  ">
                    <Button
                        variant="light"
                        color="primary"
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
                        total={10}
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

export default ShareRecord;
