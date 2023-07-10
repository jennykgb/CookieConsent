const modal = document.getElementById('modal')
const closeButton = document.getElementById('modal-close-btn')
const cosentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn")



setTimeout(function(){
    modal.style.display = "inline"

}, 1500)

closeButton.addEventListener("click", function(){
    modal.style.display = "none"
})

cosentForm.addEventListener("submit", function(event){
    event.preventDefault()

    const consentFormData = new FormData(cosentForm)
    const name = consentFormData.get("fullName")


    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">
         Uploading your data to the dark web...
        </p>
    </div>`

    
    setTimeout(function(){
        document.getElementById("upload-text").innerText = `Making the sale...`
    }, 1500)


    setTimeout(function(){
        document.getElementById("modal-inner").innerHTML = `
            <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>`

        closeButton.disabled = false
    }, 3000)

})

declineBtn.addEventListener("mouseenter", function(){
    document.getElementById("modal-choice-btns").classList.toggle("reverse")
    
})
