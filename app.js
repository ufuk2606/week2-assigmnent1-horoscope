// defines the received information as day and month
// variables used
let day = prompt("What day are you born in? Please enter numbers.");
let month = prompt("What month are you born in? Please enter in lower case.");

// if-else statements used and printed it to the console
if (
  (month == "december" && day >= 22 && day <= 31) ||
  (month == "january" && day <= 19 && day > 0)
) {
  console.log("day = "+ day +"  month = "+ month +"  Horoscope : Capricorn ");
} else if (
  (month == "january" && day >= 20 && day <= 31) ||
  (month == "february" && day <= 18 && day > 0)
) {
  console.log("day = "+ day +"  month = "+ month +"  Horoscope : Aquarius ");
} else if (
  (month == "february" && day >= 19 && day <= 29) ||
  (month == "march" && day <= 20 && day > 0)
) {
  console.log("day = "+ day +"  month = "+ month +"  Horoscope : Pisces ");
} else if (
  (month == "march" && day >= 21 && day <= 31) ||
  (month == "april" && day <= 19 && day > 0)
) {
  console.log("day = "+ day +"  month = "+ month +"  Horoscope : Aries");
} else if (
  (month == "april" && day >= 20 && day <= 30) ||
  (month == "may" && day <= 20 && day > 0)
) {
  console.log("day = "+ day +"  month = "+ month +"  Horoscope : Taurus ");
} else if (
  (month == "may" && day >= 21 && day <= 31) ||
  (month == "june" && day <= 20 && day > 0)
) {
  console.log("day = "+ day +"  month = "+ month +"  Horoscope : Gemini");
} else if (
  (month == "june" && day >= 21 && day <= 30) ||
  (month == "july" && day <= 22 && day > 0)
) {
  console.log("day = "+ day +"  month = "+ month +"  Horoscope : Cancer ");
} else if (
  (month == "july" && day >= 23 && day <= 31) ||
  (month == "august" && day <= 22 && day > 0)
) {
  console.log("day = "+ day +"  month = "+ month +"  Horoscope : Leo ");
} else if (
  (month == "august" && day >= 23 && day <= 31) ||
  (month == "semtember" && day <= 22 && day > 0)
) {
  console.log("day = "+ day +"  month = "+ month +"  Horoscope : Virgo ");
} else if (
  (month == "semtember" && day >= 23 && day <= 30) ||
  (month == "october" && day <= 22 && day > 0)
) {
  console.log("day = "+ day +"  month = "+ month +"  Horoscope : Libra ");
} else if (
  (month == "october" && day >= 23 && day <= 31) ||
  (month == "november" && day <= 21 && day > 0)
) {
  console.log("day = "+ day +"  month = "+ month +"  Horoscope : Scorpio ");
} else if (
  (month == "november" && day >= 22 && day <= 30) ||
  (month == "december" && day <= 21 && day > 0)
) {
  console.log("day = "+ day +"  month = "+ month +"  Horoscope : Sagittarius ");
} else {
  console.log("You entered wrong. Please check..");
}
