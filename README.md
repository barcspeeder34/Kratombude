<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Phenibut HCL Budet</title>
    <link rel="stylesheet" href="style.css">
    <script>
        // JavaScript function to generate a unique Order ID
        function generateOrderID() {
            const orderID = 'PH' + Math.floor(100000 + Math.random() * 900000);
            document.getElementById('orderID').value = orderID;
        }
    </script>
</head>
<body onload="generateOrderID()">
    <h2>Contact Us with Shipping Information</h2>
    <form id="contactForm" action="https://formspree.io/f/mrbgeqaw" method="POST">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>

        <label for="orderID">Order ID</label>
        <input type="text" id="orderID" name="orderID" readonly>

        <label for="address">Address</label>
        <input type="text" id="address" name="address" required>

        <label for="city">City</label>
        <input type="text" id="city" name="city" required>

        <label for="zip">Postal Code</label>
        <input type="text" id="zip" name="zip" required>

        <label for="message">Message</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <button type="submit">Send Message</button>
    </form>
</body>
</html>
