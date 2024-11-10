import { useQuery } from "@tanstack/react-query";
import { fetchRecords } from "../services/api";

export function useRecords() {
  return useQuery({
    queryKey: ["records"],
    queryFn: fetchRecords,
  });
}
