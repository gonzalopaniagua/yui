import { useQuery } from "@tanstack/react-query";
import { fetchRecords } from "../services/api";

export function useRecords() {
  return useQuery({
    queryKey: ["records"],
    queryFn: fetchRecords,
    retry: 5,
    retryDelay: () => 3000,
    placeholderData: [
      {
        date: "2024-01-01",
        temperature: 0,
        humidity: 0,
        timestamp: "00:00:00",
      },
      {
        date: "2024-01-01",
        temperature: 0,
        humidity: 0,
        timestamp: "00:00:00",
      },
      {
        date: "2024-01-01",
        temperature: 0,
        humidity: 0,
        timestamp: "00:00:00",
      },
    ],
  });
}
