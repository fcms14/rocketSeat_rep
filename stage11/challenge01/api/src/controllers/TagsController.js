const knex = require("../database/knex");

class TagsController {
    async index(req, res) {
        const user_id = req.user.id;

        const tags = await knex("tags")
            .where({ user_id })
            .groupBy("name")

        return res.json(tags);

    }
}

module.exports = TagsController;