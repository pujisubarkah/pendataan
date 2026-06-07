import { db, inovasi } from '../../db'

export default defineEventHandler(async (event) => {
  const method = event.node.req.method

  // === HANDLER GET ===
  if (method === 'GET') {
    try {
      const data = await db.select().from(inovasi)
      return { success: true, data }
    } catch (error) {
      console.error('Error fetching inovasi data:', error)
      throw createError({ statusCode: 500, statusMessage: 'Gagal mengambil data inovasi' })
    }
  }

  // === HANDLER POST ===
  if (method === 'POST') {
    try {
      const body = await readBody(event)
      const data = await db.insert(inovasi).values(body).returning()
      
      return { success: true, message: 'Data inovasi berhasil ditambahkan', data: data[0] }
    } catch (error) {
      console.error('Error creating inovasi data:', error)
      throw createError({ statusCode: 500, statusMessage: 'Gagal menyimpan data inovasi' })
    }
  }

  // Jika method bukan GET atau POST
  throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
})
