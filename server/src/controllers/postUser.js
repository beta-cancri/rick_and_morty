const { User } = require("../DB_connection")

exports.postUser = async (req, res) => {
   

    try {

        const { email, password } = req.body;

        if (!email || !password)
            return res.status(400).json({ error: "Missing data" });

        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: {
                password,
            }
        })

        if (!created) {
            return res.status(409).json({ error: "The email is registered" });
        }

        return res.status(200).json({ created: "sucess", user });

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }

};