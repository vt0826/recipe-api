/**
 * Recipes.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: { type: "string", columnName: "_id" },
    title: { type: "string" },
    description: { type: "string" },
    steps: { type: "json", columnType: "array" },
  },
  /*   datastore: default, */
};
