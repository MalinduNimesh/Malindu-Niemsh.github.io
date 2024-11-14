
function openTab(event, tabName) {
    
    const tabContent = document.querySelectorAll(".tab-content");
    tabContent.forEach(content => content.style.display = "none");

    
    const tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => button.classList.remove("active"));

    
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-button").click();
});


document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});


function handleSubmit(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    
    document.getElementById('contact-form').reset();

    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 4000);
}

document.getElementById('contact-form').addEventListener('submit', handleSubmit);

