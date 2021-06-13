import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body;

        

     const client = await MongoClient.connect('mongodb+srv://kumar:8ugi7mYw6C6DfLs@cluster0.nphze.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupCollection = db.collection('meetups');

   const result = await meetupCollection.insertOne(data);

   client.close();

   res.status(201).json({message: 'meetup inserted'});
    }
}

export default handler;