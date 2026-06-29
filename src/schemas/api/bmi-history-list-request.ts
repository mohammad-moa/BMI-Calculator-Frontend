import { z } from 'zod'

export const bmiHistoryListRequestSchema = z.object({
  page: z.coerce.number().optional().default(1),
  limit: z.coerce.number().optional().default(10),
  search: z.string().optional(),
})

export type BmiHistoryListRequest = z.infer<typeof bmiHistoryListRequestSchema>
