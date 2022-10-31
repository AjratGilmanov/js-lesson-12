// 1 задача
console.log('1 задача');
for(let num = 1;num <= 100;num++) {
    console.log(num);
};
// 2 задача
console.log('');
console.log('2 задача');
for(let num2 = 11;num2 <= 33;num2++) {
    console.log(num2);
  };
  
// 3 задача
console.log('');
console.log('3 задача');
for(num = 0;num <= 100;num += 2){
    if (num==0){
        continue
    }
    console.log(num)
}
// 4 задача
console.log('');
console.log('4 задача');
var sum = 0;
for (var i = 0; i <= 100; i++) {
    sum += i;
 }
console.log(sum);
// 5 задача
console.log('');
console.log('5 задача');
let mass = [1,2,3,4,5];
for(i = 0;i< mass.length;i++){
    console.log(mass[i])
}
// 6 задача 
console.log('');
console.log('6 задача');
mass = [1,2,3,4,5];
let summ = 0
for(i = 0;i< mass.length;i++){
    summ += mass[i]
}
let result = summ
console.log(summ)
// 7 задача
console.log('');
console.log('7 задача');
i = 0
var obj = {
    green: 'зеленый',
    red: 'красный',
    blue: 'голубой',
}
for(i = 0;i< mass.length;i++){
    for(i in obj){
        console.log(i)
        console.log(obj[i])
    }
}
// 8 задача
console.log('');
console.log('8 задача');
obj = {'Коля':200
    ,'Вася':300
    ,'Петя':400
};
for(i = 0;i< mass.length;i++){
    for(i in obj){
        console.log(i + ' - зарплата ' + obj[i] + ' долларов')
    }
}

// 1 задача второго слайда 
console.log('');
console.log('1 задача второго слайда');
let arr = [2,5,9,15,0,4];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
      console.log(arr[i]);
    }
  };

// 2 задача второго слайда 
console.log('');
console.log('2 задача второго слайда');
let mass1 = [1,2,3,4,5,-6,-4,-5,-8,-9]
for(i = 0;i < mass1.length;i++){
    if (mass1[i] > 0){
        continue
    }else{
        console.log(mass1[i])
    }
}

// 3 задача второго слайда 
console.log('');
console.log('3 задача второго слайда');
mass = [1,2,5,9,4,13,4,10];
for (i= 0;i < mass.length;i++){
    if (mass[i] == 4){
        console.log('Есть!')
        console.log(mass[i])
        break
    }
}

// 4 задача второго слайда 
console.log('');
console.log('4 задача второго слайда');
function firstDigit(n) {
    let rest = n, reminder = 0;
    while (rest) {
        reminder = rest % 10;
        rest = (rest - reminder) / 10;
    }
    return reminder;
}
mass = [10,20,30,50,235,3000];
let tmp = [1, 2, 5];
for (let i = 0; i < mass.length; i++) {
    let e = mass[i],
        digit = firstDigit(e);
    if (tmp.includes(digit))
        console.log(e)
}
// 5 задача второго слайда 
console.log('');
console.log('5 задача второго слайда');
mass = [1,2,3,4,5,6,7,8,9];
let str = '-';
for (i in mass){
    str += mass[i]+'-'
}
console.log(str);
// 6 задача второго слайда 
console.log('');
console.log('6 задача второго слайда');
arr = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'сб' || arr[i] == 'вс') {
        document.write('<b>' + arr[i] + '</b> ');
    } else {
        document.write(arr[i] + ' ');
    }
 
}

// 7 задача второго слайда 
console.log('');
console.log('7 задача второго слайда');
console.log('не решено');


// 8 задача второго слайда 
console.log('');
console.log('8 задача второго слайда');
let del = 1000
for(i = 0;i < 1000;i++){
    num = i + 1
    del = del / 2
    console.log(del)
    console.log(`кол-во итераций:${num}`)
    if(del < 50){
        break
    }
}