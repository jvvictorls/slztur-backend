import SpotsModel from "../model/spots.model";

class SpotsService {
  constructor(
    private spotsModel: SpotsModel = new SpotsModel()
  ) {}
  
  async findAll() {
    const findAllSpots = await this.spotsModel.findAll();
    if (!findAllSpots) {
      return {status: 'NOT_FOUND', message: 'Spots not found'};
    }
    return {status: 'SUCCESSFUL', data: findAllSpots};
  }

  async findOne(id: number) {
    const findSpot = await this.spotsModel.findOne(id);
    if (!findSpot) {
      return {status: 'NOT_FOUND', message: 'Spot not found'};
    }
    return {status: 'SUCCESSFUL', data: findSpot};
  }
}

export default SpotsService;