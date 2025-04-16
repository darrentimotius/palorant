let form = document.getElementById('report')
let submitButton = document.getElementById('submit')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    let isValid = checkInput()

    if (isValid) {
        setTimeout(() => {
            alert('Bug report submitted successfully!')
            submitButton.disabled = false
            form.reset()
        }, 300)
    }
})

function checkInput() {
    let usernameTrue = false
    let emailTrue = false
    let serverTrue = false
    let bugTrue = false
    let followUpTrue = false

    let username = document.getElementById('username')
    let email = document.getElementById('email')
    let server = document.getElementById('server')
    let bug = document.getElementById('bug')
    let followUp = document.getElementById('followup')

    if (!username.value) {
        error(username, 'Please fill in all required fields.')
    } else {
        success(username)
        usernameTrue = true
    }

    if (!email.value.endsWith('@gmail.com')) {
        error(email, 'Email must be end with @gmail.com')
    } else {
        success(email)
        emailTrue = true
    }

    if (server.value.trim() === '-') {
        error(server, 'Please specify the server.')
    } else {
        success(server)
        serverTrue = true
    }

    if (!bug.value) {
        error(bug, 'Please describe the bug.')
    } else {
        success(bug)
        bugTrue = true
    }

    if (!followUp.checked) {
        error(followUp, 'Please check the follow-up option.')
    } else {
        success(followUp)
        followUpTrue = true
    }

    return usernameTrue && emailTrue && serverTrue && bugTrue && followUpTrue
}

function error(input, message) {
    let formInput = input.parentElement
    let errorMessage = formInput.querySelector('small')

    errorMessage.innerText = message
    formInput.classList.add('error')
}

function success(input) {
    let formInput = input.parentElement

    formInput.classList.remove('error')
}