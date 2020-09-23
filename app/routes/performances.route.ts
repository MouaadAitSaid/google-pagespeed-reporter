import express, { Router } from "express";
const prefix = '/performances';
const router: Router = express.Router();
import  performancesHandler  from '../handlers/performances.handler';

router.get(prefix, performancesHandler);

export default router;