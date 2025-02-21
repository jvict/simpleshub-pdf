import app from "./server.js";
import Logger from "./config/Logger.js";

const logger = new Logger();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Servidor rodando na porta ${PORT}`);
});