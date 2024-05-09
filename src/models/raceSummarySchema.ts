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

//data
//data
//next_to_go_ids (Array)
//id#: "idString"
//race_summaries
//"idString"
//advertised_start (array)
//seconds (number)
//category_id (string)
//meeting_name (string)
//race_id (string)
//race_name (string)
//race_number (number)
//venue_country (string)
//venue_id (string)
//venue_name (string)
//venue_state (string)
