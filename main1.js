  const FName = document.getElementById("F_Name");
  const LName = document.getElementById("L_Name");
  const V_Email = document.getElementById("V_Email");
  const V_Phone = document.getElementById("V_Phone");
  const Gender = document.getElementsByName("gender");
  const Group = document.getElementsByName("group");
  const clubs = document.querySelector(".Clubs").selectedOptions;
  const myRegex = /^[a-zA-Z-\s]+$/;
  const numtest = /(05|06|07)\d{8}$/;
  const EmailRegex = /([a-z])\w+.?([a-z])\w+.?([a-z])\w+?([0-9]?)@(gmail|hotmail|yahoo|ofppt).(com|org|net|ma)/g;
  const arr = [];
 
document.getElementById("submit_btn").onclick = function (e) {
  e.preventDefault();

  // ================ First_Name_Validation ====================

  if (FName.value.length === 0) {
    document.getElementById("First_name").innerHTML = "ce champ obligatoir";
    FName.style.border = 'solid 2px red';
    FName.style.color = 'red';
  } else if (FName.value.length > 15) {
    document.getElementById("First_name").innerHTML = "Your name must be between 1 and 15 charachters";
    FName.style.border = 'solid 2px red';
    FName.style.color = 'red';
  } else if (myRegex.test(FName.value) === false) {
    document.getElementById("First_name").innerHTML = "seules les lettres sont autorisees";
    FName.style.border = 'solid 2px red';
    FName.style.color = 'red';
  } else {
    document.getElementById("First_name").innerHTML = " ";
    FName.style.border = 'solid 2px green';
    FName.style.color = '#fff';
    arr.push(true);
  }

  // ================ Last_Name_Validation ====================

  if (LName.value.length === 0) {
    document.getElementById("last_name").innerHTML = "ce champ obligatoir";
    LName.style.border = 'solid 2px red';
    LName.style.color = 'red';
  } else if (LName.value.length > 15) {
    document.getElementById("last_name").innerHTML = "il ya plus de 15 charactere";
    LName.style.border = 'solid 2px red';
    LName.style.color = 'red';
  } else if (myRegex.test(LName.value) === false) {
    document.getElementById("last_name").innerHTML = "seules les lettres sont autorisees";
    LName.style.border = 'solid 2px red';
    LName.style.color = 'red';
  } else {
    document.getElementById("last_name").innerHTML = " ";
    LName.style.border = 'solid 2px green';
    LName.style.color = '#fff';
    arr.push(true);
  }

  // ================ Email_Validation ====================

  if (V_Email.value.length === 0) {
    document.getElementById("Email_ER").innerHTML = "ce champ obligatoir";
    V_Email.style.border = 'solid 2px red';
    V_Email.style.color = 'red'
  } else if (EmailRegex.test(V_Email.value) === false) {
    document.getElementById("Email_ER").innerHTML = "invalid email your email (yourname@company_name.domain)";
    V_Email.style.border = 'solid 2px red';
    V_Email.style.color = 'red'
  } else {
    document.getElementById("Email_ER").innerHTML = " ";
    V_Email.style.border = 'solid 2px green';
    V_Email.style.color = '#fff'
    arr.push(true);
  }

  // ================ Phone_Number_Validation ====================

  if (V_Phone.value.length === 0) {
    document.getElementById("Phone_ER").innerHTML = "ce champ obligatoir";
    V_Phone.style.border = 'solid 2px red';
    V_Phone.style.color = 'red'
  } else if (numtest.test(V_Phone.value) === false) {
    document.getElementById("Phone_ER").innerHTML = "invalid number your number must contain 10 number and start with 05|06|07";
    V_Phone.style.border = 'solid 2px red';
    V_Phone.style.color = 'red'
  } else {
    document.getElementById("Phone_ER").innerHTML = " ";
    V_Phone.style.border = 'solid 2px green';
    V_Phone.style.color = '#fff';
    arr.push(true);
  }

  // ================ Gender_Validation ====================

  if (Gender[0].checked === false && Gender[1].checked == false) {
    document.getElementById("Gender_ER").innerHTML = "please select your gender";
  } else {
    document.getElementById("Gender_ER").innerHTML = " ";
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
    document.getElementById("Clubs_ER").innerHTML = "obligatoir de choisir";
  } else if (clubs.length > 3) {
    document.getElementById("Clubs_ER").innerHTML = "max 3";
  } else {
    document.getElementById("Clubs_ER").innerHTML = " ";
    arr.push(true);
  }

  // ================ Success_Message ====================

  if (arr.length === 7) {
    window.location.href = '/Success.html';
  }
}
let joinbtn = document.getElementById("page_btn");
joinbtn.addEventListener("click", (e) => {
  document.querySelector("header").style.display = "none";
  document.querySelector("section").style.display = "block";
}) 
document.getElementById("Male").type = "radio";
document.getElementById("Female").type = "radio";
document.getElementById("V_Phone").type = "number";
document.getElementsByClassName(".group").type = "radio";