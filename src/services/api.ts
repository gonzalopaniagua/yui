import { Record, RecordSchema } from "./schemas";
import { z } from "zod";
import { api } from "../lib/axios";

const recordsArraySchema = z.array(RecordSchema);

export async function fetchRecords(): Promise<Record[]> {
  const { data } = await api.get("/temphu");

  const parsedData = recordsArraySchema.parse(data);
  return parsedData;
}

// Optional: Add error types
export type ApiError = {
  message: string;
  status: number;
};
