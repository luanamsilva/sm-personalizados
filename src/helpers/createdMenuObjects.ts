type MenuOptions = ''|'all'|'fullParty'|'stationary'|'lux'|'kitkat'|'specials';

export const createdMenuObject = (activeMenu: MenuOptions) =>{
  let returnObject = {
      all: false,
      fullParty: false,
      stationary: false,
      lux: false,
      kitkat: false,
      specials: false
  };
  if(activeMenu !== ''){
    returnObject[activeMenu] = true;
  }
  return returnObject;
}