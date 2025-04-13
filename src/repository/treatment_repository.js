import connection from "./connection.js"

export async function create(name, price) {

    let query = "INSERT INTO treatment (name, price) VALUES (?, ?)";
    let params = [name, price];
    let [rows] = await connection.execute(query, params);

    return rows;
}

export async function findById(id) {
    let query = "SELECT * FROM treatment WHERE id = ?";
    let params = [id];
    let [rows] = await connection.execute(query, params);

    return rows;
}

export async function update(id, price) {
    let query = "UPDATE treatment SET price = ? WHERE id = ?";
    let params = [price, id];
    let [rows] = await connection.execute(query, params);

    return rows;
}

export async function deleteTreatment(id) {
    let query = "DELETE FROM treatment WHERE id = ?";
    let params = [id];
    let [rows] = await connection.execute(query, params);

    return rows;
}

export async function findAll() {
    let query = "SELECT * FROM treatment";
    let [rows] = await connection.query(query);

    return rows;
}