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





const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
makeEditable();
}
}else{
    console.error('one or more output elements are missing')
}
})

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element=>{
        element.addEventListener('click' , function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            if(currentElement.tagName === "p" || currentElement.tagName === 'SPAN'){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing input')

                input.addEventListener('blur',function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })

                currentElement.style.display='none'
                currentElement.parentNode?.insertBefore(input,currentElement)
                input.focus()
            }
        })
    })
}
