const ormconfig: any = {
    "type": "mysql",
    "host": "localhost",
    "port": process.env.MYSQL_PORT,
    "username": "root",
    "password": "LogicaBeans@123",
    "database": "test",
    "synchronize": true,
    "logging": false,
    "entities": [
       "src/**/**.entity{.ts,.js}"
    ],
    "migrations": [
       "src/migration/**/*.ts", 
       "./migration/**/*.js"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts", 
       "./subscriber/**/*.js"
    ],
    "cli": {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
 }

 export default ormconfig;