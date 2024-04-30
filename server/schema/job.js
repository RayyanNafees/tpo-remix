import { z } from 'zod';
import { futureDateValidator } from './_validators.js';
const jobSchema = z.object({
  createdBy: z.string().optional(),
  companyName: z.string(),
  companyContact: z.string().optional(),
  applyStart: futureDateValidator,
  applyEnd: futureDateValidator,
  branch: z.string(),
  logoLink: z.string().url(),
  jobLink: z.string().url(),
  applyLink: z.string().url(),
  ctc: z.number(),
  location: z.string().optional(),
  type: z.string().optional(),
  details: z.string().optional(),
  appliedUsers: z.array(z.string()).optional(),
  closed: z.boolean().default(false).optional(),
});

export default jobSchema;
