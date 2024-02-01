// const RedisStore = require('connect-redis')(session);
const redis = require('ioredis');


// Create a Redis client
const redisClient = redis.createClient({
    host: 'localhost', 
    port: 6379,        
  });

  const obj = {
    "name" : "Brijesh",
    "age": 236
  }

  const obj2 = {
   "class" : 12,
   "name" : "Brijesh",
   "age": 23,
   "test": 2
  }

if(redisClient){
    console.log("Redis server connected sucessfulluy");   
    // redisClient.set("key", "value", (err, res)=>{
    //     console.log(err, res)
    // })
    // redisClient.hmset("key8", obj2, (err, res)=>{
    //     console.log(err, res)
    // });
    // redisClient.hset("key9", obj, (err, res)=>{
    //     console.log(err, res)
    // })
}
 
