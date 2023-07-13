// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
let _db


const mongoConnect = (callback) =>{
    MongoClient.connect('mongodb+srv://itsankitagarwal000:ue81cEh5VX04rXkb@cluster0.fnbw3nv.mongodb.net/?retryWrites=true&w=majority')
    .then(client =>{
      console.log('connected')
      _db=client.db()
      callback(client)
    })
    .catch(err =>{
      console.log(err)
    })
    
}

const getDb =()=>{
  if(_db){
    return _db
  }
  throw ' no db found'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb