import { z } from "zod"

export const envValidationSchema = z.object({
  VITE_SERVER_URL: z.string(),
})

const _env = envValidationSchema.safeParse(import.meta.env)

if (_env.error) {
  console.error(
    "Please provide the environment variables: " + _env.error.format()
  )

  throw new Error(
    "Please provide the environment variables: " + _env.error.format()
  )
}

export const env = _env.data
