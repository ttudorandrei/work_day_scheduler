//this function will get the current date
const currentDate = () => {
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
};

const runOnReady = () => {
  //displays current date
  currentDate();
};

//runs the code on ready
$(window).ready(runOnReady);
