import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { FC } from "react";
export interface ProfessionalProps {}
const Professional: FC<ProfessionalProps> = () => {
  return (
    <div>
      <div className="text-[28px] font-semibold ">
        verify your professional credentials
      </div>
      <form className={"grid grid-cols-12 flex-col gap-4 py-8 pt-6"}>
        <Input
          className="col-span-12  md:col-span-6"
          label="Professional License Number"
          name="licenseNumber"
          isRequired
          placeholder="Type your license number here"
          labelPlacement="outside"
        />

        <Input
          className="col-span-12 md:col-span-6"
          label="Issuing Authority"
          name="issuingAuthority"
          placeholder="Type your issuing authority here"
          isReadOnly
          labelPlacement="outside"
        />

        <Select
          className="col-span-12 md:col-span-6"
          label="Job Title"
          name="jobTitle"
          isRequired
          placeholder="Select Job Title"
          labelPlacement="outside"
        >
          <SelectItem key="canada" value="canada">
            Doctor
          </SelectItem>
          <SelectItem key="usa" value="usa">
            Nurse
          </SelectItem>
        </Select>

        <Input
          className="col-span-12 md:col-span-6"
          label="Specialization"
          isRequired
          name="specialization"
          labelPlacement="outside"
          placeholder="Type your specialization here"
        />
        <Input
          className="col-span-12 md:col-span-6"
          label="Hospital/Clinic Name"
          isRequired
          name="hospitalName"
          labelPlacement="outside"
          placeholder="Type your hospital/clinic name here"
        />
        <Input
          className="col-span-12 md:col-span-6"
          label="Association Membership"
          name="associationMembership"
          labelPlacement="outside"
          placeholder="Type your association membership here"
        />
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col items-start justify-center w-full">
            <label
              data-slot="label"
              className="after:content-['*'] after:text-danger text-foreground after:ml-0.5 mb-2 text-sm"
            >
              Personal ID
            </label>
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-[100px] border-2 border-[#D1D5DB] border-dashed rounded-lg cursor-pointer hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <div className=" flex items-center justify-center mb-4 border-[#D1D5DB] border-[1px] h-8 w-[118px] rounded-lg">
                  Upload
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Supported formats: JPG, JPEG, PNG, PDF.
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col items-start justify-center w-full">
            <label
              data-slot="label"
              className="after:content-['*'] after:text-danger after:ml-0.5 text-foreground mb-2 text-sm"
            >
              Professional ID
            </label>
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-[100px] border-2 border-[#D1D5DB] border-dashed rounded-lg cursor-pointer hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <div className=" flex items-center justify-center mb-4 border-[#D1D5DB] border-[1px] h-8 w-[118px] rounded-lg">
                  Upload
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Supported formats: JPG, JPEG, PNG, PDF.
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Professional;
