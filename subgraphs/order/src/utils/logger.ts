import winston from "winston";

class Logger {
  
  winston : winston.Logger;
  static _instance: any;
  constructor() {
    
    if (Logger._instance) {
      return Logger._instance
    }
    Logger._instance = this;

    this.winston = winston.createLogger({
      level: "info",
      format: winston.format.json(),
      defaultMeta: { service: "user-service" },
      transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
      ],
    });
    // ... Your rest of the constructor code goes after this
  }
}


export default new Logger().winston;