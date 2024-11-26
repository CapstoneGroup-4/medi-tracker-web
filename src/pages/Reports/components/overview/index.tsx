import {
  Card,
  CardHeader,
  CardBody,
  Input,
  cn,
  DatePicker,
  Textarea,
} from "@nextui-org/react";
import {
  parseDate,
  getLocalTimeZone,
  DateValue,
} from "@internationalized/date";

import { Form, FormInstance } from "antd";
import { FC, useEffect } from "react";
import { MedicalRecord } from "@/api";
import dayjs from "dayjs";
export interface OverviewProps {
  isEdit: boolean;
  form: FormInstance;
  data?: MedicalRecord;
}
const Overview: FC<OverviewProps> = ({ isEdit, form, data }) => {
  const timeZone = getLocalTimeZone();
  // const prescribedMedication = {
  //   medicationName: "Lisinopril",
  //   dosage: "10 mg",
  //   frequency: "Once daily",
  //   duration: "3 months",
  //   instructions: "Take with food, or 1 hour after meal",
  //   prescribingDoctor: "Dr. Emily Johnson",
  // };

  const generalColumn = [
    {
      key: "patientName",
      label: "Patient Name",
      render: () => {
        // if (isEdit) {
        //   return (
        //     <Form.Item name="patientName">
        //       <Input className="w-[240px]" variant="bordered" size="sm" />
        //     </Form.Item>
        //   );
        // }
        return <div>{data?.patientName}</div>;
      },
    },
    {
      key: "gender",
      label: "Gender",
      render: () => {
        // if (isEdit) {
        //   return (
        //     <Form.Item
        //       valuePropName="selectedKeys"
        //       trigger="onSelectionChange"
        //       getValueFromEvent={(e) => e.currentKey}
        //       name="gender"
        //     >
        //       <Select className="w-[240px]" variant="bordered" size="sm">
        //         <SelectItem key="0" value={"0"}>
        //           Male
        //         </SelectItem>
        //         <SelectItem key="1" value={"1"}>
        //           Female
        //         </SelectItem>
        //       </Select>
        //     </Form.Item>
        //   );
        // }
        return <div>{data?.gender === 0 ? "Male" : "Female"}</div>;
      },
    },
    {
      key: "age",
      label: "Age",
      render: () => {
        // if (isEdit) {
        //   return (
        //     <Form.Item name="age">
        //       <Input
        //         className="w-[240px]"
        //         variant="bordered"
        //         size="sm"
        //         type="number"
        //       />
        //     </Form.Item>
        //   );
        // }
        return <div>{data?.age}</div>;
      },
    },
    {
      key: "primaryDiagnosis",
      label: "Primary Diagnosis",
      render: () => {
        if (isEdit) {
          return (
            <Form.Item
              rules={[
                { required: true, message: "Primary Diagnosis is required" },
              ]}
              name="primaryDiagnosis"
            >
              <Input className="w-[240px]" variant="bordered" size="sm" />
            </Form.Item>
          );
        }
        return <div>{data?.primaryDiagnosis}</div>;
      },
    },
    {
      key: "dateOfDiagnosis",
      label: "Date of Diagnosis",

      render: () => {
        if (isEdit) {
          return (
            <Form.Item
              rules={[
                { required: true, message: "Date of Diagnosis is required" },
              ]}
              name="dateOfDiagnosis"
            >
              <DatePicker className="w-[240px]" variant="bordered" size="sm" />
            </Form.Item>
          );
        }
        return (
          <div>
            {typeof data?.dateOfDiagnosis === "string"
              ? dayjs(data?.dateOfDiagnosis).format("YYYY-MM-DD")
              : data?.dateOfDiagnosis !== null &&
                data?.dateOfDiagnosis !== undefined
              ? dayjs(
                  (data?.dateOfDiagnosis as any as DateValue).toDate(timeZone)
                ).format("YYYY-MM-DD")
              : "-"}
          </div>
        );
      },
    },
    {
      key: "recordId",
      label: "Record ID",
      render: () => {
        // if (isEdit) {
        //   return (
        //     <Form.Item name="recordId">
        //       <Input className="w-[240px]" variant="bordered" size="sm" />
        //     </Form.Item>
        //   );
        // }
        return <div>{data?.recordId}</div>;
      },
    },
    {
      key: "sin",
      label: "SIN",
      render: () => {
        // if (isEdit) {
        //   return (
        //     <Form.Item name="sin">
        //       <Input className="w-[240px]" variant="bordered" size="sm" />
        //     </Form.Item>
        //   );
        // }
        return <div>{data?.sin}</div>;
      },
    },
    {
      key: "clinicName",
      label: "Clinic Name",
      render: () => {
        // if (isEdit) {
        //   return (
        //     <Form.Item name="clinicName">
        //       <Input className="w-[240px]" variant="bordered" size="sm" />
        //     </Form.Item>
        //   );
        // }
        return <div>{data?.clinicName}</div>;
      },
    },
    {
      key: "doctorName",
      label: "Doctor Name",
      render: () => {
        // if (isEdit) {
        //   return (
        //     <Form.Item name="doctorName">
        //       <Input className="w-[240px]" variant="bordered" size="sm" />
        //     </Form.Item>
        //   );
        // }
        return <div>{data?.doctorName}</div>;
      },
    },
    {
      key: "comment",
      label: "Comment",
      render: () => {
        if (isEdit) {
          return (
            <Form.Item name="comment">
              <Textarea
                className="w-[240px] resize-y"
                variant="bordered"
                size="sm"
              />
            </Form.Item>
          );
        }
        return <div>{data?.comment}</div>;
      },
    },
  ];
  // const diagnosisData = {
  //   primaryDiagnosis: "Hypertension",
  //   dateOfDiagnosis: "2024-08-18",
  //   doctorsNotes:
  //     "The patient reports persistent high blood pressure, especially during periods of stress. Recommended lifestyle changes and medication have been discussed.",
  //   treatmentPlan:
  //     "Lisinopril 10mg, take once daily. None at this time. Adopt a low-sodium diet. Engage in regular cardiovascular exercise.",
  //   nextSteps: "-",
  //   treatmentStatus: "Ongoing",
  //   physicianName: "Dr. Emily Johnson",
  // };
  // const diagnosisColumn = [
  //   {
  //     key: "primaryDiagnosis",
  //     label: "Primary Diagnosis",
  //     render: () => {
  //       if (isEdit) {
  //         return (
  //           <Form.Item name="primaryDiagnosis">
  //             <Input className="w-[200px]" variant="bordered" size="sm" />
  //           </Form.Item>
  //         );
  //       }
  //       return <div>{diagnosisData.primaryDiagnosis}</div>;
  //     },
  //   },
  //   {
  //     key: "dateOfDiagnosis",
  //     label: "Date of Diagnosis",
  //     render: () => {
  //       if (isEdit) {
  //         return (
  //           <Form.Item name="dateOfDiagnosis">
  //             <DatePicker className="w-[200px]" variant="bordered" size="sm" />
  //           </Form.Item>
  //         );
  //       }
  //       return <div>{diagnosisData.dateOfDiagnosis}</div>;
  //     },
  //   },
  //   {
  //     key: "doctorsNotes",
  //     label: "Doctor's Notes",
  //     render: () => {
  //       if (isEdit) {
  //         return (
  //           <Form.Item name="doctorsNotes">
  //             <Textarea
  //               classNames={{
  //                 input: "resize-y min-h-[100px]",
  //               }}
  //               className="w-[500px]"
  //               variant="bordered"
  //               size="sm"
  //             />
  //           </Form.Item>
  //         );
  //       }
  //       return <div>{diagnosisData.doctorsNotes}</div>;
  //     },
  //   },
  //   {
  //     key: "treatmentPlan",
  //     label: "Treatment Plan",
  //     render: () => {
  //       if (isEdit) {
  //         return (
  //           <Form.Item name="treatmentPlan">
  //             <Textarea
  //               classNames={{
  //                 input: "resize-y min-h-[100px]",
  //               }}
  //               className="w-[500px]"
  //               variant="bordered"
  //               size="sm"
  //             />
  //           </Form.Item>
  //         );
  //       }
  //       return <div>{diagnosisData.treatmentPlan}</div>;
  //     },
  //   },
  //   {
  //     key: "treatmentStatus",
  //     label: "Treatment Status",
  //     render: () => {
  //       if (isEdit) {
  //         return (
  //           <Form.Item name="treatmentStatus">
  //             <Select className="w-[200px]" variant="bordered" size="sm">
  //               <SelectItem key="ongoing" value="Ongoing">
  //                 Ongoing
  //               </SelectItem>
  //               <SelectItem key="completed" value="Completed">
  //                 Completed
  //               </SelectItem>
  //             </Select>
  //           </Form.Item>
  //         );
  //       }
  //       return <div>{diagnosisData.treatmentStatus}</div>;
  //     },
  //   },
  //   {
  //     key: "physicianName",
  //     label: "Physician Name",
  //     render: () => {
  //       if (isEdit) {
  //         return (
  //           <Form.Item name="physicianName">
  //             <Input
  //               isDisabled
  //               className="w-[200px]"
  //               variant="flat"
  //               size="sm"
  //             />
  //           </Form.Item>
  //         );
  //       }
  //       return <div>{diagnosisData.physicianName}</div>;
  //     },
  //   },
  // ];
  // const prescribedMedicationColumn = [
  //   {
  //     key: "medicationName",
  //     label: "Medication Name",
  //     render: () => {
  //       if (isEdit) {
  //         return (
  //           <Form.Item name="medicationName">
  //             <Input className="w-[200px]" variant="bordered" size="sm" />
  //           </Form.Item>
  //         );
  //       }
  //       return <div>{prescribedMedication.medicationName}</div>;
  //     },
  //   },
  //   {
  //     key: "dosage",
  //     label: "Dosage",
  //     render: () => {
  //       if (isEdit) {
  //         return (
  //           <Form.Item name="dosage">
  //             <Input className="w-[200px]" variant="bordered" size="sm" />
  //           </Form.Item>
  //         );
  //       }
  //       return <div>{prescribedMedication.dosage}</div>;
  //     },
  //   },
  //   {
  //     key: "frequency",
  //     label: "Frequency",
  //     render: () => {
  //       if (isEdit) {
  //         return (
  //           <Form.Item name="frequency">
  //             <Input className="w-[200px]" variant="bordered" size="sm" />
  //           </Form.Item>
  //         );
  //       }
  //       return <div>{prescribedMedication.frequency}</div>;
  //     },
  //   },
  //   {
  //     key: "duration",
  //     label: "Duration",
  //     render: () => {
  //       if (isEdit) {
  //         return (
  //           <Form.Item name="duration">
  //             <Input className="w-[200px]" variant="bordered" size="sm" />
  //           </Form.Item>
  //         );
  //       }
  //       return <div>{prescribedMedication.duration}</div>;
  //     },
  //   },
  //   {
  //     key: "instructions",
  //     label: "Instructions",
  //     render: () => {
  //       if (isEdit) {
  //         return (
  //           <Form.Item name="instructions">
  //             <Textarea
  //               classNames={{
  //                 input: "resize-y min-h-[100px]",
  //               }}
  //               className="w-[500px]"
  //               variant="bordered"
  //               size="sm"
  //             />
  //           </Form.Item>
  //         );
  //       }
  //       return <div>{prescribedMedication.instructions}</div>;
  //     },
  //   },
  //   {
  //     key: "prescribingDoctor",
  //     label: "Prescribing Doctor",
  //     render: () => {
  //       if (isEdit) {
  //         return (
  //           <Form.Item name="prescribingDoctor">
  //             <Input className="w-[200px]" variant="bordered" size="sm" />
  //           </Form.Item>
  //         );
  //       }
  //       return <div>{prescribedMedication.prescribingDoctor}</div>;
  //     },
  //   },
  // ];

  useEffect(() => {
    form.setFieldsValue({
      ...data,
      dateOfDiagnosis: data?.dateOfDiagnosis
        ? parseDate(dayjs(data.dateOfDiagnosis).format("YYYY-MM-DD"))
        : undefined,
      gender: data?.gender === 0 ? "0" : "1",
    });
  }, [data]);
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
      {/* <Card shadow="none">
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
      <Card shadow="none">
        <CardHeader>
          <h1 className="text-xl font-bold">Prescribed Medication</h1>
        </CardHeader>
        <CardBody className="mb-2">
          <Form form={form} className={cn("", isEdit ? "" : "space-y-4")}>
            {prescribedMedicationColumn.map((col) => (
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
      </Card> */}
    </div>
  );
};

export default Overview;
