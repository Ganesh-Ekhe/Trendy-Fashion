const bcrypt = require('bcryptjs');
const userModel = require('../../models/userModel');
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password", error: true, success: false });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found", error: true, success: false });
        }

        const checkPassword = await bcrypt.compare(password, user.password);
        console.log("checkPassword", checkPassword);

        if (!checkPassword) {
            return res.status(401).json({ message: "Invalid password", error: true, success: false });
        }

        // ✅ Token Generate
        const tokenData = {
            _id: user._id,
            email: user.email,
        };
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: "8h" });

        // ✅ Cookie Options (Cross-Origin Allow करण्यासाठी)
        const tokenOptions = {
            httpOnly: true,
            secure: true,   // Render वर HTTPS असल्याने Secure True ठेवावं लागतं
            sameSite: "none" // Frontend आणि Backend वेगळ्या डोमेनवर असल्याने आवश्यक आहे
        };

        res.cookie("token", token, tokenOptions).status(200).json({
            message: "Login successful",
            data: { token },
            success: true,
            error: false
        });

    } catch (err) {
        res.status(500).json({ message: err.message || "Internal Server Error", error: true, success: false });
    }
}

module.exports = userSignInController;
