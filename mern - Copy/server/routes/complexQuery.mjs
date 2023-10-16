import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import React, { useState } from "react";

const router = express.Router();

function comb(cursorArr, arr){
    if(arr.length == 0){
        return cursorArr.map(obj=>obj.prediction_key);
    }
    const newArr = new Set(cursorArr.map(obj=>obj.prediction_key));
    const retArr= arr.filter(pk => newArr.has(pk));
    return retArr;
}

var finalArr = [];

// This section will help you get a list of all the records.
// router.get("/", async (req, res) => {
//   // mass filter 
//   let collection = await db.collection("mass");
//   let query = {}
//   let results = await collection.find(query).toArray();
//   finalArr = comb(results, finalArr);

//   collection = await db.collection("temperature");
//   query = {}
//   results = await collection.find(query).toArray();
//   finalArr = comb(results, finalArr);

//   collection = await db.collection("color");
//   query = {}
//   results = await collection.find(query).toArray();
//   finalArr = comb(results, finalArr);

//   collection = await db.collection("composition");
//   query = {}
//   results = await collection.find(query).toArray();
//   finalArr = comb(results, finalArr);

//   collection = await db.collection("composition");
//   query = {}
//   results = await collection.find(query).toArray();
//   finalArr = comb(results, finalArr);

//   collection = await db.collection("pressure");
//   query = {}
//   results = await collection.find(query).toArray();
//   finalArr = comb(results, finalArr);

//   collection = await db.collection("bin");
//   query = {}
//   results = await collection.find(query).toArray();
//   finalArr = comb(results, finalArr);

//   res.send(finalArr).status(200);
// });
// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
//   let collection = await db.collection("records");
//   let results = await collection.find({}).toArray();
  res.send(finalArr).status(200);
});

// // This section will help you get a single record by id
// router.get("/:id", async (req, res) => {
//   let collection = await db.collection("records");
//   let query = {_id: new ObjectId(req.params.id)};
//   let result = await collection.findOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

// This section will help you create a new record.
router.post("/", async (req, res) => {
//   let newDocument = {
//     name: req.body.name,
//     position: req.body.position,
//     level: req.body.level,
//   };
//   let collection = await db.collection("records");
//   let result = await collection.insertOne(newDocument);
//   res.send(result).status(204);

  let collection = await db.collection("mass");
  let query = {mass:{$lt:req.body.maxMass_, $gt:req.body.minMass_}}
  let results = await collection.find(query).toArray();
  finalArr = comb(results, finalArr);

  collection = await db.collection("temperature");
  query = {temperature:{$lt:req.body.maxTemp_, $gt:req.body.minTemp_}}
  results = await collection.find(query).toArray();
  finalArr = comb(results, finalArr);

  collection = await db.collection("color");
  query = {color:{$eq:req.body.color_}}
  results = await collection.find(query).toArray();
  finalArr = comb(results, finalArr);

  collection = await db.collection("composition");
  const origString = req.body.composition_.replace(/\s/g, '')
  const compArray = origString.split(',')
  query = {composition:{$all:compArray}}
  results = await collection.find(query).toArray();
  finalArr = comb(results, finalArr);

  collection = await db.collection("composition");
  let tempArray=[]
  for (let i=0; i<req.body.complength_;i++){
    query = {composition:{$size:i}};
    results = await collection.find(query).toArray();
    tempArray.push(results);
  }
  finalArr = comb(results, finalArr);

  collection = await db.collection("pressure");
  query = {pressure:{$lt:req.body.maxPress_, $gt:req.body.minPress_}}
  results = await collection.find(query).toArray();
  finalArr = comb(results, finalArr);
  console.log(finalArr)
//   collection = await db.collection("bin");
//   query = {}
//   results = await collection.find(query).toArray();
//   finalArr = comb(results, finalArr);

  res.send(results).status(200);
});

// // This section will help you update a record by id.
// router.patch("/:id", async (req, res) => {
//   const query = { _id: new ObjectId(req.params.id) };
//   const updates =  {
//     $set: {
//       name: req.body.name,
//       position: req.body.position,
//       level: req.body.level
//     }
//   };

//   let collection = await db.collection("records");
//   let result = await collection.updateOne(query, updates);
//   res.send(result).status(200);
// });

// // This section will help you delete a record
// router.delete("/:id", async (req, res) => {
//   const query = { _id: new ObjectId(req.params.id) };

//   const collection = db.collection("records");
//   let result = await collection.deleteOne(query);

//   res.send(result).status(200);
// });

export default router;