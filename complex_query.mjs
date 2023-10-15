import { MongoClient } from "mongodb";

function comb(cursorArr, arr){
    if(arr.length == 0){
        return cursorArr.map(obj=>obj.prediction_key);
    }
    const newArr = new Set(cursorArr.map(obj=>obj.prediction_key));
    const retArr= arr.filter(pk => newArr.has(pk));
    return retArr;
}

var finalArr = [];
const uri = "mongodb+srv://admin:0JervgKleBbk89bH@cluster0.btyfgk7.mongodb.net/";
const client = new MongoClient(uri);

// Get the database and collection on which to run the operation
const database = client.db("task1");

// temperature filter
var coll = database.collection("temperature");
var min, max; 
var query = {temperature:{$lt:9999, $gt:0}};
var cursor = coll.find(query); 
var tempArr = await cursor.toArray();
finalArr = comb(tempArr, finalArr);
// bin filter
coll = database.collection("bin");
query = {bin:{$eq:true}};
cursor = coll.find(query); 

// color filter
coll = database.collection("color");
var c = "yellow";
query = {color:{$eq:c}};
cursor = coll.find(query); 
tempArr = await cursor.toArray();
finalArr = comb(tempArr, finalArr);
// composition filter
coll = database.collection("composition");
var fil = ['one', 'three']
query = {composition:{$all:fil}};
cursor = coll.find(query); 

// composition size filter
coll = database.collection("composition");
var size = 4;
for (let i=0; i<size; i++){
    query = {composition:{$size:i}};
    cursor = coll.find(query); 
}

// pressure filter
coll = database.collection("pressure");
min, max; 
query = {presure:{$lt:max, $gt:min}};
cursor = coll.find(query); 

// rainrate filter
coll = database.collection("rainRate");
min, max; 
query = {rainRate:{$lt:max, $gt:min}};
cursor = coll.find(query); 

console.log(finalArr);
// Print result
// for await (const doc of cursor) {
//     console.log(doc);
// }
await client.close();
await cursor.close();