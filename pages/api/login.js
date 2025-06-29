export default function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    const { username, password } = req.body;

    if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
    ) {
        // You can set a cookie or session here
        return res.status(200).json({ success: true });
    } else {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
}
