import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).optional(),
  PORT: z.coerce.number().default(3000).optional(),
  MONGO_URI: z
    .string()
    .regex(/^mongodb:\/\/([a-zA-Z0-9._-]+):([0-9]+)\/([a-zA-Z0-9_-]+)$/),
  NodeMailer_email: z.string().email(),
  NodeMailer_password: z.string(),
  jwtSecret: z.string(),
  adminjwtSecret: z.string(),
  recruiterJwtSecret: z.string(),
  adminSecret: z.string(),
})

const env = envSchema.parse(process.env)

export const {
  NodeMailer_email,
  NodeMailer_password,
  adminSecret,
  recruiterJwtSecret,
  adminjwtSecret,
  jwtSecret,
  MONGO_URI,
  PORT,
  NODE_ENV,
} = env

export default env
