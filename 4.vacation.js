function vacation(group, type, day) {

    //You are given a group of people, type of the group, and day of the week they are going to stay. 

    let groupOfPeople = Number(group);
    let typeOfGroup = String(type);
    let dayOfWeek = String(day);
    let totalSum = 0;

    // In this case I used  the switch statement to select one of the  code blocks 'typeOfGroups' to be executed.

     // in every switch case i have embedded if and if else statements to present the dayOfWeek and the price on the day for this type of group.

     // if and if else statements outside of the switch case  shows that there are also discounts based on some conditions given. 

    switch (typeOfGroup) {
        case 'Students': 
            if (dayOfWeek === 'Friday') {
                totalSum = groupOfPeople * 8.45;
            } else if (dayOfWeek === 'Saturday') {
                totalSum = groupOfPeople * 9.80;
            } else if (dayOfWeek === 'Sunday') {
                totalSum = groupOfPeople * 10.46;
            }
            break;
        case 'Business':
            if (dayOfWeek === 'Friday') {
                totalSum = groupOfPeople * 10.90;
            } else if (dayOfWeek === 'Saturday') {
                totalSum = groupOfPeople * 15.60;
            } else if (dayOfWeek === 'Sunday') {
                totalSum = groupOfPeople * 16;
            }
            break;
        case 'Regular':
            if (dayOfWeek === 'Friday') {
                totalSum = groupOfPeople * 15;
            } else if (dayOfWeek === 'Saturday') {
                totalSum = groupOfPeople * 20;
            } else if (dayOfWeek === 'Sunday') {
                totalSum = groupOfPeople * 22.50;
            }
            default:
                break;
    }
    if (typeOfGroup === 'Students' && groupOfPeople >=30) {
        totalSum = totalSum - (0.15 * totalSum);
    }
    else if (typeOfGroup === 'Business' && groupOfPeople >=100){
        totalSum = totalSum - ((totalSum/groupOfPeople)*10)
    }
    else if (typeOfGroup === 'Regular' && groupOfPeople >=10 && groupOfPeople <= 20){
        totalSum = totalSum - (totalSum * 0.05)
    }
console.log(`Total price: ${totalSum.toFixed(2)}`);

}
vacation('40', 'Regular', 'Saturday') //Total price: 800.00

//Output: if the day is Saturday, type of the group is Regular, and the the group number is 40 people, the total price based on the discounts on some condition is 'Total price: 800.00'
