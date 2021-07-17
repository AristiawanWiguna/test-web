	
// import connection
import db from "../config/database.js";
 
// Get All Kontaks
export const getKontaks = (result) => {
    db.query("SELECT * FROM kontak", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Kontak
export const getKontakById = (id, result) => {
    db.query("SELECT * FROM kontak WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Kontak to Database
export const insertKontak = (data, result) => {
    db.query("INSERT INTO kontak SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Kontak to Database
export const updateKontakById = (data, id, result) => {
    db.query("UPDATE kontak SET Nama = ?, No_Handphone = ?, Email = ? WHERE id = ?", [data.Nama, data.No_Handphone, data.Email, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Kontak to Database
export const deleteKontakById = (id, result) => {
    db.query("DELETE FROM kontak WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}