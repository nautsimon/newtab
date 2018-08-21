var tempStArray = localStorage.getItem("shortTermGoals");
var tempLtArray = localStorage.getItem("longTermGoals");

if (
  tempStArray == null ||
  tempStArray.length < 1 ||
  tempStArray === undefined
) {
  console.log("if");
  var stArraytemp = [];
} else {
  console.log("else");
  let original = localStorage.getItem("shortTermGoals");
  let obj = JSON.parse(original);
  stArraytemp = obj;
  console.log("unimported starray" + stArraytemp);
}

if (
  tempLtArray === null ||
  tempLtArray.length < 1 ||
  tempLtArray === undefined
) {
  var ltArraytemp = [];
} else {
  let original = localStorage.getItem("longTermGoals");
  let obj = JSON.parse(original);
  ltArraytemp = obj;
}

export { stArraytemp, ltArraytemp };
