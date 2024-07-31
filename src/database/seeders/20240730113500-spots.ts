import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('spots', [
    {
      name: 'Praia do araçagy',
      description:'lorem ipsum',
      city: 'São Luís',
      type: 'Praia',
      tips: 'lorem ipsum',
      image: 'https://fakedirectory.com/fakeimage.jpg'
    }
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('spots', {}, {});
  }
}