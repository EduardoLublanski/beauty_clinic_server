import express from "express";
import * as packRepository from "../repository/pack_repository.js"

const packEndPoints = express.Router();
const packURI = '/pack';

packEndPoints.post(packURI+'/register', async (request ,response) => {
    let pack = {
        session_id: request.body.session_id,
        treatment_id: request.body.treatment_id,
    }

    let repositoryResponse = await packRepository.create(pack)

    response.send(repositoryResponse);
})

packEndPoints.get(packURI+'/:treatment_id', async (request, response) => {

    let id = request.params.treatment_id

    let repositoryResponse = await packRepository.findById(treatment_id);

    return response.send(repositoryResponse);

})

packEndPoints.get(packURI, async (request, response) => {
    let repositoryResponse = await packRepository.findAll();

    return response.send(repositoryResponse);

})
packEndPoints.delete(packURI+'/delete/:treatment_id', async (request, response) => {

    let treatment_id = request.params.treatment_id

    let repositoryResponse = await packRepository.deletePack(treatment_id);

    return response.send(repositoryResponse);
})

export default packEndPoints;