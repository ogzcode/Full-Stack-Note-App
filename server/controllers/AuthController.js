import User from "../model/User.js";

export const SignIn = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({ name, email, password });

        res.json({
            status: 'success',
            message: 'User created successfully',
        });
    }
    catch (err) {
        if (err.code === 'P2002') {
            return res.json({ error: 'Email already in use' });
        }

        res.json({ error: err.message });
    }
};

export const Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findUnique({ email });

        if (!user) {
            return res.json({ error: 'Invalid email or password' });
        }

        if (user.password !== password) {
            return res.json({ error: 'Invalid email or password' });
        }

        res.json({
            status: 'success',
            message: 'User logged in successfully',
            user
        });
    }
    catch (err) {
        res.json({ error: err.message });
    }
};