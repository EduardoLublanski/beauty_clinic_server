import express from "express"
import * as clientRepository from "../repository/client_repository.js"

const clientEndPoints = express.Router();
const clientURI = '/client';
clientEndPoints.post(clientURI+'/register', async (request ,response) => {

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

clientEndPoints.get(clientURI+'/:cpf', async (request, response) => {

    let cpf = request.params.cpf

    let repositoryResponse = await clientRepository.findByCpf(cpf);

    return response.send(repositoryResponse);

})

clientEndPoints.patch(clientURI+'/update', async (request, response) => {

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

    let repositoryResponse = await clientRepository.update(client);

    return response.send(repositoryResponse);

})
clientEndPoints.delete(clientURI+'/delete/:cpf', async (request, response) => {

    let cpf = request.params.cpf

    let repositoryResponse = await clientRepository.deleteClient(cpf);

    return response.send(repositoryResponse);

})
clientEndPoints.get(clientURI, async (request, response) => {

    let repositoryResponse = await clientRepository.findAll();

    console.log(repositoryResponse[0])

    return response.send(repositoryResponse);

})



export default clientEndPoints;