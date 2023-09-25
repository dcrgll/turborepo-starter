import { Client } from "@planetscale/database"
import { drizzle } from "drizzle-orm/planetscale-serverless"

import * as auth from "./schema/auth"
import * as example from "./schema/example"

export const schema = { ...auth, ...example }

export { mySqlTable as tableCreator } from "./schema/_table"

export * from "drizzle-orm"

export const db = drizzle(
  new Client({
    url: process.env.DATABASE_URL
  }).connection(),
  { schema }
)
