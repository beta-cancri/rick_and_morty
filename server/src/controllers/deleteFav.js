const { Favorite} = require("../DB_connection");

exports.deleteFav = async (req, res) => {


    try {

        const { id } = req.params;

        if(!id) return res.status(400).json({ error: "ID missing" });

        await Favorite.destroy({
            where: {id}
        });


        const allFavs = await Favorite.findAll();

        return res.status(200).json(allFavs);
        
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}