import {ConnectionOptions} from "typeorm";

const srcConfig =  [
     "src/entities/**/*.ts"
   ]
 
 const distConfig = [
     "dist/entities/**/*.js"
   ]

export default {
    "type": "mysql",
    "host": 'mysql',
    "port": 3306,
    "username": "admin",
    "password": "Admin@123",
    "database": "test",
    "synchronize": false,
    "logging": true,
    "entities": process.env.TS_NODE ? srcConfig: distConfig,
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
 } as ConnectionOptions;