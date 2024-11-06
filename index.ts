interface ResumeData {
    name: string;
    email: string;
    phone: string;
    experience: string;
  }
  
  function generateResume() {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
  
    const resumeData: ResumeData = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      experience: experienceInput.value,
    };
  
    displayResume(resumeData);
  }
  
  function displayResume(data: ResumeData) {
    const output = document.getElementById('output') as HTMLDivElement;
    output.innerHTML = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Experience:</strong></p>
      <p>${data.experience}</p>
    `;
  }
  