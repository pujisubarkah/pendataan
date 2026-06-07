import { eq } from 'drizzle-orm'
import { db, inovasi } from '../../db'

export default defineEventHandler(async (event) => {
  try {
    const id = parseInt(event.context.params?.id as string)
    if (isNaN(id)) throw createError({ statusCode: 400, statusMessage: 'ID tidak valid' })

    const body = await readBody(event)
    // Update timestamp
    body.updatedAt = new Date()

    const data = await db.update(inovasi)
      .set(body)
      .where(eq(inovasi.id, id))
      .returning()
    
    if (!data.length) throw createError({ statusCode: 404, statusMessage: 'Data inovasi tidak ditemukan' })

    return { success: true, message: 'Data inovasi berhasil diperbarui', data: data[0] }
  } catch (error: any) {
    if (error.statusCode) throw error
    console.error('Error updating inovasi:', error)
    throw createError({ statusCode: 500, statusMessage: 'Gagal memperbarui data inovasi' })
  }
})
