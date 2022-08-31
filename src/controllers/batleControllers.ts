import joi from "joi";
import connection from "../databases/postgres";
import { Request, Response } from "express";
import { batleRepository} from "../repositories/batleRepository";

export async function initBatle(req: Request, res: Response) {

const { firstUser, secondUser } : {firstUser: string, secondUser: string} = req.body;


    const result = await batleRepository.lookingUsers(firstUser,secondUser)

    return res.status(200).send(result);
}
