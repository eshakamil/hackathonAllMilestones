document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

    //get all form elements
const profilePictureInput = document.getElementById('profilePicture')as HTMLInputElement
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLTextAreaElement;
const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
const addressElement = document.getElementById('address') as HTMLTextAreaElement;
const usernameElement = document.getElementById("username")as HTMLInputElement;

//check if all elements are present
if(profilePictureInput && 
    nameElement && 
    emailElement && 
    phoneElement && 
    educationElement && 
    experienceElement && 
    skillsElement && 
    usernameElement)
    {
        //get values from here
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const address = addressElement.value;
    const username = usernameElement.value;

    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureURL =profilePictureFile?URL.createObjectURL(profilePictureFile) : '';

//generate resume html content

    const resumeOutput = `
<h1>Resume<h1>

${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile picture" class="profilePicture">` : ""}

<h3>Name</h3>
<h4><p id="edit-name" class="editable" >${name}</p><h4>

<h3>E-mail<h3>
<h4><p id="edit-email" class="editable" > ${email}</p></h4>


<h3>Contact<h3>
<h4><p id="edit-phone" class="editable" >${phone}</p><h4>

<h3>Address</h3>
<h4><p id="edit-address" class="editable" >${address}</p></h4>

<h3>Education<h3>
<h4><p id="edit-education" class="editable" >${education}</p></h4>

<h3>Experience<h3>
<h4><p id="edit-experience" class="editable" >${experience}</p><h4>

<h3>Skills</h3>
<h4><p id="edit-skills" class="editable" >${skills}</p></h4>
`;

//Display the resume in the output container
const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
    resumeOutputElement.classList.remove("hidden");

//create container for buttons
    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttonsContainer";
    resumeOutputElement.appendChild(buttonsContainer);

    //add download PDF button
const downloadButton = document.createElement("button");
downloadButton.textContent = "Download as PDF";
downloadButton.addEventListener("click",()=>{
    window.print();
});

buttonsContainer.appendChild(downloadButton);

//add shareable link button
const shareLinkButton = document.createElement("button");
shareLinkButton.textContent = "Copy Shareable Link";
shareLinkButton.addEventListener("click",async()=>{
    try{
        const shareableLink = `https://yourdomain.com/resumes/${name.replace(
            /\s+/g,
            "_"
        )}_cv.html`;


        await navigator.clipboard.writeText(shareableLink);
        alert("shareable link copied to clipboard");
    }catch(err){
        console.error("Failed to copy link: ",err);
        alert("failed to copy link to clipboard.Please try again.");
    }
});
buttonsContainer.appendChild(shareLinkButton);
}else{
    console.error("resume output container not found");
}

}else{
    console.error("Forms elements are missing");
}
});