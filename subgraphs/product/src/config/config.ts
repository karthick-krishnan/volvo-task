import path from 'path'

const config : any =  {
  "development": {
    "username": "admin",
    "password": "admin",
    "database": "volvo",
    "host": "35.244.14.142",
    "port": "3306",
    "dialect": "mysql",
    "seederStorage": 'sequelize',
    "pool": {
      "max": 5,
      "min": 0,
      "idle": 10000
    }
  }
}




export default config