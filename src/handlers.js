const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig);

async function createUser(userData) {
    try {
      await knex('users').insert(userData);
      console.log('Usuario creado exitosamente');
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  }
  