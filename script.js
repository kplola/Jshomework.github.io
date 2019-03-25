
function greet() {
    window.alert("Hello everyone");
}

function init() {
  //  document.getElementById("first").src = "icons/flower1.png";
  // document.getElementById("container").getElementsByTagName("img")[1].src = "icons/flower2.png";

/* // Task 1:  GetElementById and GetElementByTagName
  let images = document.getElementById("container").getElementsByTagName("img");
    images[1].src = "icons/flower2.png";
    images[3].src = "icons/flower2.png";

  // Task 3: .innerHTML
    document.getElementById("first").innerHTML = "<div><p>You are great !</p></div>";
*/

    // Task 4: create element

    let image = document.createElement("img");
    image.src = "icons/car2.png";

    document.getElementById("new_element").appendChild(image);

    // Task 5
    let spans = document.getElementById("rainbow").getElementsByTagName("span"); // fill with proper code
    let colors = ["red", "orange", "yellow", "green", "blue", "orange"];

    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i]; // fill with proper code
    }

    // Task 6
    var changeSrc = function(event) {
        if(event.target.src) {
            if(event.target.src.includes("flower1.png")) {
                event.target.src = "icons/flower2.png";
            } else
            event.target.src = "icons/flower1.png";              
        }
    };
      document.getElementById("event").addEventListener("mouseover", changeSrc);
    
}