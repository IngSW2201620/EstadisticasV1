/**
 * Costumer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
autoPK: false,
  attributes: {
    costumerid: {type: 'integer', primaryKey: true},
  	nombre: {type: 'string'},
    email:{type:'string', email:true},
  	estado:{type:'string'},
    roles: {
      collection: "role",
      through: "costumerrole"
    }
  }

};

