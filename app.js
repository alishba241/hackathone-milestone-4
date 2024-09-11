"use strict";
// ! toggle skills section
var _a, _b;
function toggleSkills() {
    const skillsSection = document.getElementById("skills-section");
    const toggleButton = document.getElementById("toggle-skills-btn");
    //! conditions to toggle skills section
    if (skillsSection && toggleButton) {
        if (skillsSection.style.display === "none" ||
            skillsSection.style.display === "") {
            skillsSection.style.display = "block"; //! Show section
            toggleButton.textContent = "Hide Skills"; //! Change button text
        }
        else {
            skillsSection.style.display = "none"; //! Hide section
            toggleButton.textContent = "Show Skills"; //! Change button text
        }
    }
}
//! event listener for form submission
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a, _b;
    event.preventDefault(); //! Prevent the form from submitting and refreshing the page
    //! Event listener for the "Generate Resume" button
    (_a = document.getElementById("generateBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const contactNumber = document.getElementById("contactNumber").value;
        const email = document.getElementById("email").value;
        const education = document.getElementById("education").value;
        const skills = document.getElementById("skills").value;
        const workExperience = document.getElementById("workExperience").value;
        const languageProficiencies = document.getElementById("languageProficiencies").value;
        //! Handle the Profile Photo file input
        const profilePhoto = (_a = document.getElementById("profilePhoto").files) === null || _a === void 0 ? void 0 : _a[0];
        //! generated resume will be displayed here
        const resumeOutput = document.getElementById("resumeOutput");
        const saveBtn = document.getElementById("saveBtn");
        if (resumeOutput) {
            if (profilePhoto) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    //! Check if the resume output section exists and display the resume details
                    var _a;
                    resumeOutput.innerHTML = `
         <h1 contenteditable="true">${firstName} ${lastName}</h1>
          <img src="${(_a = e.target) === null || _a === void 0 ? void 0 : _a.result}" alt="Profile Photo" style="width: 150px; height: 150px; border-radius: 50%;">
      <p><strong>Contact Number:</strong> <span contenteditable="true">${contactNumber}</span></p>
      <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
      <h2>Education</h2>
      <p contenteditable="true">${education}</p>
      <h2>Skills</h2>
      <p contenteditable="true">${skills}</p>
      <h2>Work Experience</h2>
      <p contenteditable="true">${workExperience}</p>
      <h2>Language Proficiencies</h2>
      <p contenteditable="true">${languageProficiencies}</p>`;
                };
                //! Read the profile photo file as a Data URL (base64 string)
                reader.readAsDataURL(profilePhoto);
            }
            else {
                //! If no profile photo, generate the resume without the photo
                resumeOutput.innerHTML = `
       <h1 contenteditable="true">${firstName} ${lastName}</h1>
      <p><strong>Contact Number:</strong> <span contenteditable="true">${contactNumber}</span></p>
      <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
      <h2>Education</h2>
      <p contenteditable="true">${education}</p>
      <h2>Skills</h2>
      <p contenteditable="true">${skills}</p>
      <h2>Work Experience</h2>
      <p contenteditable="true">${workExperience}</p>
      <h2>Language Proficiencies</h2>
      <p contenteditable="true">${languageProficiencies}</p>`;
                if (saveBtn) {
                    saveBtn.style.display = "inline-block";
                }
            }
        }
    });
    //! Event listener for the "Reset" button
    (_b = document.getElementById("resetBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        //! Reset the form fields to their default values
        document.getElementById("resumeForm").reset();
        //! Clear the Resume Output div
        const resumeOutput = document.getElementById("resumeOutput");
        if (resumeOutput) {
            resumeOutput.innerHTML = "";
        }
    });
});
//!  Function to make HTML element editable
function makeEditable(element) {
    element.setAttribute("contenteditable", "true"); //! Make the element's content editable
    element.style.border = "1px dashed #ccc"; //! a dashed border to indicate it's editable
}
//! Function to remove the editable status 
function removeEditable(element) {
    element.removeAttribute("contenteditable"); //! Remove the contenteditable attribute
    element.style.border = "none"; //! Remove the dashed border after saving
}
//! Event listener for the "Save Changes" button
(_b = document.getElementById("saveBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    const resumeOutput = document.getElementById("resumeOutput");
    if (resumeOutput) {
        const editableElements = resumeOutput.querySelectorAll("[contenteditable='true']");
        editableElements.forEach((elem) => removeEditable(elem));
        alert("Changes have been saved!");
    }
});
