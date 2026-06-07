import { sql } from 'drizzle-orm';
import { db } from './server/db/index.js';

async function run() {
  try {
    console.log('Fixing profil table...');
    await db.execute(sql`CREATE SEQUENCE IF NOT EXISTS profil_id_seq;`);
    await db.execute(sql`ALTER TABLE profil ALTER COLUMN id SET DEFAULT nextval('profil_id_seq');`);
    await db.execute(sql`ALTER SEQUENCE profil_id_seq OWNED BY profil.id;`);
    await db.execute(sql`SELECT setval('profil_id_seq', COALESCE((SELECT MAX(id)+1 FROM profil), 1), false);`);
    
    console.log('Fixing inovasi table...');
    await db.execute(sql`CREATE SEQUENCE IF NOT EXISTS inovasi_id_seq;`);
    await db.execute(sql`ALTER TABLE inovasi ALTER COLUMN id SET DEFAULT nextval('inovasi_id_seq');`);
    await db.execute(sql`ALTER SEQUENCE inovasi_id_seq OWNED BY inovasi.id;`);
    await db.execute(sql`SELECT setval('inovasi_id_seq', COALESCE((SELECT MAX(id)+1 FROM inovasi), 1), false);`);
    
    console.log("Database sequences fixed successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Error fixing db:", err);
    process.exit(1);
  }
}

run();
