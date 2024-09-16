var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var addressElement = document.getElementById('address');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var address = addressElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n<h1>Resume<h1>\n\n".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile picture\" class=\"profilePicture\">") : "", "\n\n<h3>Name</h3>\n<h4><p id=\"edit-name\" class=\"editable\" >").concat(name_1, "</p><h4>\n\n<h3>E-mail<h3>\n<h4><p id=\"edit-email\" class=\"editable\" > ").concat(email, "</p></h4>\n\n\n<h3>Contact<h3>\n<h4><p id=\"edit-phone\" class=\"editable\" >").concat(phone, "</p><h4>\n\n<h3>Address</h3>\n<h4><p id=\"edit-address\" class=\"editable\" >").concat(address, "</p></h4>\n\n<h3>Education<h3>\n<h4><p id=\"edit-education\" class=\"editable\" >").concat(education, "</p></h4>\n\n<h3>Experience<h3>\n<h4><p id=\"edit-experience\" class=\"editable\" >").concat(experience, "</p><h4>\n\n<h3>Skills</h3>\n<h4><p id=\"edit-skills\" class=\"editable\" >").concat(skills, "</p></h4>\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
