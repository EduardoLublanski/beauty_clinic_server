import clientEndPoints from "../controller/client_controller.js";

export default function tieControllersToServer(serverRoute, server){
    server.use(serverRoute, clientEndPoints);
}