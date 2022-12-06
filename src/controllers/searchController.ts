import { Request, Response } from "express";
import { Product } from "../models/product";
import { createdMenuObject } from "../helpers/createdMenuObjects";

export const search = (req: Request, res:Response) =>{
   let query:string = req.query.q as string;

   if(!query){
    res.redirect('/');
    return;
   }

   let list = Product.getFromName(query);
  res.render('pages/page', {
    menu: createdMenuObject(''),
    list,
    query
  }
  );
}