import { OnlineAppointmentIcon } from "@/assets";
import { Card, CardBody, cn } from "@nextui-org/react";
import { FC } from "react";
import { RegisterIcon } from "../icon";
type ResgiterType = "personal" | "healthcare";
export interface ResgiterTypeProps {
  type: ResgiterType;
  onChange: (type: ResgiterType) => void;
}
const ResgiterTypeCard = ({
  icon,
  onClick,
  title,
  description,
  isSelected,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  isSelected: boolean;
}) => {
  return (
    <Card
      isPressable
      radius="sm"
      onClick={onClick}
      className={cn("cursor-pointer flex-1 w-[320px] p-6", {
        "border-2 border-primary": isSelected,
      })}
    >
      <CardBody className="gap-4 items-center">
        <div className="text-7xl">{icon}</div>
        <div className="text-center">
          <p className="text-base font-medium mb-2">{title}</p>
          <p className="text-[#586166] text-sm font-medium">{description}</p>
        </div>
      </CardBody>
    </Card>
  );
};
const ResgiterType: FC<ResgiterTypeProps> = ({ type, onChange }) => {
  const types = [
    {
      icon: <RegisterIcon />,
      title: "Personal account",
      description: "If you are registering for personal use",
      key: "personal",
    },
    {
      icon: <OnlineAppointmentIcon />,
      title: "Healthcare Professional account",
      description:
        "If you are a doctor, nurse, or healthcare provider responsible for patient care",
      key: "healthcare",
    },
  ];

  return (
    <div>
      <p className="text-[28px] font-semibold mb-2">Choose your account type</p>
      <p className="text-[#586166] mb-10 text-base font-medium">
        Please select your role
      </p>
      <div className="flex gap-4">
        {types.map((typeItem) => {
          const isSelected = type === typeItem.key;
          return (
            <ResgiterTypeCard
              isSelected={isSelected}
              onClick={() => onChange(typeItem.key as ResgiterType)}
              key={typeItem.key}
              icon={typeItem.icon}
              title={typeItem.title}
              description={typeItem.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResgiterType;
