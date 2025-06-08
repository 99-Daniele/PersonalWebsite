document.addEventListener('DOMContentLoaded', () => {
  
    const birthDate = new Date('1999-12-29');
    const today = new Date();
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();
  
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }
    console.log(age)
    const ageRef = document.getElementById('age');
    ageRef.textContent = age;
  });
  