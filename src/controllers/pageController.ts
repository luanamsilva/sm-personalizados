import { Request, Response } from "express";
import {Product} from '../models/product';
import { createdMenuObject } from "../helpers/createdMenuObjects";

export const home = (req: Request, res:Response) =>{
let list = Product.getAll();
res.render('pages/page',{
  menu: createdMenuObject('all'),
  banner: {
    background: 'bannerprincipal.jpeg'
  },
  list
}

);
}

export const fullParty = (req: Request, res:Response) =>{
  let list = Product.getFromType('fullParty')
res.render('pages/page', {
  menu: createdMenuObject('fullParty'),
  banner: {
    background: 'festacompletatiktok.jpeg'
  },list
})
}

export const stationary = (req: Request, res:Response) =>{
  let list = Product.getFromType('stationary')
  res.render('pages/page', {
    menu: createdMenuObject('stationary'),
    banner: {
      background: 'bannerpapelaria.jpg'
    }, list
  })
  }

export const lux = (req: Request, res:Response) =>{
  let list = Product.getFromType('lux')
  res.render('pages/page', {
    menu: createdMenuObject('lux'),
    banner: {
      background: 'bannerpersonalizadosluxo.jpg'
    }, list
  })
  }

export const kitkat = (req: Request, res:Response) =>{
  let list = Product.getFromType('kitkat')
  res.render('pages/page', {
    menu: createdMenuObject('kitkat'),
    banner: {
      background: 'bannerkitkat.jpeg'
    }, list
  })
  }

export const specials = (req: Request, res:Response) =>{
  let list = Product.getFromType('specials')
  res.render('pages/page', {
    menu: createdMenuObject('specials'),
    banner: {
      background: 'caixasespeciais.jpg'
    }, list
  })
  }