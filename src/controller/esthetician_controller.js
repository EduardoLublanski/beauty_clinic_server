import express from "express";
import * as estheticianRepository from "../repository/esthetician_repository.js"

const estheticianEndPoints = express.Router();
const estheticianURI = '/esthetician';

estheticianEndPoints.post(estheticianURI+'/register', async (request ,response) => {
    let esthetician = {
        cpf: request.body.cpf,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        specialty: request.body.specialty
    }

    let repositoryResponse = await estheticianRepository.create(esthetician)

    response.send(repositoryResponse);
})

estheticianEndPoints.get(estheticianURI+'/:cpf', async (request, response) => {

    let cpf = request.params.cpf

    let repositoryResponse = await estheticianRepository.findByCpf(cpf);

    return response.send(repositoryResponse);

})

estheticianEndPoints.patch(estheticianURI+'/update/:cpf', async (request, response) => {

    let specialty = request.query.specialty;
    let cpf = request.params.cpf;

    let repositoryResponse = await estheticianRepository.update(cpf, specialty);

    return response.send(repositoryResponse);

})

estheticianEndPoints.delete(estheticianURI+'/delete/:cpf', async (request, response) => {

    let cpf = request.params.cpf

    let repositoryResponse = await estheticianRepository.deleteEsthetician(cpf);

    return response.send(repositoryResponse);

})
estheticianEndPoints.get(estheticianURI, async (request, response) => {

    let repositoryResponse = await estheticianRepository.findAll();

    return response.send(repositoryResponse);

})

export default estheticianEndPoints;