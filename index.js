//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

const day1TempF= 32.00;
const day2TempC= 25.00;
const day3TempF= 70.00;
const day4TempC= 18.00;
const day5TempF= 80.00;
const day6TempC= 15.00;
const day7TempF= 72.00;
const day8TempC= 28.00;
const day9TempF= 68.00;
const day10TempC= 20.00;
const day11TempF= 75.00;
const day12TempC= 23.00;
const day13TempF= 82.00;
const day14TempC= 30.00;
const day15TempF= 65.00;
const day16TempC= 22.00;
const day17TempF= 77.00;
const day18TempC= 26.00;
const day19TempF= 78.00;
const day20TempC= 24.00;
const day21TempF= 73.00;
const day22TempC= 21.00;
const day23TempF= 79.00;
const day24TempC= 27.00;
const day25TempF= 71.00;
const day26TempC= 19.00;
const day27TempF= 74.00;
const day28TempC= 17.00;
const day29TempF= 76.00;
const day30TempC= 29.00;

let tempInFahrenheit;
let tempInCelsius;

// function to convert celcius to fahrenheit declared
const celciusToFahrenheit = (tempInCelsius) => {
    return (tempInCelsius * 9/5) + 32;
};

//function to convert fahrenheit to celcius declared
const fahrenheitToCelcius = (tempInFahrenheit) => {
    return (tempInFahrenheit - 32) * 5/9;
};


// calling celciusToFahrenheit
console.log(celciusToFahrenheit(day2TempC));
// calling fahrenheitToCelcius
console.log(fahrenheitToCelcius(day1TempF));

// const tot_temperature_in_celsius = day2TempC + day4TempC + day6TempC + day8TempC + day10TempC + day12TempC + day14TempC + day16TempC + day18TempC + day20TempC + day22TempC + day24TempC + day26TempC + day28TempC + day30TempC;
// const tot_temperature_in_fahrenheit = day1TempF + day3TempF + day5TempF + day7TempF + day9TempF + day11TempF + day13TempF + day15TempF + day17TempF + day19TempF + day21TempF + day23TempF + day25TempF + day27TempF + day29TempF;

// const avg_temperature_in_celsius = tot_temperature_in_celsius / 15;
// const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 15;

// console.log("Total Temperature in Celsius: " + tot_temperature_in_celsius);
// console.log("Total Temperature in Fahrenheit: " + tot_temperature_in_fahrenheit);
// console.log("Average Temperature in Celsius: " + avg_temperature_in_celsius);
// console.log("Average Temperature in Fahrenheit: " + avg_temperature_in_fahrenheit);

// module.exports = {
//     tot_temperature_in_fahrenheit,
//     tot_temperature_in_celsius,
//     avg_temperature_in_fahrenheit,
//     avg_temperature_in_celsius
// };