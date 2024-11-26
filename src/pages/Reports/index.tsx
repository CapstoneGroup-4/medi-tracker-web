import { Button, DateValue, Tab } from "@nextui-org/react";
import { Tabs } from "@nextui-org/react";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import { FC, useEffect, useState } from "react";
import Overview from "./components/overview";
import Documents from "./components/documents";
import { Form, message } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { MedicalRecord, MedicalRecordControllerService } from "@/api";
import { useDoctorId, useIsDoctor } from "@/hooks/user";
import to from "await-to-js";
import { ShareModal } from "../workspace/components/doctor/share-modal";
import { DeleteModal } from "../workspace/components/doctor/delete-modal";
import dayjs from "dayjs";
export interface ReportsProps {}
const Reports: FC<ReportsProps> = () => {
  const tabs = ["Overview", "Documents", "Shared Records"] as const;
  const [selectedTab, setSelectedTab] = useState<(typeof tabs)[number]>(
    tabs[0]
  );
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm<{
    primaryDiagnosis: string;
    dateOfDiagnosis: DateValue;
    comment: string;
  }>();
  const [isEditLoading, setIsEditLoading] = useState(false);
  const { id } = useParams();
  const isDoctor = useIsDoctor();
  const queryKey = ["medical-record", id];
  const doctorId = useDoctorId();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey,
    retry: false,
    refetchOnWindowFocus: false,
    queryFn: () =>
      MedicalRecordControllerService.getRecordById({
        id: parseInt(id ?? "0"),
      }),
  });
  const navigate = useNavigate();
  const onEdit = async () => {
    const [formErr, values] = await to(form.validateFields());
    setIsEditLoading(true);
    if (formErr) {
      message.error("Form validation failed, please check the form");
      return;
    }
    if (!data?.id || !doctorId || !values) {
      message.error("Record not found");
      return;
    }
    const requestBody = {
      ...values,
      dateOfDiagnosis: values.dateOfDiagnosis
        .toDate(getLocalTimeZone())
        .toISOString(),
      doctorId,
    };
    const [err] = await to(
      MedicalRecordControllerService.updateRecord({
        id: data.id,
        requestBody,
      })
    );
    if (!err) {
      message.success("Updated successfully");
      queryClient.setQueryData(queryKey, () => {
        return {
          ...data,
          ...values,
        };
      });
      setIsEdit(false);
    }
    setIsEditLoading(false);
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tab = searchParams.get("tab");
    if (tab && tabs.includes(tab as any)) {
      setSelectedTab(tab as any);
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      const newParams = new URLSearchParams();
      if (selectedTab) {
        newParams.set("tab", selectedTab);
      }
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${newParams}`
      );
    }, 0);
  }, [selectedTab]);
  return (
    <main className="overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <Tabs
          color="secondary"
          onSelectionChange={(index) => {
            setSelectedTab(index as (typeof tabs)[number]);
          }}
          selectedKey={selectedTab}
          variant="underlined"
          aria-label="Tabs variants"
        >
          {tabs.map((tab) => (
            <Tab key={tab} title={tab} />
          ))}
        </Tabs>
        <div className="flex gap-4 items-center">
          {isEdit ? (
            <>
              <Button
                color="primary"
                variant="bordered"
                className="bg-white"
                onClick={() => setIsEdit(!isEdit)}
              >
                Cancel
              </Button>
              <Button
                color="primary"
                variant="solid"
                isLoading={isEditLoading}
                onClick={onEdit}
              >
                Save
              </Button>
            </>
          ) : isDoctor ? (
            <>
              <Button
                color="danger"
                variant="bordered"
                className="bg-white"
                onClick={() => {
                  setIsDeleteModalOpen(true);
                }}
              >
                Delete
              </Button>
              <Button
                color="primary"
                variant="bordered"
                className="bg-white"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </Button>
              <Button
                color="primary"
                variant="solid"
                onClick={() => setShareModalOpen(true)}
              >
                Share
              </Button>
            </>
          ) : null}
        </div>
      </div>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        onOk={async () => {
          if (data?.id) {
            const [err] = await to(
              MedicalRecordControllerService.deleteRecord({ id: data.id })
            );
            if (!err) {
              message.success("Deleted successfully");
              navigate("/workspace/reports");
            }
            setIsDeleteModalOpen(false);
          }
        }}
      />
      <ShareModal
        onOk={async () => {
          if (data?.id && doctorId) {
            const [err] = await to(
              MedicalRecordControllerService.shareMedicalRecord({
                recordId: data.id,
                doctorId,
              })
            );
            if (!err) {
              message.success("Shared successfully");
            }
          }
        }}
        isOpen={shareModalOpen}
        onOpenChange={setShareModalOpen}
      />
      <div>
        {selectedTab === "Overview" && (
          <Overview form={form} isEdit={isEdit} data={data} />
        )}
        {selectedTab === "Documents" && <Documents isEdit={isEdit} />}
        {selectedTab === "Shared Records" && <div>Shared Records</div>}
      </div>
    </main>
  );
};

export default Reports;
