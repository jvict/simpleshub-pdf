import moment from "moment-timezone";

export default class Logger {
  info(message) {
    const timezone = moment.tz("America/Sao_Paulo");
    const timestamp = timezone.format("DD/MM/YYYY HH:mm:ss");
    let template = `[${timestamp}][INFO]: ${message}`;

    console.log(template);
  }

  warn(message) {
    const timezone = moment.tz("America/Sao_Paulo");
    const timestamp = timezone.format("DD/MM/YYYY HH:mm:ss");
    let template = `[${timestamp}][WARN]: ${message}`;

    console.log(template);
  }

  error(message) {
    const timezone = moment.tz("America/Sao_Paulo");
    const timestamp = timezone.format("DD/MM/YYYY HH:mm:ss");
    let template = `[${timestamp}][ERROR]: ${message}`;

    console.log(template);
  }

  debug(message) {
    const timezone = moment.tz("America/Sao_Paulo");
    const timestamp = timezone.format("DD/MM/YYYY HH:mm:ss");
    let template = `[${timestamp}][DEBUG]: ${message}`;
    if (process.env.MODE === "development") {
      console.log(template);
    }
  }
}