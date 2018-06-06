
// Main Form handler
function submitNameForm(event) {
    event.preventDefault()
    console.log('calling our service')
    document.getElementById('nameSuggestion').innerHTML = ''

    const xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('nameSuggestion').innerHTML = this.responseText
        }
    }

    const formData = new FormData( document.getElementById('nameForm') )
    xhttp.open('POST', '/nameGenerator', true)
    xhttp.send(formData)
}

// attach event lister for 'click' onto our form submit button.
document.querySelector('#submitForm').addEventListener('click', submitNameForm, false)

function sendPhone() {
    const phoneNumber = document.getElementById('phoneNumber').value
    console.log(`got the phone number ${phoneNumber}`)
    const xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('phoneEcho').innerHTML = this.responseText
        }
    }

    const formData = new FormData( document.getElementById('nameForm') )
    xhttp.open('GET', `/phoneEcho/${phoneNumber}`, true)
    xhttp.send()
}