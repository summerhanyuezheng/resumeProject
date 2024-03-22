const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB URI 
//password:000000abcde
//database:resume-contact
const uri = "mongodb+srv://summersleepy69:000000abcde@cluster0.lhktm7o.mongodb.net/resume-contact?retryWrites=true&w=majority&appName=Cluster0";


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Create a new MongoClient
const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1
});

// Connect to MongoDB
client.connect(err => {
  if (err) {
    console.error('MongoDB connection error:', err);
    process.exit();
  }
});


// Once connected, use the client to access the database
const db = client.db('resume-contact');
const contactsCollection = db.collection('contactList');
console.log("connected")



// API endpoint to send a message
app.post('/send-message', async (req, res) => {
  console.log('Received request:', req.body); 
  try {
    // Instead of creating a new instance of a Mongoose model, insert directly into the collection
    const result = await contactsCollection.insertOne(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});