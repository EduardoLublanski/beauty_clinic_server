import connection from "./connection.js";

export async function create(session) {
    let query = "INSERT INTO session (session_datetime, appointment_id) VALUES (?, ?)";
    let params = [session.session_datetime, session.appointment_id];
    let [rows] = await connection.execute(query, params);

    return rows;
}
export async function findById(id) {
    let query = "SELECT * FROM session WHERE id = ?";
    let params = [id];
    let [rows] = await connection.execute(query, params);

    return rows;
}
export async function updateDateTime(session_datetime, id){
    let query = "UPDATE session SET session_datetime = ? WHERE id = ?";
    let params = [session_datetime, id];
    let [rows] = await connection.execute(query, params);

    return rows;
}
export async function deleteSession(id) {
    let query = "DELETE FROM session WHERE id = ?";
    let params = [id];
    let [rows] = await connection.execute(query, params);

    return rows;
}
export async function findAll() {
    let query = "SELECT * FROM session";
    let [rows] = await connection.query(query);

    return rows;
}
