import { Button, Tab } from "@nextui-org/react";
import { Tabs } from "@nextui-org/react";
import { FC, useState } from "react";
import Overview from "./components/overview";
import Documents from "./components/documents";
export interface ReportsProps { }
const Reports: FC<ReportsProps> = () => {
    const tabs = ["Overview", "Documents", "Shared Records"] as const;
    const [selectedTab, setSelectedTab] = useState<(typeof tabs)[number]>(
        tabs[0]
    );
    const [isEdit, setIsEdit] = useState(false);
    return (
        <main className="overflow-hidden">
            <div className="flex justify-between items-center mb-6">
                <Tabs
                    color="secondary"
                    onSelectionChange={(index) => {
                        setSelectedTab(index as (typeof tabs)[number]);
                    }}
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
                                onClick={() => setIsEdit(!isEdit)}
                            >
                                Save
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                color="danger"
                                variant="bordered"
                                className="bg-white"
                                onClick={() => setIsEdit(!isEdit)}
                            >
                                Delete
                            </Button>
                            <Button
                                color="primary"
                                variant="bordered"
                                className="bg-white"
                                onClick={() => setIsEdit(!isEdit)}
                            >
                                Edit
                            </Button>
                            <Button
                                color="primary"
                                variant="solid"
                                onClick={() => setIsEdit(!isEdit)}
                            >
                                Share
                            </Button>
                        </>
                    )}
                </div>
            </div>
            <div>
                {selectedTab === "Overview" && <Overview isEdit={isEdit} />}
                {selectedTab === "Documents" && <Documents />}
                {selectedTab === "Shared Records" && <div>Shared Records</div>}
            </div>
        </main>
    );
};

export default Reports;
