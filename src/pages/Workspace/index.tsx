import { Tabs, Tab } from "@nextui-org/react";
import "./index.css";
import { FC, useState } from "react";
import ShareRecord from "./doctor/share-record";
import AllRecord from "./doctor/all-record";
export interface WorkspaceProps { }
const Workspace: FC<WorkspaceProps> = () => {
  const tabs = ["All Records", "Recent Visits", "Shared Records"];
  const [tab, setTab] = useState<
    "All Records" | "Recent Visits" | "Shared Records"
  >("All Records");
  return (
    <main className="overflow-hidden">
      <Tabs
        classNames={{
          tabList: "pb-0",
        }}
        color="secondary"
        selectedKey={tab}
        onSelectionChange={(key) => setTab(key as any)}
        variant="underlined"
        aria-label="Tabs variants"
      >
        {tabs.map((tab) => (
          <Tab key={tab} title={tab} />
        ))}
      </Tabs>
      {tab === "All Records" && <AllRecord tab={tab} />}
      {tab === "Recent Visits" && null}
      {tab === "Shared Records" && <ShareRecord tab={tab} />}
    </main>
  );
};

export default Workspace;
