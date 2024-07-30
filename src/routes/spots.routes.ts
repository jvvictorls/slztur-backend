import { Router } from "express";
import SpotsController from "../controller/spots.controller";

const routes = Router();
const spotsModel = new SpotsController();

routes.get('/', async (req, res) => spotsModel.findAll(req, res));

routes.get('/:id', async (req, res) => spotsModel.findOne(req, res));

export default routes;