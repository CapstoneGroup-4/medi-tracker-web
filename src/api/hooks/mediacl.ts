import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MedicalRecordControllerService } from "../services/MedicalRecordControllerService";
import { MedicalRecordCreate } from "../models/MedicalRecord";
import { message } from "antd";

const useMedicalRecordService = ({
  page = 0,
  size = 10,
  sortBy,
  sortDir,
}: {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDir?: string;
}) => {
  const queryKey = ["medical-records", page, size, sortBy, sortDir];
  const queryClient = useQueryClient();
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: queryKey,
    retry: false,
    refetchOnWindowFocus: false,
    queryFn: () =>
      MedicalRecordControllerService.getAllRecords({
        page,
        size,
        sortBy,
        sortDir,
      }),
  });
  const { mutateAsync: createRecord, isPending: isCreatingRecord } =
    useMutation({
      mutationFn: (data: MedicalRecordCreate) =>
        MedicalRecordControllerService.createRecord({
          requestBody: data,
        }),
      onSuccess: () => {
        if (page === 0) {
          queryClient.invalidateQueries({ queryKey: queryKey });
        }
      },
    });
  const { mutateAsync: deleteRecord, isPending: isDeletingRecord } =
    useMutation({
      mutationFn: (id: number) =>
        MedicalRecordControllerService.deleteRecord({
          id,
        }),
      onSuccess: () => {
        message.success("Record deleted successfully");
        queryClient.invalidateQueries({ queryKey: queryKey });
      },
    });

  return {
    data,
    isLoading: isFetching,
    createRecord,
    isCreatingRecord,
    deleteRecord,
    isDeletingRecord,
  };
};
export default useMedicalRecordService;
