const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tomastarconstructionlimited99@gmail.com",
        Password : "p61DADD969B593203AE01A52FDD59833D0772",
        To : 'tomastarconstructionlimited99@gmail.com',
        From : "tomastarconstructionlimited99@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});