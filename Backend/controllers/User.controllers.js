import User from "../model/User.model.js";
import bcyrpt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Basic Validation
        if (!username || !email || !password) {
            return res.status(401).json({
                success: false,
                message: "All fields are required"
            })
        }

        const match = await User.findOne({ email });
        if (match) {
            return res.status(401).json({
                success: false,
                message: "User Already Registered"
            })
        }

        const hashPass = await bcyrpt.hash(password, 10);
        const user = new User({
            username: username,
            email: email,
            password: hashPass
        })

        await user.save();

        return res.status(201).json({
            success: true,
            message: "Registration successfull"
        })
    } catch (error) {
        console.log("Error ", error)
        res.status(401).json({
            success: false,
            message: "Error"
        })
    }
}


// Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                success: false,
                message: "All fields are required"
            })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User doesn't exist"
            })
        }

        // match password
        const matchPass = await bcyrpt.compare(password, user.password);

        if (!matchPass) {
            return res.status(401).json({
                success: false,
                message: "Incorrect Password"
            })
        }

        // Setting jwt tokens 
        const tokenData = {
            userId: user._id
        }

        const token = jwt.sign(tokenData, "SECRET_KEY", { expiresIn: "1d" })

        return res.status(201).cookie("token", token, { expiresIn: "1d", httpOnly: true }).json({
            success: true,
            token,
            message: `Welcome back ${user.username}`
        })

    } catch (error) {
        console.log("Error ", error)
        res.status(401).json({
            success: false,
            message: "Error"
        })
    }
}

export { register, login };