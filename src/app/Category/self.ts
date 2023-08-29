

export class Utils {
  userDetails:any
  userData:any
  userRole:any
  constructor() { }
  
  myFn() {
    this.userDetails = atob(document.cookie.split('.')[1]);
    this.userData=JSON.parse(this.userDetails).fullname;
    this.userRole=JSON.parse(this.userDetails).role;
     console.log(this.userRole);
   
  }
}

  
  
