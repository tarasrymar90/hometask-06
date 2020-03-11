//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript?fbclid=IwAR32vwB1XgdCbZBuOPXjeYGKHycFc_4HXaVnC-DO5-mspmyUZQhbGxQXO8E

function stringToArray(string){
	return string.split(' ');
}
stringToArray("Robin Singh");
---------------------------------------------------
// варіант 2  
const stringToArray = string => string.split(' ');


// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript?fbclid=IwAR3lnvMuHLSmqHxLEryPzdr7x1cuR5WiSrk0qu8ifr5-o_u9cETw0_R-w80

let min = function(list){
    return Math.min(...list)
}

let max = function(list){
    
    return Math.max(...list)
}

// 2 варіант
const min = list => list.sort((a, b) => a - b)[0];


// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript?fbclid=IwAR358ILTeN5qYRdt_o-GLTh5tW2jrRgqLMZGnxGw3E63b81B8rwjUU3uutc

function warnTheSheep(queue) {
  let reverseArr = queue.reverse();
    let count = 1;

    for (let i = 0; i < reverseArr.length; i++) {
        if (reverseArr[i] === "wolf") {
            count += 0;
        } if (reverseArr[i + 1] === "wolf") {
            return "Oi! Sheep number " + count + "! You are about to be eaten by a wolf!";
        } if (reverseArr[i] === "sheep") {
            reverseArr[i] = reverseArr[i] + count++;
        } if (reverseArr[0] === 'wolf') {
            return 'Pls go away and stop eating my sheep'
        }
    }
