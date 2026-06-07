import { db, profil } from '../../db'

export default defineEventHandler(async (event) => {
  const method = event.node.req.method

  // === HANDLER GET ===
  if (method === 'GET') {
    try {
      const data = await db.select().from(profil)
      return { success: true, data }
    } catch (error) {
      console.error('Error fetching profil data:', error)
      throw createError({ statusCode: 500, statusMessage: 'Gagal mengambil data profil' })
    }
  }

  // === HANDLER POST ===
  if (method === 'POST') {
    try {
      const body = await readBody(event)
      const data = await db.insert(profil).values(body).returning()
      
      return { success: true, message: 'Data profil berhasil ditambahkan', data: data[0] }
    } catch (error: any) {
      console.error('Error creating profil data:', error)
      return {
        success: false,
        statusCode: 500,
        message: 'Gagal menyimpan data profil',
        error: error.message,
        postgresError: error.cause ? error.cause.message : null,
        stack: error.stack
      }
    }
  }

  throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
})
