import winston from "winston";

function Logger(): void {
  this.winston = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
      new winston.transports.File({ filename: "error.log", level: "error" }),
      new winston.transports.File({ filename: "combined.log" }),
    ],
  });
  
  if (this.constructor.instance) {
    return this.constructor.instance;
  }
  this.constructor.instance = this;
}

export default new Logger().winston;
