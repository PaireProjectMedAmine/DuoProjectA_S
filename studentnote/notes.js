$(document).ready(function () {
  // check the currecnt local storage array ! 
  var StudentArr = localStorage.getItem('StudentArr') ? JSON.parse(localStorage.getItem('StudentArr')) : []

  // display the mvp student with the current local storage array ! 
  function displayTheMvpStudent(array) {
    var sorted = array.sort((a, b) => (b.moyenne - a.moyenne))
    for (let i = 0; i < sorted.length; i++) {
      $(".list").append(`
        <div class="student-list">
            <div class="student">
                <div class="student-info">
                    <p><strong>First Name:</strong> ${sorted[i].firstname}</p>
                    <p><strong>Last Name:</strong> ${sorted[i].lastname}</p>
                    <p><strong>Class:</strong> ${sorted[i].cla}</p>
                </div>
                <div class="moyenne">
                    <p><strong>Moyenne:</strong>${sorted[i].moyenne}</p>
                </div>
            </div>
        </div>`)

    }
  }
  //redirect to the admin page !
  $('#btn').on('click', function () {
    window.location.href = '../admin/index.html'
  })

  // this is for the display of student  from the mvp to the low !! 
  displayTheMvpStudent(StudentArr)
  console.log(StudentArr);
})