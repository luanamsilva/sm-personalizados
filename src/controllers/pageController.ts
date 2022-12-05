import { Request, Response } from "express";
import { createdMenuObject } from '../helpers/createdMenuObjects'

export const home = (req: Request, res:Response) =>{
res.render('pages/page',{
  menu: createdMenuObject('all'),
  banner: {
    background: 'bannerprincipal.jpeg'
  }
}

);
}

export const fullParty = (req: Request, res:Response) =>{
res.render('pages/page', {
  menu: createdMenuObject('fullParty'),
  banner: {
    background: 'festacompletatiktok.jpeg'
  }
})
}

export const stationary = (req: Request, res:Response) =>{
  res.render('pages/page', {
    menu: createdMenuObject('stationary'),
    banner: {
      background: 'bannerpapelaria.jpg'
    }
  })
  }

export const lux = (req: Request, res:Response) =>{
  res.render('pages/page', {
    menu: createdMenuObject('lux'),
    banner: {
      background: 'bannerpersonalizadosluxo.jpg'
    }
  })
  }

export const kitkat = (req: Request, res:Response) =>{
  res.render('pages/page', {
    menu: createdMenuObject('kitkat'),
    banner: {
      background: 'bannerkitkat.jpeg'
    }
  })
  }

export const specials = (req: Request, res:Response) =>{
  res.render('pages/page', {
    menu: createdMenuObject('specials'),
    banner: {
      background: 'caixasespeciais.jpg'
    }
  })
  }