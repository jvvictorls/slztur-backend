import { Request, Response } from "express";
import SpotsService from "../service/spots.service";
import mapStatusHTTP from "../utils/mapHttpStatus";

class SpotsController {
  constructor(
    private spotsService = new SpotsService()
  ) {}

  async findAll(_req: Request, res: Response) {
  const {status, data} = await this.spotsService.findAll();
  if(status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json(data);
  }
  return res.status(200).json(data);

  }

  async findOne(req: Request, res: Response) {
    const {id} = req.params;
    const {status, data} = await this.spotsService.findOne(Number(id));
    if(status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data);
    }
    return res.status(200).json(data);
  }
} 

export default SpotsController;