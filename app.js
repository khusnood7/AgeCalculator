function calculateAge() {
    const name = document.getElementById("name").value;
    const dob = new Date(document.getElementById("dob").value);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    const ageResult = document.getElementById("ageResult");
    ageResult.innerHTML = `${name}, you are ${age} years old.`;
  }