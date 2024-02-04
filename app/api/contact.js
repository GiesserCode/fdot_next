export default function handler(req, res) {
    console.log("handler")
    if (req.method === 'POST') {
        const data = req.body
        console.log(data)
        return data
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}