import {
  DataTypes,
  Model,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes
} from 'sequelize';
import db from '.'

class SequelizeSpots extends Model<InferAttributes<SequelizeSpots>, InferCreationAttributes<SequelizeSpots> > {
  declare id: CreationOptional<number>;

  declare name: string;

  declare description: string;

  declare city: String;

  declare tips: string;

  declare image: string;

}

SequelizeSpots.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tips: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize: db,
  modelName: 'spots'
})

export default SequelizeSpots;
