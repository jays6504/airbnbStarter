import "../App.css";
import "./listingStyle.css";
import Header from "../components/Header";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import App from "../App";

export function SignOn() {
  return (
    <>
      <div className="Home">
        <Header />
        <h1 className="sign-in-title">Sign in:</h1>
        <div className="input-bar">
        Email
          <input className="email-sign-in-input"></input>
        </div>
        <div className="input-bar">
        Password
          <input className="password-sign-in-input"></input>
        </div>
        <div className="button-div">
          <button className="sign-in-button" onClick={SignOnButton}>Sign In</button>
        </div>
      </div>

      <div className="Home">
        <h1 className="sign-up-title">Sign Up:</h1>
        <div className="input-bar">
        Email
          <input className="email-sign-up-input"></input>
        </div>
        <div className="input-bar">
        Password
          <input className="password-sign-up-input"></input>
        </div>
        <div className="input-bar">
        First Name
          <input className="first-name-sign-up-input"></input>
        </div>
        <div className="input-bar">
        Last Name
          <input className="last-name-sign-up-input"></input>
        </div>
        <div className="input-bar">
          TOS Agreement
          <input type="checkbox" className="tos-sign-up-input"></input>
        </div>
        <div className="button-div">
          <button className="sign-up-button">Sign Up</button>
        </div>
      </div>
    </>
  );
}

async function SignOnButton()
{
  var email = document.querySelector(".email-sign-in-input").value;
  var password = document.querySelector(".password-sign-in-input").value;
  var queryString = `SELECT account_id FROM project.Account WHERE email = '${email}' AND password = '${password}';`;
  var encoded = encodeURIComponent(queryString);
  
  var responseData
  var url=`http://localhost:3005/sql?data=${encoded}`
  await fetch(url)
    .then((response) => response.json())
    .then((json) => responseData = json);
  console.log(responseData);
  if (responseData.length == 0) {
    alert("Invalid login credentials");
    return;
  }
  App.account_id = responseData[0].account_id;
  return;
}

async function SignUpButton()
{
  var email = document.querySelector(".email-sign-up-input").value;
  var password = document.querySelector(".password-sign-up-input").value;
  var first_name = document.querySelector(".first-name-sign-up-input").value;
  var last_name = document.querySelector(".last-name-sign-up-input").value;
  var tosBool = document.querySelector(".tos-sign-up-input").checked;
  if (tosBool = false) {
    alert("You must agree to the TOS");
    return;
  }
  else
  {
    tos = 1;
  }
  if (!tos) {
    alert("You must agree to the TOS");
    return;
  }
  var queryString = `INSERT INTO project.Account (email, password, first_name, last_name) VALUES ('${email}', '${password}', '${first_name}', '${last_name}');`;
  var encoded = encodeURIComponent(queryString);
  console.log(encoded);
  return;
  var responseData
  var url=`http://localhost:3005/sql?data=${encoded}`
  await fetch(url)
    .then((response) => response.json())
    .then((json) => responseData = json);
  console.log(responseData);
  if (responseData.length == 0) {
    alert("Invalid login credentials");
    return;
  }
  App.account_id = responseData[0].account_id;
  return;
}