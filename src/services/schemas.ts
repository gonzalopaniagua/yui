import { z } from "zod";

export const RecordSchema = z.object({
  id: z.string(),
  temperature: z.number(),
  humidity: z.number(),
  timestamp: z.string(),
});

export type Record = z.infer<typeof RecordSchema>;
