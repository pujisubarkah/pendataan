import { db, instansi } from '../../db'

export default defineEventHandler(async (event) => {
  try {
    // Mengambil semua data dari tabel instansi
    const data = await db.select().from(instansi)

    return {
      success: true,
      data: data
    }
  } catch (error) {
    console.error('Error fetching instansi data:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Gagal mengambil data instansi'
    })
  }
})
