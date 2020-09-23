import  { Request, Response } from "express";
import ApiExplorer from '../services/ApiExplorer.service';
import performanceFactory from '../factories/performances.factory';

export default async (req: Request, res: Response) => {
    try {
        const results = await ApiExplorer.get();
        const analysis = performanceFactory(results.data);
        return res.send(analysis);
        
    } catch (e) {
        return res.status(500).send(e.toString());
    }
}
