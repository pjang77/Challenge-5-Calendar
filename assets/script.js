// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let timeList = document.querySelector("#timeList");

// timeList.innerHTML += `
//   <div class="row time-block past">
//     <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
//     <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
//     <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//       <i class="fas fa-save" aria-hidden="true"></i>
//     </button>
//   </div>
// `;
const now = dayjs();

for (let i = 0; i < 9; i++) {
  //let date = new Date();
  // TODO: Make a datetime object for 9AM
  let timeState = "";
  const time = dayjs().hour(9 + i);
  if (time.hour() > now.hour()) {
    timeState = "future";
  }
  if (time.hour() == now.hour()) {
    timeState = "present";
  }
  if (time.hour() < now.hour()) {
    timeState = "past";
  }

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="row time-block ${timeState}">
      <div class="col-2 col-md-1 hour text-center py-3">
        ${time.format("hA")}
      </div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
  `;

  const button = div.querySelector("button");
  const textArea = div.querySelector("textarea");

  textArea.value = localStorage.getItem(time.format("hA"));

  button.addEventListener("click", () => {
    localStorage.setItem(time.format("hA"), textArea.value);
  });

  timeList.append(div);
}

//
// timeList.innerHTML += `
//   <div id="hour-10" class="row time-block present">
//     <div class="col-2 col-md-1 hour text-center py-3">10AM</div>
//     <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
//     <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//       <i class="fas fa-save" aria-hidden="true"></i>
//     </button>
//   </div>
// `;

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
