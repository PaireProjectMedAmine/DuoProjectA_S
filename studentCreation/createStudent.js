$(document).ready(function () {
    var StudentArray = localStorage.getItem('StudentArr') ? JSON.parse(localStorage.getItem('StudentArr')) : [];
    console.log('from the ',StudentArray);
   
    // get data from the input ! 
    function addstudent() {
        var firstname = $("#studentName").val();
        var lastname =$("#StudentLastName").val();
        var cla = $("#StudentClass").val()
        var email = $('#studentEmail').val()
        var  newStudent = {
            firstname:firstname,
            lastname:lastname,
            cla:cla,
            email:email,
        } 
        console.log(newStudent);
        return newStudent
        
       
     }
     // save data and storage in the local storage 
     function saveDataStudentFirst(obj) {
        StudentArray.push(obj)
        localStorage.clear() 
        localStorage.setItem('StudentArr',JSON.stringify(StudentArray))
        console.log('user saved');
    }
     // redireck to the admin page 
$("#btn").on('click',function () {
 var a = addstudent()
 saveDataStudentFirst(a)
 window.location.href = '../admin/index.html'
})
})