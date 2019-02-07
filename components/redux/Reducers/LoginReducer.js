const initialstate={
  user:'AliT',
  loggedin: false,
  room:'S1'
}


export default (state=initialstate,action)=>{
  switch (action.type) {
    case 'EnterUser':
      return {...state,loggedin:true};
      case 'LogOut':
        return {...state,loggedin:false};
    case 'SaveName':
        return {...state,user:action.payload};
    case 'SaveRoom':
        return {...state,room:action.payload};
    default:
      return state;
  }

}
