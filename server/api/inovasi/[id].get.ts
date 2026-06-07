import { eq } from 'drizzle-orm'
import { db, inovasi } from '../../db'

export default defineEventHandler(async (event) => {
  try {
    const id = parseInt(event.context.params?.id as string)
    if (isNaN(id)) throw createError({ statusCode: 400, statusMessage: 'ID tidak valid' })

    const data = await db.select().from(inovasi).where(eq(inovasi.id, id)).limit(1)
    
    if (!data.length) throw createError({ statusCode: 404, statusMessage: 'Data inovasi tidak ditemukan' })

    return { success: true, data: data[0] }
  } catch (error: any) {
    if (error.statusCode) throw error
    console.error('Error fetching inovasi by ID:', error)
    throw createError({ statusCode: 500, statusMessage: 'Gagal mengambil data inovasi' })
  }
})
