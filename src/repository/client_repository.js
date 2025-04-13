import connection from "./connection.js";

export async function create(client) {
    
    let query = "INSERT INTO client (cpf, first_name, last_name, email, phone, cep, residence_number, how_found_us) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    let params = [client.cpf, client.first_name, client.last_name, client.email, client.phone, client.cep, client.residence_number, client.how_found_us];
    let [rows] = await connection.execute(query, params);

    return rows;

}