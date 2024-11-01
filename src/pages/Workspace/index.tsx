import { Tabs, Tab, Card, CardHeader, CardBody } from "@nextui-org/react";
import "./index.css";
import { FC } from "react";
import DoctorTable from "./doctor/doctor-table";
import { ConfigProvider } from "antd";
export interface WorkspaceProps {}
const Workspace: FC<WorkspaceProps> = () => {
  const tabs = ["All Records", "Recent Visits", "Shared Records"];
  return (
    <main className="overflow-hidden">
      <Tabs
        classNames={{
          tabList: "pb-0",
        }}
        color="secondary"
        variant="underlined"
        aria-label="Tabs variants"
      >
        {tabs.map((tab) => (
          <Tab key={tab} title={tab} />
        ))}
      </Tabs>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#F4F4F5",
              headerSplitColor: "transparent",
              headerColor:
                "hsl(var(--nextui-foreground-500) / var(--nextui-foreground-500-opacity, var(--tw-text-opacity)))",
              borderColor: "transparent",
            },
          },
        }}
      >
        <DoctorTable />
      </ConfigProvider>
    </main>
  );
};

export default Workspace;
