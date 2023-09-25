import { createId } from "@paralleldrive/cuid2"
import { timestamp, varchar } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm/sql"

import { mySqlTable } from "./_table"

export const example = mySqlTable("example", {
  id: varchar("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId())
    .unique(),
  title: varchar("title", { length: 256 }).notNull(),
  type: varchar("type", { length: 256 }).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt")
    .default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
    .onUpdateNow()
})
