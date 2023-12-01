$(document).ready(function () {
    var StudentArr = localStorage.getItem('StudentArr')?JSON.parse(localStorage.getItem('StudentArr')) : []
    function each(array, func) { 
        for (var i = 0; i < array.length; i++) { 
              func(array[i], i); 
        } 
  }
   
  function map(array, f) { 
        var acc = []; 
        each(array, function(element, i) { 
              acc.push(f(element, i)); 
        }); 
        return acc; 
  }
   
   function filter(array, predicate) {
     var acc = [];
     each(array, function (element, index) {
       
       if (predicate(element, index)) {
         
         acc.push(element);
       }
     });
     return acc;
   }
   
   function reduce(array, f, acc) {
     if (acc === undefined) {
       acc = array[0];
       array = array.slice(1);
     }
     each(array, function (element, i) {
       acc = f(acc, element, i);
     });
     return acc;
   }

     // display the student with the 
    function displayTheMvpStudent(array) {

    var sorted = std =  array.sort((a,b) =>(b.moyenne - a.moyenne))
    for (let i = 0; i < sorted.length ; i++) {
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
    $('#btn').on('click',function () {
        window.location.href = '../admin/index.html'
    })
    
           // this is for the display of student  from the mvp to the low !! 
           displayTheMvpStudent(StudentArr)
           console.log(StudentArr);
        })