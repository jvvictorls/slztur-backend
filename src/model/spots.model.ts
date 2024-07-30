import SequelizeSpots from "../database/models/SequelizeSpots";
import ISpot from "../interfaces/Spots/ISpot";
import ISpotsModel from "../interfaces/Spots/ISpotsModel";

class SpotsModel implements ISpotsModel{  
  private model = SequelizeSpots;
  
  async findAll(): Promise<ISpot[]> {
    const dbData = await this.model.findAll();
    return dbData;
  }
  
  async findOne(id: number): Promise<ISpot | null> {
    const dbData = await this.model.findByPk(id);
    if (!dbData) {
      return null;
    }
    return dbData;
  }
  
  create(spot: ISpot): Promise<ISpot> {
    throw new Error("Method not implemented.");
  }
  
  update(id: number, spot: ISpot): Promise<ISpot | null> {
    throw new Error("Method not implemented.");
  }
  
  delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  } 

}

export default SpotsModel;
