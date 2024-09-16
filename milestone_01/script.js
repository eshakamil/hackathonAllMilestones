const toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click",()=>{
    const hiddenContent =
    document.getElementById("hidden-content");
    if(hiddenContent.style.display === "none"){
        hiddenContent.style.display = "block";
    }else{
        hiddenContent.style.display = "none";
    }
});