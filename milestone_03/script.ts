document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

const profilePictureInput = document.getElementById('profilePicture')as HTMLInputElement
const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLInputElement;
const experienceElement = document.getElementById('experience') as HTMLInputElement;
const skillsElement = document.getElementById('skills') as HTMLInputElement;
const addressElement = document.getElementById('address') as HTMLInputElement;



if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
   
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const address = addressElement.value;

    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureURL =profilePictureFile?URL.createObjectURL(profilePictureFile) : '';

const resumeOutput = `
<h1>Resume<h1>

${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile picture" class="profilePicture">` : ""}

<h3>Name</h3>
<h4><p>${name}</p><h4>

<h3>E-mail<h3>
<h4><p>${email}</p></h4>


<h3>Contact<h3>
<h4><p>${phone}</p><h4>

<h3>Address</h3>
<h4><p>${address}</p></h4>

<h3>Education<h3>
<h4><p>${education}</p></h4>

<h3>Experience<h3>
<h4><p>${experience}</p><h4>

<h3>Skills</h3>
<h4><p>${skills}</p></h4>
`;


const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
}else{
    console.error('the resume output element are missing')
}
}else{
    console.error('one or more output elements are missing')
}
})
