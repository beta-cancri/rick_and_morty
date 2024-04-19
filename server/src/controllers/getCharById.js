const axios  = require("axios");

const URL = `https://rym2.up.railway.app/api/character/`;


exports.getCharById = async (req, res) => {
    try {
        const { id } = req.params;

        const { data } = await axios(`${URL}${id}?key=pi-beta-cancri`);
        console.log("hola")
        if (data) {
            const { id, name, gender, species, origin, image, status } = data;
        
            let character = { id, name, gender, species, origin, image, status };

            return res.status(200).json(character);
        }

        return res.status(404).json({ error: "Not found"});

    }   catch (error) {
        return res.status(500).json(error.message);
    }

};

// exports.getCharById = (req, res) => {

//     const { id } = req.params;
//     axios(`https://rym2.up.railway.app/api/character/${id}?key={pi-beta-cancri}`)
//         .then((resp) => {

//         let { name, gender, species, origin, image, status } = resp.data;

//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status,
//         };

//         return character.name
//             ? res.json(character)
//             : res.status(404).send("Not Found");
//     })

//     .catch((reason) => {
//         return res.status(500).send(reason.message);
//     })
// };