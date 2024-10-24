const cors = require('cors')
const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(express.json())
app.use(cors())

const password = process.env.DB_PASSWORD



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://harshpathakjnp:${password}@codextrian.4trncj2.mongodb.net/?retryWrites=true&w=majority&appName=codextrian`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    //create db
    const db = client.db('mernJobPortal')
    const jobsCollection = db.collection('demoJobs')



    //post a job 
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.creatAt = new Date()
      const result = await jobsCollection.insertOne(body)
      if (result.insertedId) {
        return res.status(200).send(result)
      }
      else {
        return res.status(404).send({
          message: "try again later"
          , status: false
        })
      }
    })


    //get all jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobsCollection.find().toArray()
      res.send(jobs)
    })

    //get single job
    app.get('/all-jobs/:id', async (req, res) => {
      const id = req.params.id
      const job = await jobsCollection.findOne({
        _id: new ObjectId(id)
      })
      res.send(job)
    })

    //delete a job
    app.delete('/job/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const results = await jobsCollection.deleteOne(filter)
      res.send(results)
    })

    // UPDATE A JOB 
    app.patch("/update-job/:id",async (req,res)=>{
      const id = req.params.id
      const jobData = req.body
      const filter = {_id:new ObjectId(id)}
      const options = {upsert :true}
      const updateDoc = {
        $set:{
          ...jobData
        },
      };
      const result = await jobsCollection.updateOne(filter,updateDoc,options)
      res.send(result)
    })

    //get job by email
    app.get("/myJobs/:email", async (req, res) => {
      // console.log(req.params.email)
      const job = await jobsCollection.find({ postedBy: req.params.email }).toArray()
      res.send(job)
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error

  }
}
run().catch(console.dir);





app.get('/', (req, res) => {
  res.send('Hello Harsh!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})