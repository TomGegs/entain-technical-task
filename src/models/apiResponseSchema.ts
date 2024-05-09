import { z } from 'zod';
import { raceSummarySchema } from './raceSummarySchema';

export const apiResponseSchema = z.object({
    next_to_go_ids: z.array(z.string()),
    race_summaries: z.record(raceSummarySchema),
});

export type apiResponseData = z.infer<typeof apiResponseSchema>;
