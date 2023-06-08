import React, { useRef } from "react";
import "./Registry.styles.css";

const PartyRegistry = () => {
  var displayList = document.getElementsByClassName("LI");
  var i;
  for (i = 0; i < displayList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "closeIt";
    span.appendChild(txt);
    displayList[i].appendChild(span);
  }

  var closeIt = document.getElementsByClassName("closeIt");
  for (i = 0; i < closeIt.length; i++) {
    closeIt[i].onClick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  var list = useRef("ul");
  window.addEventListener(
    "click",
    function (ev) {
      if (ev.target.className === "LI") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );

  const newElement = () => {
    var li = document.createElement("li");
    var inputValue = document.getElementById("addItems").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
      alert("Enter text to add an item");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("addItems").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "closeIt";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < closeIt.length; i++) {
      closeIt[i].onCLick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  };

  return (
    <>
      <div id="inputDiv">
        <h2>List</h2>
        <input id="addItems" type="text" placeholder="Add items..." />
        <span onCLick={newElement} class="addBtn">
          Add
        </span>
      </div>

      <ul id="myUL" useRef={list}>
        <li className="LI"></li>
      </ul>
    </>
  );
};

export default PartyRegistry;
