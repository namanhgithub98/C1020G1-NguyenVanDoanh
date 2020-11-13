// function furama() {
    // alert("Họ tên: " +name
    //     + "\nEmail: " + email
    //     + "\nCMND: " + cmnd)

    function showInfo() {
        // get data from Form
        let fullName = document.getElementById("fullName").value;
        let identityNumber = document.getElementById("identityNumber").value;
        let birthDay = document.getElementById("birthDay").value;
        let email = document.getElementById("email").value;
        let address = document.getElementById("address").value;
        let typeCustomer = document.getElementById("typeCustomer").value;
        let discount = parseInt(document.getElementById("discount").value);
        let amountOfPeople = document.getElementById("amountOfPeople").value;
        let rentDay = parseInt(document.getElementById("rentDay").value);
        let service = document.getElementById("service").value;
        let typeRoom = document.getElementById("typeRoom").value;

        // price list
        const priceVilla = 500;
        const priceHouse = 300;
        const priceRoom = 100;

        //get price of service
        let priceService =
            service == "Villa"
                ? priceVilla
                : service == "House"
                ? priceHouse
                : priceRoom;

        //counting total price
        let totalPrice = priceService * rentDay * (1 - discount / 100.0);

        // show info to screen
        document.writeln("Full Name :            " + fullName + "<br>");
        document.writeln("Identity card Number : " + identityNumber + "<br>");
        document.writeln("Birthday :             " + birthDay + "<br>");
        document.writeln("Email :                " + email + "<br>");
        document.writeln("Address :              " + address + "<br>");
        document.writeln("Type Of Customer :     " + typeCustomer + "<br>");
        document.writeln("Discount :             " + discount + " %" + "<br>");
        document.writeln("Amount Of People :     " + amountOfPeople + "<br>");
        document.writeln("Rent Day :             " + rentDay + "<br>");
        document.writeln("Service :              " + service + "<br>");
        document.writeln("Type Of Room :         " + typeRoom + "<br>");
        document.writeln("Total price :          " + totalPrice + " $");
    }


















































    // let a;
    // let name= document.getElementById(name);
    // let idcadr= document.getElementById(ID);
    // let birthday= document.getElementById(birth);
    // let email= document.getElementById(email);
    // let address= document.getElementById(add);
    // let rentdays= document.getElementById(rent);
    // let customrank= document.getElementById(cusrank);
    // let typeroom= document.getElementById(typeRoom);
    //
    // document.getElementById(name).innerHTML= result;
    // document.getElementById(id).innerHTML= idcadr.value;
    // document.getElementById(birth).innerHTML= birthday.value;
    // document.getElementById(email).innerHTML= email.value;
    // document.getElementById(add).innerHTML= address.value;
    // document.getElementById(rent).innerHTML= rentdays.value;
    // document.getElementById(cusrank).innerHTML= customrank.value;
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