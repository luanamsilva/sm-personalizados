type ProductType = 'fullParty' | 'stationary' | 'lux' | 'specials' | 'kitkat';

type Product = {
  type: ProductType,
  image: string,
  name: string,
  theme: string,
  genre: 'Infantil' | 'Unissex'
}

const data: Product[] = [
  {
    type: 'fullParty',
    image: 'festacompletatiktok.jpeg',
    name: 'Festa Completa',
    theme: 'Tik-Tok',
    genre: 'Infantil'
  },
  {
      type: 'fullParty',
      image: 'festacompletabatizado.jpeg',
      name: 'Festa Completa',
      theme: 'Batizado',
      genre: 'Infantil'
  },
  {
    type: 'stationary',
    image: 'papelariasuperheroi2.jpg',
    name: 'Papelaria - Batman 1',
    theme: 'Super-Herói',
    genre: 'Infantil'
},
{
  type: 'stationary',
  image: 'papelaria2superheroi.jpg',
  name: 'Papelaria - Batman 2',
  theme: 'Super-Herói',
  genre: 'Infantil'
},
{
  type: 'stationary',
  image: 'papelariasuperheroi.jpg',
  name: 'Papelaria - Homem de Ferro',
  theme: 'Super-Herói',
  genre: 'Infantil'
},
{
  type: 'stationary',
  image: 'papelariasafari.jpg',
  name: 'Papelaria - Safari 1',
  theme: 'Safari',
  genre: 'Infantil'
},

{
  type: 'stationary',
  image: 'papelariasafari1.jpg',
  name: 'Papelaria - Safari 2',
  theme: 'Safari',
  genre: 'Infantil'
},

{
  type: 'stationary',
  image: 'papelarianatal.jpeg',
  name: 'Papelaria - Natal',
  theme: 'Natal',
  genre: 'Unissex'
},

{
  type: 'lux',
  image: 'batata1superheroi.jpg',
  name: 'Batata pringles - Thor',
  theme: 'Super-Herói',
  genre: 'Infantil'
},

{
  type: 'lux',
  image: 'batata2superheroi.jpg',
  name: 'Batata pringles - Super Homem',
  theme: 'Super-Herói',
  genre: 'Infantil'
},

{
  type: 'lux',
  image: 'batata3superheroi.jpg',
  name: 'Batata pringles - Batman',
  theme: 'Super-Herói',
  genre: 'Infantil'
},
{
  type: 'lux',
  image: 'batata6superheroi.jpg',
  name: 'Batata pringles - Capitão América',
  theme: 'Super-Herói',
  genre: 'Infantil'
},

{
  type: 'lux',
  image: 'batata4safari.jpg',
  name: 'Batata pringles - Safari',
  theme: 'Safari',
  genre: 'Infantil'
},
{
  type: 'lux',
  image: 'batatasafari.jpg',
  name: 'Batata pringles - Safari 2',
  theme: 'Safari',
  genre: 'Infantil'
},


{
  type: 'lux',
  image: 'batatafundomar.jpeg',
  name: 'Batata pringles - Fundo do mar',
  theme: 'Fundo do Mar',
  genre: 'Infantil'
},
{
  type: 'lux',
  image: 'batatanatal.jpeg',
  name: 'Batata pringles - Natal',
  theme: 'Natal',
  genre: 'Unissex'
},
{
  type: 'lux',
  image: 'caixacenariofundomar1.jpeg',
  name: 'Caixa cenário - concha',
  theme: 'Fundo do Mar',
  genre: 'Infantil'
},
{
  type: 'lux',
  image: 'caixacenariofundomar2.jpeg',
  name: 'Caixa cenário - Sereia',
  theme: 'Fundo do Mar',
  genre: 'Infantil'
},

{
  type: 'lux',
  image: 'caixacenariosafari1.jpg',
  name: 'Caixa cenário - Safari com plumas',
  theme: 'Safari',
  genre: 'Infantil'
},

{
  type: 'lux',
  image: 'nutellasafari.jpg',
  name: 'Nutella - Safari - Leão',
  theme: 'Safari',
  genre: 'Infantil'
},
{
  type: 'lux',
  image: 'nutellasuperheroi.jpg',
  name: 'Nutella - Super Herói - Hulk',
  theme: 'Safari',
  genre: 'Infantil'
},

{
  type: 'lux',
  image: 'caixaduplafundomar.jpeg',
  name: 'Caixa dupla - Peixe e estrela',
  theme: 'Fundo do Mar',
  genre: 'Infantil'
},
{
  type: 'specials',
  image: 'caixasepeciais2.jpg',
  name: 'Caixa Especial - Safari com Jipe',
  theme: 'Safari',
  genre: 'Infantil'
},
{
  type: 'specials',
  image: 'caixasespeciais.jpg',
  name: 'Caixa Especial - Safari com Leão',
  theme: 'Safari',
  genre: 'Infantil'
},
{
  type: 'specials',
  image: 'caixasespeciaissafari.jpg',
  name: 'Caixa Especial - Safari com Zebra',
  theme: 'Safari',
  genre: 'Infantil'
},
{
  type: 'specials',
  image: 'caixasepeciaisbatizado.jpeg',
  name: 'Caixa Especial - Cálice',
  theme: 'Batizado',
  genre: 'Infantil'
},
{
  type: 'specials',
  image: 'caixasespeciaissuperheroi.jpg',
  name: 'Caixa Especial - Super Homem',
  theme: 'Super Herói',
  genre: 'Infantil'
},
{
  type: 'specials',
  image: 'caixasespeciaissuperheroi2.jpg',
  name: 'Caixa Especial - Thor',
  theme: 'Super Herói',
  genre: 'Infantil'
},

{
  type: 'specials',
  image: 'caixacenarionatal.jpeg',
  name: 'Caixa Especial - Natal',
  theme: 'Natal',
  genre: 'Unissex'
},
{
  type: 'kitkat',
  image: 'kitkatbatizado.jpeg',
  name: 'Kit Kat - Batizado com nome',
  theme: 'Batizado',
  genre: 'Infantil'
},
{
  type: 'kitkat',
  image: 'kitkatsafari.jpg',
  name: 'Kit Kat - Safari com nome',
  theme: 'Safari',
  genre: 'Infantil'
},

{
  type: 'kitkat',
  image: 'kitkatsuperheroi.jpg',
  name: 'Kit Kat - Super Herói com nome',
  theme: 'Safari',
  genre: 'Infantil'
}
];
export const Product = {
getAll: (): Product[] => {
  return data;
},
getFromType: (type: ProductType): Product[] => {
return data.filter(item=> item.type === type);
},

getFromName: (name:string): Product[] =>{
  return data.filter(item=>item.name.toLowerCase().indexOf(name.toLowerCase())> -1);
  
  }
};


