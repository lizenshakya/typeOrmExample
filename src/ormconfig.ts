import {ConnectionOptions} from "typeorm";

const srcConfig =  [
     "src/entity/**/*.ts"
   ]
 
 const distConfig = [
     "build/entity/**/*.js"
   ]

const config: ConnectionOptions = {
    "type": "mysql",
    "host": 'localhost',
    "port": 3306,
    "username": "admin",
    "password": "Admin@123",
    "database": "test",
    "synchronize": false,
    "logging": true,
    "entities": srcConfig, //process.env.TS_NODE ? srcConfig: distConfig,
    "migrations": [
       "src/migration/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts" 
    ],
    "cli": {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
 };
 console.log(config, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

 export = config;