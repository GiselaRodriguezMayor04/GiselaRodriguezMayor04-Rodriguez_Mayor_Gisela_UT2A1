const db = require('./db');
const helper = require('../helper');
const { Select } = require('@mui/material')

async function insertData(req, res) {
    const data = req.query;

    const query = `INSERT INTO coleccion (nombre, marca, tipo, precio) VALUES (?, ?, ?, ?)`;
    const values = [data.nombre, data.marca, data.tipo, data.precio];
    const result = await db.query(query, values);

    return result.affectedRows;
}

async function getData(req, res) {
    const rows = await db.query(`
        SELECT * FROM coleccion
    `);
    const data = helper.emptyOrRows(rows);
    return {
        data
    };
}

async function deleteData(req, res) {
    const data = req.query;
    const result = await db.query(
        `DELETE FROM coleccion WHERE id = ${data.id}`
    );
    return result.affectedRows;
}

module.exports = {
    getData,
    insertData,
    deleteData
};

