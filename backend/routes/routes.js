// import express
import express from "express";
 
// import function from controller
import { showKontaks, showKontakById, createKontak, updateKontak, deleteKontak } from "../controllers/kontak.js";
 
// init express router
const router = express.Router();
 
// Get All Kontak
router.get('/daftar', showKontaks);
 
// Get Single Kontak
router.get('/daftar/:id', showKontakById);
 
// Create New Kontak
router.post('/buat', createKontak);
 
// Update Kontak
router.put('/ubah/:id', updateKontak);
 
// Delete Kontak
router.delete('/hapus/:id', deleteKontak);
 
// export default router
export default router;