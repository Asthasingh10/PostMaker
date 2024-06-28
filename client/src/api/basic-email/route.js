const express = require('express');
const router = express.Router();
const postmark = require('postmark');
const client = new postmark.ServerClient(process.env.NEXT_PUBLIC_POSTMARK_SERVER_TOKEN);

router.post('/basic-email', (req, res) => {
    const { subject, body } = req.body;
    console.log({subject,body});
     
    client.sendEmail({
        "From": "astha.singh_cs21@gla.ac.in",
        "To": "astha.singh_cs21@gla.ac.in",
        "Subject": subject,
        "TextBody": body
    }).then(response => {
        res.status(200).send(response);
    }).catch(error => {
        res.status(500).send(error);
    });
});

module.exports = router;