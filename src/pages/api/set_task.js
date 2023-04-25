//export default function handler(req,res){
  //  if(req.method=='GET')
//
//}
import { connectMongodb } from "../../libs/Mongoconnect";
import User from "../../../models/Taskmodel";
import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  export default async function handler(req, res) {
    if (req.method === 'POST') {
      await client.connect()
      const db = client.db(process.env.MONGODB_DB)
      const collection = db.collection('User')}
    }
    let data=[];
    data.push(await collection.find({
        $and:[
            {
                income:{$lt: 5}},
                {
                    $or:[
                        {"car.brand":"BMW"},
                        {"car.brand":"Mercedes"},
                    ]
                }
            
        ]
    }).toArray())

    data.push(await collection.find({
        $and:[
            {
                gender:"Male"},
                {phone:{$gt:10000}
            
                },
            
        ]
    }).toArray())
    

    data.push(await collection.find({
        $and:[
            {lastname:{$regex:/^M/}},
            {$expr:{$gt:[{$strLenCP:"$quote"},15]}},
            {email:{$regex:`.*${lastname}.*`}}

            
        ]
    }).toArray())
    


    data.push(await collection.find({
        $and:[
            
               
                        {"car.brand":{$in:["Audi","BMW","Mercedes"]}},
                        {email:{$regex:/^[^/d]*$/}},
                    ]
                
            
        
    }).toArray())

    data.push(await collection.aggregate([
        {$group:{_id:"$city",count:{$sum:1},avgIncome:{$avg:"$income"}}},
        {$sort:{count: -1}},
        {$limit:10},
    ]
    
    ).toArray())
    
    res.status(200).json(data)