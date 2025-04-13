import express from "express";
import * as appointmentRepository from "../repository/appointment_repository.js"

const appointmentEndPoints = express.Router();
const appointmentURI = '/appointment';

appointmentEndPoints.post(appointmentURI+'/register', async (request ,response) => {
    let appointment = {
        appointment_datetime: request.body.appointment_datetime,
        client_cpf: request.body.client_cpf,
        esthetician_cpf: request.body.esthetician_cpf
    }

    let repositoryResponse = await appointmentRepository.create(appointment)

    response.send(repositoryResponse);
})

appointmentEndPoints.get(appointmentURI+'/:id', async (request, response) => {

    let id = request.params.id

    let repositoryResponse = await appointmentRepository.findById(id);

    return response.send(repositoryResponse);

})

appointmentEndPoints.patch(appointmentURI+'/update/:id', async (request, response) => {

    let appointment_datetime = request.body.appointment_datetime;
    let esthetician_cpf = request.body.esthetician_cpf;
    let status = request.body.status;
    console.log("controller status: "+status);
    let id = request.params.id;

    let repositoryResponse = await appointmentRepository.update(id, appointment_datetime, status,  esthetician_cpf);

    return response.send(repositoryResponse);

})

appointmentEndPoints.delete(appointmentURI+'/delete/:id', async (request, response) => {

    let id = request.params.id

    let repositoryResponse = await appointmentRepository.deleteAppointment(id);

    return response.send(repositoryResponse);

})

appointmentEndPoints.get(appointmentURI, async (request, response) => {

    let repositoryResponse = await appointmentRepository.findAll();

    return response.send(repositoryResponse);

})

export default appointmentEndPoints;