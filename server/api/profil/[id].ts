import { eq } from 'drizzle-orm'
import { db, profil } from '../../db'

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
      const data = await db.select().from(profil).where(eq(profil.id, id)).limit(1)
      if (!data.length) throw createError({ statusCode: 404, statusMessage: 'Data profil tidak ditemukan' })
      
      return { success: true, data: data[0] }
    } catch (error: any) {
      if (error.statusCode) throw error
      console.error('Error fetching profil by ID:', error)
      throw createError({ statusCode: 500, statusMessage: 'Gagal mengambil data profil' })
    }
  }

  // === HANDLER PUT (Update Data) ===
  if (method === 'PUT') {
    try {
      const body = await readBody(event)
      body.updatedAt = new Date() // Perbarui timestamp

      const data = await db.update(profil)
        .set(body)
        .where(eq(profil.id, id))
        .returning()
        
      if (!data.length) throw createError({ statusCode: 404, statusMessage: 'Data profil tidak ditemukan' })
      return { success: true, message: 'Data profil berhasil diperbarui', data: data[0] }
    } catch (error: any) {
      if (error.statusCode) throw error
      console.error('Error updating profil:', error)
      throw createError({ statusCode: 500, statusMessage: 'Gagal memperbarui data profil' })
    }
  }

  // === HANDLER DELETE (Hapus Data) ===
  if (method === 'DELETE') {
    try {
      const data = await db.delete(profil)
        .where(eq(profil.id, id))
        .returning()
        
      if (!data.length) throw createError({ statusCode: 404, statusMessage: 'Data profil tidak ditemukan' })
      return { success: true, message: 'Data profil berhasil dihapus', data: data[0] }
    } catch (error: any) {
      if (error.statusCode) throw error
      console.error('Error deleting profil:', error)
      throw createError({ statusCode: 500, statusMessage: 'Gagal menghapus data profil' })
    }
  }

  throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
})
