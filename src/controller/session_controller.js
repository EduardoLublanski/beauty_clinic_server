import express from 'express';
import * as sessionRepository from '../repository/session_repository.js';

const sessionEndPoints = express.Router();
const sessionURI = '/session';

sessionEndPoints.post(sessionURI + '/register', async (request, response) => {
    let session = {
        session_datetime: request.body.session_datetime,
        appointment_id: request.body.appointment_id,
    }

    let repositoryResponse = await sessionRepository.create(session);

    response.send(repositoryResponse);
})

sessionEndPoints.get(sessionURI + '/:id', async (request, response) => {
    let id = request.params.id;

    let repositoryResponse = await sessionRepository.findById(id);

    return response.send(repositoryResponse);
})

sessionEndPoints.patch(sessionURI + '/update/:id', async (request, response) => {
    let session_datetime = request.body.session_datetime;
    let id = request.params.id;

    let repositoryResponse = await sessionRepository.update(id, session_datetime);

    return response.send(repositoryResponse);
})

sessionEndPoints.delete(sessionURI + '/delete/:id', async (request, response) => {
    let id = request.params.id;

    let repositoryResponse = await sessionRepository.deleteSession(id);

    return response.send(repositoryResponse);
})

sessionEndPoints.get(sessionURI, async (request, response) => {
    let repositoryResponse = await sessionRepository.findAll();

    return response.send(repositoryResponse);

})

export default sessionEndPoints;