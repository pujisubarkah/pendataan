import { pgTable, bigint, varchar, integer } from 'drizzle-orm/pg-core';

export const instansi = pgTable('instansi', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  agencyId: bigint('agency_id', { mode: 'number' }),
  agencyName: varchar('agency_name', { length: 255 }),
  agencyCategoryId: integer('agency_category_id'),
});
