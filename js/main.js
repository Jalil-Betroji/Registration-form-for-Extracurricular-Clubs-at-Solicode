
// ================ Declare_Var =========================

const FName = document.getElementById("F_Name");
const LName = document.getElementById("L_Name");
const V_Email = document.getElementById("V_Email");
const V_Phone = document.getElementById("V_Phone");
const Gender = document.getElementsByName("gender");
const Group = document.getElementsByName("group");
const clubs = document.querySelector(".Clubs").selectedOptions;
const Name_Regex = /[a-zA-Z-\s]+$/;
const numtest = /(05|06|07)\d{8}$/;
const EmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]\w+)/ig;
const Email_blur_Regex = /^\w+([\.-]?\w+)*@\w+([\.-]\w+)/ig;
let joinbtn = document.getElementById("page_btn");

// ================ Home_page_button ====================

joinbtn.addEventListener("click", (e) => {
  document.querySelector("header").style.display = "none";
  document.querySelector("section").style.display = "block";
  document.querySelector("body").style = "background-image: url(img/backg.PNG)";
})
// ================ First_Name_Validation ====================

FName.addEventListener("blur", (e) => {
  if (FName.value.length === 0) {
    document.getElementById("First_name").innerHTML = "Required field";
    FName.style.border = 'solid 2px red';
    FName.style.color = 'red';
  } else if (FName.value.length > 15) {
    document.getElementById("First_name").innerHTML = "Your name must be between 1 and 15 charachters";
    FName.style.border = 'solid 2px red';
    FName.style.color = 'red';
  } else if (Name_Regex.test(FName.value) === false) {
    document.getElementById("First_name").innerHTML = "Only letters allowed";
    FName.style.border = 'solid 2px red';
    FName.style.color = 'red';
  } else {
    document.getElementById("First_name").innerHTML = "";
    FName.style.border = 'solid 2px #26c820';
    FName.style.color = '#00000';
  }
})

// ================ Last_Name_Validation ====================

LName.addEventListener("blur", (e) => {
  if (LName.value.length === 0) {
    document.getElementById("last_name").innerHTML = "Required field";
    LName.style.border = 'solid 2px red';
    LName.style.color = 'red';
  } else if (LName.value.length > 15) {
    document.getElementById("last_name").innerHTML = "your last name must be between 1-15 letters";
    LName.style.border = 'solid 2px red';
    LName.style.color = 'red';
  } else if (Name_Regex.test(LName.value) === false) {
    document.getElementById("last_name").innerHTML = "Only letters allowed";
    LName.style.border = 'solid 2px red';
    LName.style.color = 'red';
  } else {
    document.getElementById("last_name").innerHTML = "";
    LName.style.border = 'solid 2px #26c820';
    LName.style.color = '#00000';
  }

  // ================ Email_Validation ====================

})
V_Email.addEventListener("blur", (e) => {
  if (V_Email.value.length === 0) {
    document.getElementById("Email_ER").innerHTML = "Required field";
    V_Email.style.border = 'solid 2px red';
    V_Email.style.color = 'red'
  } else if (Email_blur_Regex.test(V_Email.value) === false) {
    document.getElementById("Email_ER").innerHTML = "invalid email your email (yourname@company_name.domain)";
    V_Email.style.border = 'solid 2px red';
    V_Email.style.color = 'red';
    // V_Email.focus();
  } else {
    document.getElementById("Email_ER").innerHTML = "";
    V_Email.style.border = 'solid 2px #26c820';
    V_Email.style.color = '#00000'
  }
})

// ================ Phone_Number_Validation ====================

V_Phone.addEventListener("blur", (e) => {
  if (V_Phone.value.length === 0) {
    document.getElementById("Phone_ER").innerHTML = "Required field";
    V_Phone.style.border = 'solid 2px red';
    V_Phone.style.color = 'red'
  } else if (numtest.test(V_Phone.value) === false) {
    document.getElementById("Phone_ER").innerHTML = "invalid number your number must contain 10 number and start with 05|06|07";
    V_Phone.style.border = 'solid 2px red';
    V_Phone.style.color = 'red'
  } else {
    document.getElementById("Phone_ER").innerHTML = "";
    V_Phone.style.border = 'solid 2px #26c820';
    V_Phone.style.color = '#00000';
  }
})



// ================= Validation_onclick =====================




const arr = [];

document.getElementById("submit_btn").onclick = function (e) {
  e.preventDefault();

  // ================ First_Name_Validation ====================

  if (FName.value.length === 0) {
    document.getElementById("First_name").innerHTML = "Required field";
    FName.style.border = 'solid 2px red';
    FName.style.color = 'red';
  } else if (FName.value.length > 15) {
    document.getElementById("First_name").innerHTML = "Your name must be between 1 and 15 charachters";
    FName.style.border = 'solid 2px red';
    FName.style.color = 'red';
  } else if (Name_Regex.test(FName.value) === false) {
    document.getElementById("First_name").innerHTML = "Only letters allowed";
    FName.style.border = 'solid 2px red';
    FName.style.color = 'red';
  } else {
    document.getElementById("First_name").innerHTML = "";
    FName.style.border = 'solid 2px #26c820';
    FName.style.color = '#00000';
    arr.push(true);
  }

  // ================ Last_Name_Validation ====================

  if (LName.value.length === 0) {
    document.getElementById("last_name").innerHTML = "Required field";
    LName.style.border = 'solid 2px red';
    LName.style.color = 'red';
  } else if (LName.value.length > 15) {
    document.getElementById("last_name").innerHTML = "Your last name needd to be between 1-15 letters";
    LName.style.border = 'solid 2px red';
    LName.style.color = 'red';
  } else if (Name_Regex.test(LName.value) === false) {
    document.getElementById("last_name").innerHTML = "Only letters allowed";
    LName.style.border = 'solid 2px red';
    LName.style.color = 'red';
  } else {
    document.getElementById("last_name").innerHTML = "";
    LName.style.border = 'solid 2px #26c820';
    LName.style.color = '#00000';
    arr.push(true);
  }

  // ================ Email_Validation ====================

  if (V_Email.value.length === 0) {
    document.getElementById("Email_ER").innerHTML = "Required field";
    V_Email.style.border = 'solid 2px red';
    V_Email.style.color = 'red'
  } else if (EmailRegex.test(V_Email.value) === false) {
    document.getElementById("Email_ER").innerHTML = "invalid email your email (yourname@company_name.domain)";
    V_Email.style.border = 'solid 2px red';
    V_Email.style.color = 'red'
  } else {
    document.getElementById("Email_ER").innerHTML = "";
    V_Email.style.border = 'solid 2px #26c820';
    V_Email.style.color = '#00000'
    arr.push(true);
  }

  // ================ Phone_Number_Validation ====================

  if (V_Phone.value.length === 0) {
    document.getElementById("Phone_ER").innerHTML = "Required field";
    V_Phone.style.border = 'solid 2px red';
    V_Phone.style.color = 'red'
  } else if (numtest.test(V_Phone.value) === false) {
    document.getElementById("Phone_ER").innerHTML = "invalid number your number must contain 10 number and start with 05|06|07";
    V_Phone.style.border = 'solid 2px red';
    V_Phone.style.color = 'red'
  } else {
    document.getElementById("Phone_ER").innerHTML = "";
    V_Phone.style.border = 'solid 2px #26c820';
    V_Phone.style.color = '#00000';
    arr.push(true);
  }

  // ================ Gender_Validation ====================

  if (Gender[0].checked === false && Gender[1].checked == false) {
    document.getElementById("Gender_ER").innerHTML = "please select your gender";
  } else {
    document.getElementById("Gender_ER").innerHTML = "";
    arr.push(true);
  }

  // ================ Group_Validation ====================

  let GV = false;
  for (let i = 0; i < Group.length; i++) {
    if (Group[i].checked === true) {
      GV = true
      break;
    }
  }
  if (GV === false) {
    document.getElementById("Group_ER").innerHTML = "please select your group";
  } else {
    document.getElementById("Group_ER").innerHTML = "";
    arr.push(true);
  }

  // ================ clubs_Validation ====================

  if (clubs.length === 0) {
    document.getElementById("Clubs_ER").innerHTML = "Required field";
  } else if (clubs.length > 3) {
    document.getElementById("Clubs_ER").innerHTML = "max 3";
  } else {
    document.getElementById("Clubs_ER").innerHTML = "";
    arr.push(true);
  }

  // ================ Success_Message ====================

  if (arr.length === 7) {
    window.location.href = '/Success.html';
  }
}
