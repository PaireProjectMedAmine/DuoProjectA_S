$(document).ready(function () {
    
    //get the array of students named in the localstorage StudentArr 
    var StudentArray = localStorage.getItem('StudentArr') ? JSON.parse(localStorage.getItem('StudentArr')) : [];

    // get the single student 
    var std = localStorage.getItem('std')
    var Student = JSON.parse(std)
    console.log('STUDENT TO ADD NOTE :',Student);
     

    console.log(StudentArray);
    $("#button").on('click',function () {
        for (let i = 0; i < StudentArray.length; i++) {
            if ((StudentArray[i].firstname == Student.firstname) && (StudentArray[i].lastname == Student.lastname)  ) {

                var moyenne  = Math.floor((($("#Mathnote").val()*4) + ($("#Algonote").val()*2) + ($("#softskills").val()*2)+($("#englishnote").val()*1))/9)
            StudentArray[i]["mathnote"] = $("#Mathnote").val();
            /* console.log($("#Mathnote").val());
            console.log(StudentArray[i]["mathnote"]); */
            StudentArray[i]["Algonote"] = $("#Algonote").val();
            StudentArray[i]["englishnote"] = $('#englishnote').val();
            StudentArray[i]["softskills"] = $("#softskills").val();
            StudentArray[i]["status"] = $('#status').val();
            StudentArray[i]["moyenne"] = moyenne    
            }
        }
        var a = JSON.stringify(StudentArray)
        localStorage.clear()
        localStorage.setItem('StudentArr',a)
        window.location.href='index.html'
    })
})
   
