const knex = require("../database/knex");
const sqliteConnection = require("../database/sqlite")

class MovieNotesController{
    async create(req, res){
        const { title, description, rating, tags } = req.body;
        const user_id = req.user.id;

        const movie_notes_id = await knex("movie_notes").insert({
            title,
            description,
            rating,
            user_id
        });

        const tagsInsert = tags.map(tag_name => {
            return {
                movie_notes_id,
                tag_name,
                user_id
            }
        });

        await knex("movie_tags").insert(tagsInsert);

        return res.json();
    }        

    async show(req, res){
        const {id} = req.params;

        const movie_notes = await knex("movie_notes").where({id}).first();
        const movie_tags = await knex("movie_tags").where({movie_notes_id : id}).orderBy("tag_name");

        return res.json({
            ...movie_notes,
            movie_tags
        });
    }

    async delete(req, res){
        const {id} = req.params;

        //await knex("notes").where({id}).delete();

        const database = await sqliteConnection();
        await database.get("delete from movie_notes where id = (?)", [id]);
        
        

        return res.json();
    }


    async index(req, res){
        const {title, user_id, movie_tags} = req.query;

        let movie_notes;

        if (movie_tags){
            const filterTags = movie_tags.split(',').map(movie_tag => movie_tag.trim());

            movie_notes = await knex("movie_tags")
                .select([
                    "movie_notes.id",
                    "movie_notes.title",
                    "movie_notes.description",
                    "movie_notes.user_id",
                ])
                .where("movie_notes.user_id", user_id)
                .whereLike("movie_notes.title", `%${title}%`)
                .whereIn("tag_name", filterTags)
                .innerJoin("movie_notes", "movie_notes.id", "movie_tags.movie_notes_id")
                .groupBy("movie_notes.id")
                .orderBy("title");
        }
        else{
            movie_notes = await knex("movie_notes")
                .where({user_id})
                .whereLike("title", `%${title}%`)
                .orderBy("title");
        }

        const userTags = await knex("movie_tags").where({ user_id });
        const notesWithTags = movie_notes.map(movie_note => {
            const noteTags = userTags.filter(tag => tag.movie_notes_id === movie_note.id);

            return {
                ...movie_note,
                movie_tags: noteTags
            }
        });

        return res.json(notesWithTags);
    }

}

module.exports = MovieNotesController;