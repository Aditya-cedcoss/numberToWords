let input = document.querySelector("#number");
const ones = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Forteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eightteen",
  "Nineteen",
];
const tens = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Fourty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];
input.addEventListener("keyup", function () {
  var val = input.value;
  var num = val.toString();
  if ((num = num.toString()).length > 9) return "Overflow: Maximum 9 digits supported";
  n = ("000000000" + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = "";
    str += n[1] != 0 ? (ones[Number(n[1])] || tens[n[1][0]] + " " + ones[n[1][1]]) + "Crore " : " ";
    str += n[2] != 0 ? (ones[Number(n[2])] || tens[n[2][0]] + " " + ones[n[2][1]]) + "Lakh " : " ";
    str += n[3] != 0 ? (ones[Number(n[3])] || tens[n[3][0]] + " " + ones[n[3][1]]) + "Thousand " : " ";
    str += n[4] != 0 ? (ones[Number(n[4])] || tens[n[4][0]] + " " + ones[n[4][1]]) + "Hundred " : " ";
    str += n[5] != 0 ? (str != " " ? " " : "and ") + (ones[Number(n[5])] || tens[n[5][0]] + " " + ones[n[5][1]]) : " ";
    return document.querySelector("#output").innerHTML = str;
});





