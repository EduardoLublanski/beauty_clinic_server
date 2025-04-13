import connection from "./connection.js";

export async function create(pack) {
   let query = "INSERT INTO pack (session_id, treatment_id) VALUES (?, ?)";
   let params = [pack.session_id, pack.treatment_id];

   let [rows] = await connection.execute(query, params);

    return rows;
}

export async function findBySessionId(session_id) {
    let query = "SELECT * FROM pack WHERE session_id = ?";
    let params = [session_id];

    let [rows] = await connection.execute(query, params);

    return rows;
}

export async function deletePack(pack) {
    let query = "DELETE FROM pack WHERE session_id = ? AND treatment_id = ?";
    let params = [pack.session_id, pack.treatment_id];

    let [rows] = await connection.execute(query, params);

    return rows;
}

export async function findAll() {
    let query = "SELECT * FROM pack";
    let [rows] = await connection.query(query);

    return rows;
}