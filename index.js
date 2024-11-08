"use strict";
function genrs() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const experienceInput = document.getElementById('experience');
    const resumeData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        experience: experienceInput.value,
    };
    displayres(resumeData);
}
function  displayres(data) {
    const output = document.getElementById('output');
    output.innerHTML = `
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Experience:</strong></p>
    <p>${data.experience}</p>
  `;
}
