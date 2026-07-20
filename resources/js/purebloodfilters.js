function filterActive() {
  // Declare variables
  let ul = document.getElementById("houses");
  let i;
  let li = ul.getElementsByTagName("div");
  console.log("li.length = " + li.length);

  // Loop through all list items, and hide those who don't match the given class
  for (i = 0; i < li.length; i++) {
    let x = li[i];
    console.log("x = " + x);
    let cl = x.classList.contains("active");
    if (cl) {
        x.style.display = "";
    } else {
        x.style.display = "none";
    }
  }
}

function filterExiled() {
  // Declare variables
  let ul = document.getElementById("houses");
  let i;
  let li = ul.getElementsByTagName("div");
  console.log("li.length = " + li.length);

  // Loop through all list items, and hide those who don't match the given class
  for (i = 0; i < li.length; i++) {
    let x = li[i];
    console.log("x = " + x);
    let cl = x.classList.contains("exiled");
    if (cl) {
        x.style.display = "";
    } else {
        x.style.display = "none";
    }
  }
}

function filterSacred28() {
  // Declare variables
  let ul = document.getElementById("houses");
  let i;
  let li = ul.getElementsByTagName("div");
  console.log("li.length = " + li.length);

  // Loop through all list items, and hide those who don't match the given class
  for (i = 0; i < li.length; i++) {
    let x = li[i];
    console.log("x = " + x);
    let cl = x.classList.contains("sacred28");
    if (cl) {
        x.style.display = "";
    } else {
        x.style.display = "none";
    }
  }
}

function filterBloodTraitor() {
  // Declare variables
  let ul = document.getElementById("houses");
  let i;
  let li = ul.getElementsByTagName("div");
  console.log("li.length = " + li.length);

  // Loop through all list items, and hide those who don't match the given class
  for (i = 0; i < li.length; i++) {
    let x = li[i];
    console.log("x = " + x);
    let cl = x.classList.contains("bloodtraitor");
    if (cl) {
        x.style.display = "";
    } else {
        x.style.display = "none";
    }
  }
}

function filterUntitled() {
  // Declare variables
  let ul = document.getElementById("houses");
  let i;
  let li = ul.getElementsByTagName("div");
  console.log("li.length = " + li.length);

  // Loop through all list items, and hide those who don't match the given class
  for (i = 0; i < li.length; i++) {
    let x = li[i];
    console.log("x = " + x);
    let cl = x.classList.contains("untitled");
    if (cl) {
        x.style.display = "";
    } else {
        x.style.display = "none";
    }
  }
}

function resetFilters() {
  // Declare variables
  let ul = document.getElementById("houses");
  let i;
  let li = ul.getElementsByTagName("div");
  console.log("li.length = " + li.length);

  // Loop through all list items, and hide those who don't match the given class
  for (i = 0; i < li.length; i++) {
    let x = li[i];
    let y = window.matchMedia("(max-width: 1300px)");
    if (y.matches) {
        x.style.display = "flex";
    } else {
        x.style.display = "inline-flex";
    }
  }
}