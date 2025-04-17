const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/newsletter', { useNewUrlParser: true, useUnifiedTopology: true });

const emailSchema = new mongoose.Schema({ email: String });
const Email = mongoose.model('Email', emailSchema);

app.post('/subscribe', (req, res) => {
  const newEmail = new Email({ email: req.body.email });
  newEmail.save()
    .then(() => res.json({ message: 'Subscribed successfully!' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.listen(3000, () => console.log('Server running on port 3000'));