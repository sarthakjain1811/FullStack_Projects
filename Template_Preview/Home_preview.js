
var selectedSlides = [];

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  var iframe = document.querySelector("iframe");
  if (iframe && iframe.parentNode === document.getElementById("main")) {
    iframe.parentNode.removeChild(iframe);
  }
  document.getElementById("main").innerHTML = `
  <img src="images/bgb.jpg">
`;
}

function openPresentation(section) {
  var presentationUrl = ""; // Set the URL for each section's presentation

  switch (section) {
    case "executive-summary":
      presentationUrl = "https://docs.google.com/presentation/d/1f_Bnii1onechp-jTIiy-qgtceKLHeix3Bsu8Qi0Mrv0/edit?usp=sharing";
      break;
    case "background":
      presentationUrl = "https://docs.google.com/presentation/d/1je5n64i80CEE6ngxa1nE_oLpiMCnan4b0OQl14W_iVE/edit?usp=sharing";
      break;
    case "our-approach":
      presentationUrl = "https://docs.google.com/presentation/d/1e0O0kN4qYPvSUslp3wlej1C04oj9iDxQq1uf2XsvTfQ/edit?usp=sharing";
      break;
    case "why-pwc":
      presentationUrl = "https://docs.google.com/presentation/d/1BGAu8f982JwhywZyxc1jWf8FshwDq_4hxG_2qTWyuaE/edit?usp=sharing";
      break;
    case "scope":
      presentation = "https://docs.google.com/presentation/d/1w5tALhds6mftC6Wsy0WBLqKf8AvSCzoh7yNPoCS5TOE/edit?usp=sharing";
      break;
    case "credentials":
      presentationUrl = "https://docs.google.com/presentation/d/1JF77732iUmf41GjPn1vloYoJQ0L9IVXU7kaSeJheFmE/edit?usp=sharing";
      break;
    case "team-structure":
      presentationUrl = "https://docs.google.com/presentation/d/15XddYJGSZlSsfDQIwnsuDWpw-0ACNDgMLr8cLpgnL_Y/edit?usp=sharing";
      break;
    default:
      break;
  }

  if (presentationUrl !== "") {
    var iframe = document.createElement("iframe");
    iframe.src = presentationUrl;
    iframe.style.width = "950px";
    iframe.style.height = "400px";
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").appendChild(iframe);

    iframe.addEventListener("load", function() {
      var doc = iframe.contentDocument || iframe.contentWindow.document;
      currentPresentationId = doc.querySelector("div.punch-viewer-container").getAttribute("data-presentation-id");
      doc.addEventListener("click", function(event) {
        var slideId = event.target.closest(".punch-slide-thumbnail").getAttribute("data-id");
        selectedSlides.push({ presentationId: currentPresentationId, slideId });
        event.preventDefault();
        event.stopPropagation();
      });
    });
  }
}

function generateTemplate() {
  var iframe = document.createElement("iframe");
  iframe.src = "presentations/ProposalTemplate.pptx";
  iframe.style.width = "950px";
  iframe.style.height = "400px";
  document.getElementById("main").innerHTML = "";
  document.getElementById("main").appendChild(iframe);
}

