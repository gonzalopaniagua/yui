import { z } from "zod";

export const RecordSchema = z.object({
  date: z.string(),
  temperature: z.number(),
  humidity: z.number(),
  timestamp: z.string(),
});

export type Record = z.infer<typeof RecordSchema>;
