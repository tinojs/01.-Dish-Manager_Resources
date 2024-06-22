window.addEventListener("load", solve);

function solve() {
  const firstNameRef = document.getElementById('first-name')
  const lastNameRef = document.getElementById('last-name')
  const ageRef = document.getElementById('age')
  const genderRef = document.getElementById('genderSelect')
  const taskTextAreaRef = document.getElementById('task')
  const submitBtnRef = document.getElementById('form-btn')
  const inProgressRef = document.getElementById('in-progress')
  const finishedCookingRef = document.getElementById('finished')
  const clearBtnRef = document.getElementById('clear-btn')
  const counterRef = document.getElementById('progress-count')
  const allLiRef = document.getElementsByClassName('each-line')
  const finishRef = document.getElementById('finished')
  const clearBrnRef = document.getElementById('clear-btn')

  submitBtnRef.addEventListener('click', submitFunc);

  function submitFunc(event) {
    event.preventDefault();

    if ((firstNameRef.value.length !== 0) && (lastNameRef.value.length !== 0) && (ageRef.value.length !== 0) && (taskTextAreaRef.value.length !== 0)) {
      let firstNameValue = firstNameRef.value;
      let lastNmaeValue = lastNameRef.value
      let ageValue = ageRef.value
      let genderValue = genderRef.value
      let taskTextAreaValue = taskTextAreaRef.value


      let myLi = createLi(firstNameValue, lastNmaeValue, ageValue, genderValue, taskTextAreaValue)
      inProgressRef.appendChild(myLi);
      firstNameValue = '';
      lastNmaeValue = '';
      ageValue = '';
      genderValue = '';
      taskTextAreaValue = '';

      function createLi(firstName, lastName, age, gender, taskArea) {
        let li = document.createElement('li');
        li.className = 'each-line'
        li.innerHTML = `
            <article>
            <h4>${firstName} ${lastName}</h4>
            <p>${gender}, ${age}</p>
            <p>${taskArea}</p>
            </article>
            <button class="edit-btn">Edit</button>
            <button class="complete-btn">Mark as complete</button>
        `
        let counterValue = Number(counterRef.innerHTML);
        counterValue++;
        counterRef.innerHTML = counterValue;
        const btns = li.querySelectorAll('button');
        const editBtn = btns[0];
        const completeBtn = btns[1];

        editBtn.addEventListener('click', editFunc);
        completeBtn.addEventListener('click', completeFunc);

        firstNameRef.value = '';
        lastNameRef.value = '';
        ageRef.value = '';
        taskTextAreaRef.value = '';

        function editFunc(event) {
          let article = event.target.parentElement;

          firstNameRef.value = firstName;
          lastNameRef.value = lastName;
          ageRef.value = age;
          genderRef.value = gender;
          taskTextAreaRef.value = taskArea;

          inProgressRef.removeChild(article)

          let counterValue = Number(counterRef.innerHTML);
          counterValue--;
          counterRef.innerHTML = counterValue;

        }

        function completeFunc(event) {
          let article = event.target.parentElement;
          inProgressRef.removeChild(article);
          let li = document.createElement('li');
          li.className = 'each-line'
          li.innerHTML = `
              <article>
              <h4>${firstName} ${lastName}</h4>
              <p>${gender}, ${age}</p>
              <p>${taskArea}</p>
              </article>
          `
          finishRef.appendChild(li)
          let counterValue = Number(counterRef.innerHTML);
          counterValue--;
          counterRef.innerHTML = counterValue;

          clearBrnRef.addEventListener('click', clearFunc);

          function clearFunc(event) {
            return finishRef.removeChild(li);
          }
        }
        return li;
      }
    }
  }
}
      


