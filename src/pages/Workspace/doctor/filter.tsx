import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  DatePicker,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { FC } from "react";
export interface FilterProps {}
const Filter: FC<FilterProps> = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <Input
          className="min-w-[300px]"
          startContent={
            <Icon icon="lucide:search" className="text-default-500 text-xl" />
          }
          variant="bordered"
          placeholder="Search by patient, NIK, etc"
        />
        <DatePicker className="min-w-[200px]" variant="bordered" />
        <Select
          className="min-w-[200px]"
          placeholder="Select case type"
          variant="bordered"
        >
          <SelectItem key="external" value="external">
            External
          </SelectItem>
          <SelectItem key="internal" value="internal">
            Internal
          </SelectItem>
        </Select>
      </div>
      <Button color="primary">Create New Record</Button>
    </div>
  );
};

export default Filter;
