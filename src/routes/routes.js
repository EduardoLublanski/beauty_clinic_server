import clientEndPoints from "../controller/client_controller.js";
import estheticianEndPoints from "../controller/esthetician_controller.js";
import treatmentEndPoints from "../controller/treatment_controller.js";
import appointmentEndPoints from "../controller/appointment_controller.js";
import packEndPoints from "../controller/pack_controller.js";
import sessionEndPoints from "../controller/session_controller.js";

export default function tieControllersToServer(serverRoute, server){
    server.use(serverRoute, clientEndPoints);
    server.use(serverRoute, estheticianEndPoints);
    server.use(serverRoute, treatmentEndPoints);
    server.use(serverRoute, appointmentEndPoints);
    server.use(serverRoute, packEndPoints);
    server.use(serverRoute, sessionEndPoints);
}