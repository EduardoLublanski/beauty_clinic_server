import express from "express"
import * as treatmentRepository from "../repository/treatment_repository.js"

const treatmentEndPoints = express.Router();
const treatmentURI = '/treatment';

treatmentEndPoints.post(treatmentURI+'/register', async (request ,response) => {
    
      let name = request.body.name;
        let price = request.body.price;
    

    let repositoryResponse = await treatmentRepository.create(name, price);

    response.send(repositoryResponse);
})

treatmentEndPoints.get(treatmentURI+'/:id', async (request, response) => {

    let id = request.params.id

    let repositoryResponse = await treatmentRepository.findById(id);

    return response.send(repositoryResponse);

})

treatmentEndPoints.patch(treatmentURI+'/update/:id', async (request, response) => {

    let price = request.query.price;
    let id = request.params.id;

    let repositoryResponse = await treatmentRepository.update(id, price);

    return response.send(repositoryResponse);

})

treatmentEndPoints.delete(treatmentURI+'/delete/:id', async (request, response) => {

    let id = request.params.id

    let repositoryResponse = await treatmentRepository.deleteTreatment(id);

    return response.send(repositoryResponse);

})

treatmentEndPoints.get(treatmentURI, async (request, response) => {

    let repositoryResponse = await treatmentRepository.findAll();

    return response.send(repositoryResponse);

})

export default treatmentEndPoints;