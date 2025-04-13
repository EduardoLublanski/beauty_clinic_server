import connection from './connection.js'

export async function create(esthetician) {
    let query = "INSERT INTO esthetician (cpf, first_name, last_name, specialty) VALUES (?, ?, ?, ?)";
    let params = [esthetician.cpf, esthetician.first_name, esthetician.last_name, esthetician.specialty];
    let [rows] = await connection.execute(query, params);

    return rows;
}

export async function findByCpf(cpf) {
    let query = "SELECT * FROM esthetician WHERE cpf = ?";
    let params = [cpf];
    let [rows] = await connection.execute(query, params);

    return rows;
}
export async function update(cpf, specialty) {
    let query = "UPDATE esthetician SET specialty = ? WHERE cpf = ?";
    let params = [specialty, cpf];
    let [rows] = await connection.execute(query, params);

    return rows;
}
export async function deleteEsthetician(cpf) {
    let query = "DELETE FROM esthetician WHERE cpf = ?";
    let params = [cpf];
    let [rows] = await connection.execute(query, params);

    return rows;
}
export async function findAll() {
    let query = "SELECT * FROM esthetician";
    let [rows] = await connection.query(query);

    return rows;
}