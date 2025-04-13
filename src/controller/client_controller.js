import express from "express"
import * as clientRepository from "../repository/client_repository.js"

const clientEndPoints = express.Router();

clientEndPoints.post('/register', async (request ,response) => {

    let client = {
        cpf: request.body.cpf,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        phone: request.body.phone,
        cep: request.body.cep,
        residence_number: request.body.residence_number,
        how_found_us: request.body.how_found_us
    }

    let repositoryResponse = await clientRepository.create(client)

    response.send(repositoryResponse);

})

export default clientEndPoints;