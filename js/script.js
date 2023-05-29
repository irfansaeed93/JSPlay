import book from "./book.js";
import SmartPhone from "./class.js";


const motoZ4 = new SmartPhone(
    "48MP",
    "3800 mAh",
    "6 inch",
    "moto Z4",
    2021,
    "4GB",
    "128GB",
    10,
    true
);

const RedmiNote11 = new SmartPhone(
    "50MP",
    "5000 mAh",
    "6 inch",
    "Redmi Note 11",
    2021,
    "6GB",
    "128GB",
    12,
    true
);



const VivoY67 = new SmartPhone(
    "16MP",
    "5000mAh",
    "5.5 inch",
    "Vivo y67",
    2016,
    "4GB",
    "32GB",
    6,
    true
);


// console.log("The new moto Z4 Specs:", motoZ4);
// console.log("moto Z4 onboard memory", motoZ4.memory.rom);


// console.log("The new Redmi Note 11 Specs:", RedmiNote11);


// console.log("The most kachra phone:", VivoY67);




// book objects start from here


const theTreeOfKnowledge = new book(
    "The Tree of Knowledge",
    "Alex Michaelides",
    2023,
    "$13",
    true


);



const theSilentPatient = new book(
    "The Silent Patient",
    "Andrea Lion",
    2012,
    "$21",
    false
);


const peopleWeMeetOnVacation = new book(
    "People We Meet on Vacation",
    "Emily Henry",
    1987,
    "$24",
    true
);


const youdBeHomeNow = new book(
    "You'd Be Home Now",
    "Kathleen Glasgow",
    2006,
    "$8",
    true
);



const theNightingale = new book(
    "The Nightingale",
    "Kristin Hannah",
    2019,
    "$6",
    true
);



console.log("List of Most Popolar book of all time. No 1:", theTreeOfKnowledge);
console.log("List of Most Popolar book of all time. No 2:", theSilentPatient);
console.log("List of Most Popolar book of all time. No 3:", peopleWeMeetOnVacation);
console.log("List of Most Popolar book of all time. No 4:", youdBeHomeNow);
console.log("List of Most Popolar book of all time. No 5:", theNightingale);