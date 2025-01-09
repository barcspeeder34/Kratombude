const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { amount, currency } = req.body;

        // Validate the amount: Must be a positive number
        if (!amount || typeof amount !== 'number' || amount <= 0) {
            return res.status(400).json({ error: 'Invalid amount' });
        }

        try {
            // Create a PaymentIntent
            const paymentIntent = await stripe.paymentIntents.create({
                amount: Math.round(amount), // Amount must be in the smallest unit (e.g., öre for SEK)
                currency: currency || 'sek', // Default to SEK if not provided
            });

            res.status(200).json({ clientSecret: paymentIntent.client_secret });
        } catch (error) {
            console.error('Stripe API error:', error.message);
            res.status(500).json({ error: error.message });
        }
    } else {
        // Handle unsupported HTTP methods
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
