//this function will get the current date
const currentDate = () => {
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
};

const setHourlyEvent = () => {
  //fetches data from local storage
  const emptyScheduleObject = JSON.parse(
    localStorage.getItem("emptyScheduleObject")
  );
  //checks if data is null or not.
  if (emptyScheduleObject !== null) {
    //checks current hour value
    const currentHour = moment().hour();

    //variable to store block elemnts array
    const timeBlockArray = $(".container .row");
    timeBlockArray.each();
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
