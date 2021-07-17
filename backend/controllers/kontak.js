// Import function from Kontak Model
import { getKontaks, getKontakById, insertKontak, updateKontakById, deleteKontakById } from "../models/kontakModel.js";
 
// Get All Kontaks
export const showKontaks = (req, res) => {
    getKontaks((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Kontak 
export const showKontakById = (req, res) => {
    getKontakById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Kontak
export const createKontak = (req, res) => {
    const data = req.body;
    insertKontak(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Kontak
export const updateKontak = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateKontakById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Kontak
export const deleteKontak = (req, res) => {
    const id = req.params.id;
    deleteKontakById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}