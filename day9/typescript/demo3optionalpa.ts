//function disp_details(id:number,name:string, mail_id?:string) {
function disp_details(id:number,name:string, mail_id:string = "defaultemail") {    //we can give default value
console.log("ID:",id);
console.log("Name",name);

//if(mail_id!=undefined)
console.log("Email Id", mail_id);
}
disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");

