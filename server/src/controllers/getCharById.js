const axios  = require("axios");

exports.getCharById = (req, res) => {

    const { id } = req.params;
    axios(`https://rym2.up.railway.app/api/character/${id}?key={pi-beta-cancri}`)
    .then((resp) => {

        let { name, gender, species, origin, image, status } = resp.data;

        const character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status,
        };

        return character.name
            ? res.json(character)
            : res.status(404).send("Not Found");
    })

    .catch((reason) => {
        return res.status(500).send(reason.message);
    })
};