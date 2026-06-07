import { pgTable, integer, text, timestamp } from 'drizzle-orm/pg-core';

export const profil = pgTable('profil', {
  id: integer('id').primaryKey(), // int4
  instansiId: integer('instansi_id'), // int4
  unit: text('unit'),
  namaPic: text('nama_pic'),
  kontakPic: text('kontak_pic'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});
