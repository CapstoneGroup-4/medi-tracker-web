import { parseDate } from "@internationalized/date";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    cn,
    Select,
    SelectItem,
    DatePicker,
    Textarea,
} from "@nextui-org/react";
import { Form } from "antd";
import React, { FC, useEffect } from "react";
export interface OverviewProps {
    isEdit: boolean;
}
const Overview: FC<OverviewProps> = ({ isEdit }) => {
    const patientData = {
        name: "Maximilian Alexander Monane",
        gender: "Male",
        dateOfBirth: "2024-04-04",
        recordNo: "PA2432555",
        sin: "SSS1243254",
        nik: "1231243254",
    };
    const [form] = Form.useForm();
    const generalColumn = [
        {
            key: "name",
            label: "Name",
            render: () => {
                if (isEdit) {
                    return (
                        <Form.Item name="name">
                            <Input className="w-[200px]" variant="bordered" size="sm" />
                        </Form.Item>
                    );
                }
                return <div>{patientData.name}</div>;
            },
        },
        {
            key: "gender",
            label: "Gender",
            render: () => {
                if (isEdit) {
                    return (
                        <Form.Item name="gender">
                            <Select className="w-[200px]" variant="bordered" size="sm">
                                <SelectItem key="male" value="male">
                                    Male
                                </SelectItem>
                                <SelectItem key="female" value="female">
                                    Female
                                </SelectItem>
                            </Select>
                        </Form.Item>
                    );
                }
                return <div>{patientData.gender}</div>;
            },
        },
        {
            key: "dateOfBirth",
            label: "Date of Birth",
            render: () => {
                if (isEdit) {
                    return (
                        <Form.Item name="dateOfBirth">
                            <DatePicker className="w-[200px]" variant="bordered" size="sm" />
                        </Form.Item>
                    );
                }
                return <div>{patientData.dateOfBirth}</div>;
            },
        },
        {
            key: "recordNo",
            label: "Record No",
            render: () => {
                if (isEdit) {
                    return (
                        <Form.Item name="recordNo">
                            <Input className="w-[200px]" variant="bordered" size="sm" />
                        </Form.Item>
                    );
                }
                return <div>{patientData.recordNo}</div>;
            },
        },
        {
            key: "sin",
            label: "SIN",
            render: () => {
                if (isEdit) {
                    return (
                        <Form.Item name="sin">
                            <Input className="w-[200px]" variant="bordered" size="sm" />
                        </Form.Item>
                    );
                }
                return <div>{patientData.sin}</div>;
            },
        },
        {
            key: "nik",
            label: "NIK",
            render: () => {
                if (isEdit) {
                    return (
                        <Form.Item name="nik">
                            <Input className="w-[200px]" variant="bordered" size="sm" />
                        </Form.Item>
                    );
                }
                return <div>{patientData.nik}</div>;
            },
        },
    ];
    const diagnosisData = {
        primaryDiagnosis: "Hypertension",
        dateOfDiagnosis: "2024-08-18",
        doctorsNotes:
            "The patient reports persistent high blood pressure, especially during periods of stress. Recommended lifestyle changes and medication have been discussed.",
        treatmentPlan:
            "Lisinopril 10mg, take once daily. None at this time. Adopt a low-sodium diet. Engage in regular cardiovascular exercise.",
        nextSteps: "-",
        treatmentStatus: "Ongoing",
        physicianName: "Dr. Emily Johnson",
    };
    const diagnosisColumn = [
        {
            key: "primaryDiagnosis",
            label: "Primary Diagnosis",
            render: () => {
                if (isEdit) {
                    return (
                        <Form.Item name="primaryDiagnosis">
                            <Input className="w-[200px]" variant="bordered" size="sm" />
                        </Form.Item>
                    );
                }
                return <div>{diagnosisData.primaryDiagnosis}</div>;
            },
        },
        {
            key: "dateOfDiagnosis",
            label: "Date of Diagnosis",
            render: () => {
                if (isEdit) {
                    return (
                        <Form.Item name="dateOfDiagnosis">
                            <DatePicker className="w-[200px]" variant="bordered" size="sm" />
                        </Form.Item>
                    );
                }
                return <div>{diagnosisData.dateOfDiagnosis}</div>;
            },
        },
        {
            key: "doctorsNotes",
            label: "Doctor's Notes",
            render: () => {
                if (isEdit) {
                    return (
                        <Form.Item name="doctorsNotes">
                            <Textarea
                                classNames={{
                                    input: "resize-y min-h-[100px]",
                                }}
                                className="w-[500px]"
                                variant="bordered"
                                size="sm"
                            />
                        </Form.Item>
                    );
                }
                return <div>{diagnosisData.doctorsNotes}</div>;
            },
        },
        {
            key: "treatmentPlan",
            label: "Treatment Plan",
            render: () => {
                if (isEdit) {
                    return (
                        <Form.Item name="treatmentPlan">
                            <Textarea
                                classNames={{
                                    input: "resize-y min-h-[100px]",
                                }}
                                className="w-[500px]"
                                variant="bordered"
                                size="sm"
                            />
                        </Form.Item>
                    );
                }
                return <div>{diagnosisData.treatmentPlan}</div>;
            },
        },
        {
            key: "treatmentStatus",
            label: "Treatment Status",
            render: () => {
                if (isEdit) {
                    return (
                        <Form.Item name="treatmentStatus">
                            <Select className="w-[200px]" variant="bordered" size="sm">
                                <SelectItem key="ongoing" value="Ongoing">
                                    Ongoing
                                </SelectItem>
                                <SelectItem key="completed" value="Completed">
                                    Completed
                                </SelectItem>
                            </Select>
                        </Form.Item>
                    );
                }
                return <div>{diagnosisData.treatmentStatus}</div>;
            },
        },
        {
            key: "physicianName",
            label: "Physician Name",
            render: () => {
                if (isEdit) {
                    return (
                        <Form.Item name="physicianName">
                            <Input
                                isDisabled
                                className="w-[200px]"
                                variant="flat"
                                size="sm"
                            />
                        </Form.Item>
                    );
                }
                return <div>{diagnosisData.physicianName}</div>;
            },
        },
    ];

    useEffect(() => {
        form.setFieldsValue({
            ...patientData,
            ...diagnosisData,
            dateOfBirth: parseDate(patientData.dateOfBirth),
            dateOfDiagnosis: parseDate(diagnosisData.dateOfDiagnosis),
        });
    }, []);
    return (
        <div className="space-y-8 h-[calc(100vh-200px)] overflow-y-auto">
            <Card shadow="none">
                <CardHeader>
                    <h1 className="text-xl font-bold">General Information</h1>
                </CardHeader>
                <CardBody className="mb-2">
                    <Form form={form} className={cn("", isEdit ? "" : "space-y-4")}>
                        {generalColumn.map((col) => (
                            <div
                                key={col.key}
                                className={cn(
                                    "flex gap-10 items-center",
                                    isEdit ? "items-start mt-1" : ""
                                )}
                            >
                                <h1 className="text-sm font-medium min-w-[100px]  max-w-[100px] text-[#B5B6BA] ">
                                    {col.label}
                                </h1>
                                <div className="text-sm text-textDefault">{col.render()}</div>
                            </div>
                        ))}
                    </Form>
                </CardBody>
            </Card>
            <Card shadow="none">
                <CardHeader>
                    <h1 className="text-xl font-bold">Diagnosis & Treatment</h1>
                </CardHeader>
                <CardBody className="mb-2">
                    <Form form={form} className={cn("", isEdit ? "" : "space-y-4")}>
                        {diagnosisColumn.map((col) => (
                            <div
                                key={col.key}
                                className={cn(
                                    "flex gap-10 items-start",
                                    isEdit ? "items-start mt-1" : ""
                                )}
                            >
                                <h1 className="text-sm font-medium min-w-[100px]  max-w-[100px] text-[#B5B6BA] ">
                                    {col.label}
                                </h1>
                                <div className="text-sm text-textDefault">{col.render()}</div>
                            </div>
                        ))}
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Overview;
