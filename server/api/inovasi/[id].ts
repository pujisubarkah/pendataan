import { eq } from 'drizzle-orm'
import { db, inovasi } from '../../db'

export default defineEventHandler(async (event) => {
  const method = event.node.req.method
  
  // Parse ID dari URL
  const id = parseInt(event.context.params?.id as string)
  if (isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'ID tidak valid' })
  }

  // === HANDLER GET (Ambil Detail) ===
  if (method === 'GET') {
    try {
      const data = await db.select().from(inovasi).where(eq(inovasi.id, id)).limit(1)
      if (!data.length) throw createError({ statusCode: 404, statusMessage: 'Data inovasi tidak ditemukan' })
      
      return { success: true, data: data[0] }
    } catch (error: any) {
      if (error.statusCode) throw error // Lempar ulang error 404/400
      console.error('Error fetching inovasi by ID:', error)
      throw createError({ statusCode: 500, statusMessage: 'Gagal mengambil data inovasi' })
    }
  }

  // === HANDLER PUT (Update Data) ===
  if (method === 'PUT') {
    try {
      const body = await readBody(event)
      body.updatedAt = new Date() // Perbarui timestamp

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
  }

  // === HANDLER DELETE (Hapus Data) ===
  if (method === 'DELETE') {
    try {
      const data = await db.delete(inovasi)
        .where(eq(inovasi.id, id))
        .returning()
        
      if (!data.length) throw createError({ statusCode: 404, statusMessage: 'Data inovasi tidak ditemukan' })
      return { success: true, message: 'Data inovasi berhasil dihapus', data: data[0] }
    } catch (error: any) {
      if (error.statusCode) throw error
      console.error('Error deleting inovasi:', error)
      throw createError({ statusCode: 500, statusMessage: 'Gagal menghapus data inovasi' })
    }
  }

  // Jika method bukan GET, PUT, atau DELETE
  throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
})
