const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY1);


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { amount, currency } = req.body;

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount * 100, // Convert to smallest currency unit
                currency: currency || 'usd',
            });

            res.status(200).json({ clientSecret: paymentIntent.client_secret });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
