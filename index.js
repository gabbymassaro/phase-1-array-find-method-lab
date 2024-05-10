const record = [
  { year: "2018", result: "N/A"},
  { year: "2017", result: "N/A"},
  { year: "2016", result: "N/A"},
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"}
]

function superbowlWin(record) {
  const win = record.find(record => record.result === "W");
  if (win){
    return win.year;
  }
}
console.log(superbowlWin(record));