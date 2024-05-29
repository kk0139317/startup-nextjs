export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        const response = await fetch('http://127.0.0.1:8000/api/signinpage/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            res.status(200).json(data);
        } else {
            res.status(400).json(data);
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}