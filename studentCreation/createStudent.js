$(document).ready(function () {
    var StudentArray = localStorage.getItem('StudentArr') ? JSON.parse(localStorage.getItem('StudentArr')) : [];
    console.log('from the ',StudentArray);
   
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
     function saveDataStudentFirst(obj) {
        StudentArray.push(obj)
        localStorage.clear() 
        localStorage.setItem('StudentArr',JSON.stringify(StudentArray))
        console.log('user saved');
    }
     
$("#btn").on('click',function () {
 var a = addstudent()
 saveDataStudentFirst(a)
 window.location.href = 'index.html'
})
})