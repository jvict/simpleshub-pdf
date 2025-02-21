import express from "express";
import multer from "multer";
import { postCpf, getCpf} from "../controller/cpfController.js";

const routes = express.Router();

const upload = multer({ dest: 'uploads/' });

routes.post('/upload', upload.single('pdf'), postCpf );

routes.get('/cpfs', getCpf);

export default routes;