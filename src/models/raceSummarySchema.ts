import { z } from 'zod';

export const raceSummarySchema = z.object({
    advertised_start: z.object({
        seconds: z.number(),
    }),
    category_id: z.string(),
    meeting_name: z.string(),
    race_id: z.string(),
    race_name: z.string(),
    race_number: z.number(),
});

export type raceSummaryData = z.infer<typeof raceSummarySchema>;
