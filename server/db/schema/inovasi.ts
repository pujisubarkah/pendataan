import { pgTable, integer, smallint, text, timestamp } from 'drizzle-orm/pg-core';

export const inovasi = pgTable('inovasi', {
  id: integer('id').primaryKey(), // int4
  profilId: integer('profil_id'), // int4
  siklus: text('siklus'), // (Type) - menggunakan text sementara, bisa diubah ke enum bila perlu
  judul: text('judul'),
  tahun: smallint('tahun'), // int2
  deskripsi: text('deskripsi'),
  keunggulan: text('keunggulan'),
  kekurangan: text('kekurangan'),
  dampak: text('dampak'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});
