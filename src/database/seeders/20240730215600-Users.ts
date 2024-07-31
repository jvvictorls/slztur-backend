import {
  QueryInterface,
} from 'sequelize';
import IUsers from '../../interfaces/Users/IUsers'

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        email: '',
        password: 'admin',
        role: 'admin'
      },
      {
        name: 'user',
        email: '',
        password: 'user',
        role: 'user'
      },
      {
        name: 'superadmin',
        email: '',
        password: 'superadmin',
        role: 'superadmin'
      }
    ])
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {}, {})
  }
}