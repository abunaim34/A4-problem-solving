
// Problem-01: Help The Zoo Manager
function calculateMoney(ticketSale) {
    if(ticketSale <= 0) {
        return 'Invalid Number'
    }
    const ticket = 120;
    const security = 500;
    const staff = 50;

    const staffCost = staff * 8;
    const totalCost = staffCost + security;

    const totalSale = ticketSale * ticket;
    const total = totalSale - totalCost;
    return total;
}

const saleTicket = calculateMoney(1);
console.log(saleTicket)


// Problem-02: Good Name , Bad Name
function checkName(name) {
   if(typeof name !== 'string'){
    return 'invalid';
   }
   else{
    const goodName = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w' ];
    const lastName = name.charAt(name.length -1);
    
    if(goodName.includes(lastName.toLowerCase() )){
     return 'Good Name'
    }
    else{
     return 'Bad Name'
    }
   }
}




// Problem 03 : Virus in my Array
function deleteInvalids(array) {
    if(Array.isArray(array)){
        let number = [];
        for(let item of array){
            if(typeof item === 'number' && !isNaN(item)){
                number.push(item)
            }
            
        }
        return number
    }
    else{
        return 'Invalid Array'
    }

}



// Problem 04 : Make A Great Password
function password(obj) {
    const userName = obj.name;
    const website = obj.siteName;
    if(obj.birthYear.toString().length !== 4 || Object.keys(obj).length !== 3 ){
        return 'invalid'
    }
    const birthDate = obj.birthYear;
    const fulInfo = website.charAt(0).toUpperCase() + website.slice(1) + '#' + userName + '@' + birthDate;
    return fulInfo
}



// Problem 05 : Monthly Savings of a Freelancer
function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr) || typeof livingCost === 'number'){
        let totalIncome = 0;
        totalIncome -= livingCost;
        for(const salary of arr){
            totalIncome +=  salary;
            if(salary >= 3000){
                const tax = salary * 20 / 100;
                totalIncome -= tax;
            } 
        }
        if(totalIncome < 0){
                return 'earn more'
        }
        return totalIncome  ;
    }
    else{
        return 'invalid input'
    }
}
