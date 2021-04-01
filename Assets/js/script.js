//this function will get the current date
const currentDate = () => {
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
};

const setHourlyEvent = () => {
  const emptyScheduleObject = JSON.parse(
    localStorage.getItem("emptyScheduleObject")
  );

  if (emptyScheduleObject !== null) {
    console.log("null");
  } else {
    console.log("exists");
  }
};

const runOnReady = () => {
  //displays current date
  currentDate();

  setHourlyEvent();
};

//runs the code on ready
$(window).ready(runOnReady);
