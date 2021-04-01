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

    //variable to store block elements array
    const timeBlockArray = $(".container .row");

    const iterateThroughArray = function () {
      //get data-time value from row
      const textArea = $(this).find("textarea");
      const blockTime = parseInt($(this).data("time"), 10);

      //if/else statement to set the row color based on current time
      if (blockTime === currentHour) {
        textArea.removeClass("past").addClass("present");
      } else if (blockTime > currentHour) {
        textArea.removeClass("past").addClass("future");
      }

      //if user input exists, it is pushed in its respective textarea
      const plannedEvent = emptyScheduleObject[blockTime];
      $(this).find("textarea").text(plannedEvent);
      console.log(plannedEvent);
    };

    timeBlockArray.each(iterateThroughArray);
  } else {
    //add empty array in local storage
    localStorage.setItem("emptyScheduleObject", JSON.stringify({}));
    console.log("null");
  }
};

const onClick = function (event) {
  const emptyScheduleObject = JSON.parse(
    localStorage.getItem("emptyScheduleObject")
  );
  const target = $(event.target);
  //this stops event bubbling
  if (target.is("button")) {
    const key = target.attr("id");
    const value = target.parent().find("textarea").val();

    //new object that stores user text
    const filledScheduleObject = {
      ...emptyScheduleObject,
      [key]: value,
    };

    //this pushes the user text in local storage
    localStorage.setItem(
      "emptyScheduleObject",
      JSON.stringify(filledScheduleObject)
    );
  }
};

const runOnReady = () => {
  //displays current date
  currentDate();

  //sets row color and populates textarea with whatever is saved in local storage
  setHourlyEvent();

  //runs function on click
  $(".container").click(onClick);
};

//runs the code on ready
$(window).ready(runOnReady);
