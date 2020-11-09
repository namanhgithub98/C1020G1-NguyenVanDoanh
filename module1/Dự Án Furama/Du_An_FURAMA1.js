function furama() {
    // alert("Họ tên: " +name
    //     + "\nEmail: " + email
    //     + "\nCMND: " + cmnd)
    // let a;
    let name= document.getElementById(name);
    let idcadr= document.getElementById(ID);
    let birthday= document.getElementById(birth);
    let email= document.getElementById(email);
    let address= document.getElementById(add);
    let rentdays= document.getElementById(rent);
    let customrank= document.getElementById(cusrank);
    let typeroom= document.getElementById(typeRoom);

    document.getElementById(name).innerHTML= result;
    document.getElementById(id).innerHTML= idcadr.value;
    document.getElementById(birth).innerHTML= birthday.value;
    document.getElementById(email).innerHTML= email.value;
    document.getElementById(add).innerHTML= address.value;
    document.getElementById(rent).innerHTML= rentdays.value;
    document.getElementById(cusrank).innerHTML= customrank.value;
//     if (typeService=="Villa"){
//         switch (typeCustomer) {
//             case "Diamond":
//                 a=500*rentDays*(1-15/100);
//                 break;
//             case "Platinum":
//                 a=500*rentDays*(1-10/100);
//                 break;
//             case "Gold":
//                 a=500*rentDays*(1-5/100);
//                 break;
//             case "Silver":
//                 a=500*rentDays*(1-2/100);
//                 break;
//             case  "Member":
//                 a=500*rentDays;
//         }
//     } else if(typeService=="House"){
//         switch (typeCustomer) {
//             case "Diamond":
//                 a=300*rentDays*(1-15/100);
//                 break;
//             case "Platinum":
//                 a=300*rentDays*(1-10/100);
//                 break;
//             case "Gold":
//                 a=300*rentDays*(1-5/100);
//                 break;
//             case "Silver":
//                 a=300*rentDays*(1-2/100);
//                 break;
//             case  "Member":
//                 a=300*rentDays;
//         }
//     } else if(typeService=="Room"){
//         switch (typeCustomer) {
//             case "Diamond":
//                 a=100*rentDays*(1-15/100);
//                 break;
//             case "Platinum":
//                 a=100*rentDays*(1-10/100);
//                 break;
//             case "Gold":
//                 a=100*rentDays*(1-5/100);
//                 break;
//             case "Silver":
//                 a=100*rentDays*(1-2/100);
//                 break;
//             case  "Member":
//                 a=100*rentDays;
//         }
//     }
// }