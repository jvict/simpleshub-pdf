import extractCPFs from "./pdfProcessor.js";
import Logger from "../config/Logger.js";
const logger = new Logger();
import { saveCPFs, getCPFs} from "../config/firebaseConfig.js"

export const postCpf = async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send('Nenhum arquivo foi enviado.');
      }
      const cpfs = await extractCPFs(req.file.path);
      console.log("cpfController ==>>", cpfs)
      await saveCPFs(cpfs)


      logger.info('CPFs extraídos e salvos com sucesso.');
      res.status(200).send('CPFs extraídos e salvos com sucesso.');
    } catch (error) {
      logger.error(`Erro no processamento do PDF: ${error}`);
      res.status(500).send('Erro no processamento do arquivo.');
    }
};
  
export const getCpf = async (req, res) => {
    try {
      const cpfs = await getCPFs();
      logger.info('Foram encontrados');
      res.json(cpfs);
    } catch (error) {
      logger.error(`Erro ao buscar CPFs: ${error}`);
      res.status(500).send('Erro ao buscar CPFs.');
    }
};

