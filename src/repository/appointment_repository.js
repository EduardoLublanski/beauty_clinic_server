import connection from "./connection.js";

export async function create(appointment) {
    let query = "INSERT INTO appointment (appointment_datetime, client_cpf, esthetician_cpf) VALUES (?, ?, ?)";
    let params = [appointment.appointment_datetime, appointment.client_cpf, appointment.esthetician_cpf];
    let [rows] = await connection.execute(query, params);

    return rows;
}

export async function findById(id) {
    let query = "SELECT * FROM appointment WHERE id = ?";
    let params = [id];
    let [rows] = await connection.execute(query, params);

    return rows;
}

export async function update(id, appointment_datetime, status, esthetician_cpf) {
    console.log("repo status: "+status)
    let query = "UPDATE appointment SET appointment_datetime = ?, esthetician_cpf = ?, status = ? WHERE id = ?";
    let params = [appointment_datetime, esthetician_cpf, status, id];
    let [rows] = await connection.execute(query, params);

    return rows;
}

export async function deleteAppointment(id) {
    let query = "DELETE FROM appointment WHERE id = ?";
    let params = [id];
    let [rows] = await connection.execute(query, params);

    return rows;
}

export async function findAll() {
    let query = "SELECT * FROM appointment";
    let [rows] = await connection.query(query);

    return rows;
}