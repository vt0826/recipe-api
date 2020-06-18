/**
 * RecipesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: function (req, res) {
    Recipes.find({}).exec(function (err, recipes) {
      if (err) {
        res.send(500, { error: "Database Error" });
      }
      res({ recipes });
    });
  },
  create: function (req, res) {
    const { name, title, description, steps } = req.body.recipe;
    Recipes.create({ name, title, description, steps }).exec(function (err) {
      if (err) {
        res.send(500, { error: "Database Error" });
      }
      res.send(200, { message: "Recipe Created" });
    });
  },
  delete: function (req, res) {
    console.log("deleted");
    const id = req.params.id;
    Recipes.destroy(id).exec(function (err) {
      if (err) {
        res.send(500, { error: "Database Error" });
      }
      res.send(200, { message: "Recipe Deleted" });
    });
  },
};
