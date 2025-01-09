const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { amount, currency } = req.body;

        // Validate the amount
        if (!amount || typeof amount !== 'number' || amount <= 0) {
            return res.status(400).json({ error: 'Invalid amount' });
        }

        try {
            // Create a PaymentIntent with the correct amount
            const paymentIntent = await stripe.paymentIntents.create({
                amount: Math.round(amount), // Assume amount is already in the smallest unit
                currency: currency || 'sek', // Default to SEK if not provided
            });

            res.status(200).json({ clientSecret: paymentIntent.client_secret });
        } catch (error) {
            console.error('Stripe API error:', error.message);
            res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
