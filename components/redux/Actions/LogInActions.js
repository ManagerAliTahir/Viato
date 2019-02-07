export const EnterUser = () => {
  return{
    type:'EnterUser'
  }
}

export const LogOut = () => {
  return{
    type:'LogOut'
  }
}

export const SaveName = (name) =>{
  return{
    type:'SaveName',
    payload: name
  }
}

export const SaveRoom = (room) =>{
  return{
    type:'SaveRoom',
    payload: room
  }
}
