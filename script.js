function showFormFields() {
    const systemType = document.getElementById("systemType").value;

    // Show general questions for all
    document.getElementById("generalQuestions").style.display = "block";

    // Hide all specific forms by default
    document.getElementById("electricalAspects").style.display = "none";
    document.getElementById("quotationSubsidy").style.display = "none";
    document.getElementById("option3").style.display = "none"; // For Solar Pump
    document.getElementById("option4").style.display = "none"; // For Existing Plant

    // Conditional logic based on system type
    if (systemType === "on_grid" || systemType === "off_grid" || systemType === "hybrid") {
        document.getElementById("electricalAspects").style.display = "block";
    }

    if (systemType === "on_grid") {
        document.getElementById("quotationSubsidy").style.display = "block";
    }

    if (systemType === "solar_pump" || systemType === "flour_mill"|| systemType === "existing_plant" ) {
        document.getElementById("option3").style.display = "block";
    }

    if (systemType !== "on_grid") {
        document.getElementById("option4").style.display = "block";
    }
}

// To ensure that the form fields are shown when the page loads, you may add this line to call the function initially
window.onload = function() {
    showFormFields(); // Call this function to set the initial state
};


  const scriptURL = 'https://docs.google.com/spreadsheets/d/1cG1QQ2IDXAfp586PC7MPBCGq8FqJ_IhwFWBnfikrQu0/edit?gid=0#gid=0'; // Paste your Web App URL here

  const form = document.getElementById('dynamicForm');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    fetch(scriptURL, {
      method: 'POST',
      body: new URLSearchParams(formObject)
    })
    .then(response => alert('Form submitted successfully!'))
    .catch(error => alert('Error! ' + error.message));
  });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw-9-BCYLaM3-C4phvezylMtuvsRQmuVtDLMN8_yWJA4pgMwIl6TAwFlVXjosjvH_Smqw/exec '; // Paste your Web App URL here

  const form = document.getElementById('dynamicForm');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    fetch(scriptURL, {
      method: 'POST',
      body: new URLSearchParams(formObject)
    })
    .then(response => alert('Form submitted successfully!'))
    .catch(error => alert('Error! ' + error.message));
  });


