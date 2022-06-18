const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
// const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsRoutes = Router();

const tagsController = new TagsController();

// tagsRoutes.get("/", ensureAuthenticated, tagsController.index);
tagsRoutes.get("/", tagsController.index);


module.exports = tagsRoutes;