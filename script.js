function calculateAge() {
  var dayInput = document.getElementById("day-input").value.padStart(2,0);
  var monthInput = document.getElementById("month-input").value.padStart(2,0);
  var yearInput = document.getElementById("year-input").value;

  var d = yearInput + "-" + monthInput + "-" + dayInput + " 00:00 UTC";

  var dateValid = checkDate(d);

  let isDateValid = false;

  var testmonth;
  var testdate;
  if (isNaN(dateValid) == false) {
    testmonth = (dateValid.getMonth() + 1).toString().padStart(2, 0);
    testdate = dateValid.getDate().toString().padStart(2, 0);

    if (dateValid.getFullYear() == yearInput && testmonth == monthInput && testdate == dayInput) {
      // console.log("Date is valid");
      isDateValid = true;
    }
  }


  const todayDate = new Date();

  if (isDateValid && dateValid <= todayDate) {
    var dYear = 0;
    var dMonth = 0;
    var dDay = 0;
    dYear = todayDate.getFullYear() - dateValid.getFullYear();
    dMonth = todayDate.getMonth() - dateValid.getMonth();
    dDay = todayDate.getDate() - dateValid.getDate();
    if (dMonth < 0) {
      dYear--;
      dMonth = 12 + dMonth;
    }

    if (dDay < 0) {
      if (dMonth == 0) {
        dYear--;
        dMonth = 11;
      }
      else if (dMonth > 0) {
        dMonth--;
      }

      if (dMonth + 1 == 2) {
        dDay = 28 + dDay;
      }
      else {
        dDay = 31 + dDay;
      }
    }
    else {
      if (todayDate.getMonth() < dateValid.getMonth()) {
        if (dMonth + 1 == 2) {
          dDay = 28 - dDay + dateValid.getDate();
        }
        else {
          dDay = dDay + (dateValid.getDate());
        }
      }
    }

    document.getElementById("age-years").innerHTML = dYear;
    document.getElementById("age-months").innerHTML = dMonth;
    document.getElementById("age-days").innerHTML = dDay;
  }
  else {
    document.getElementById("age-years").innerHTML = "- -";
    document.getElementById("age-months").innerHTML = "- -";
    document.getElementById("age-days").innerHTML = "- -";
  }
}

function checkDate(d) {
  let isDateValid = false;
  var timestamp;
  try {
    timestamp = new Date(d).toISOString();
    console.log("CheckDate Timestamp: " + timestamp);
    isDateValid = true;
  }
  catch (err) {
    console.log("err message: " + err.message);
    isDateValid = false;
  }

  if (isDateValid == true) {
    console.log("Date valid");
    var d = new Date(timestamp);
    return d;
  }
  else {
    console.log("Date NOT valid");
    return NaN;
  }
}