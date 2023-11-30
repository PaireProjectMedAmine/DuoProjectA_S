// Add this line to declare StudentArray

$(document).ready(function () {
    var Admin = ["dhibamine@gmail.com", "123"];
    function each(arr, fun) {
        for (let i = 0; i < arr.length; i++) {
            fun(arr[i])
        }
    }
    // super user
    var data = [
        {
            firstName: "amine",
            lastName: "dhib",
            clas: 1,
            email: "dhibmedamine@5.com",
        },
        {
            firstName: "aziz",
            lastName: "dhib",
            clas: 1,
            email: "dhibaziz@5.com",
        },
        {
            firstName: "ha",
            lastName: "dhib",
            clas: 1,
            email: "ha@5.com",
        },
        {
            firstName: "aziz",
            lastName: "dhib",
            clas: 1,
            email: "dhibaziz@5.com",
        },
        {
            firstName: "ha",
            lastName: "dhib",
            clas: 1,
            email: "ha@5.com",
        },
        
        
    ];
    // update the student array to local storage !
    function saveDataStudentFirst(obj) {
        var localObj = {
            firstName: obj.firstName,
            lastName: obj.lastName,
            clas: obj.clas,
            email: obj.email,

        }
        var StudentArray = data;
        StudentArray.push(localObj)
        localStorage.setItem('studentArr',JSON.stringify(StudentArray))
    }
    // ok ! 

    // get data student and i need to make readable 
    function getDataStudentFormLocal () {
       if (localStorage.length === 0) {
            return []
       } else
       var backup = localStorage.getItem('studentArr')
       console.log("this is the currecnt localstorage for now",JSON.parse(backup));
      return  JSON.parse(backup)
    }
    /* console.log(ar);
    console.log("inital ar", ar);
    
    console.log(555);  */

    
   

    // Function for creating students
    function createStudent(firstName, lastName, clas, email) {
        var obj = {
            id: id(), // Use the id function to generate a unique ID
            firstName: firstName,
            lastName: lastName,
            clas: clas,
            email: email,
            updateName: updateName,
            updatelastName: updatelastName,
            updateClass: updateClass,
            add: add,
            remouve: remouve,
            showInfo: showInfo,
        };

        return obj;
    }

    // Function to generate unique IDs
    var id = (function () {
        var count = 0;

        return function () {
            return count++;
        };
    })();

    // Functions to update student properties
    // i cant each in the array and get the id !!!!
    var updateName = function (id, firstName) {
        each(StudentArray, function (e) {
            if (e.id === id) {
                this.firstName = firstName;
            }
        });
    };

    var updatelastName = function (id, lastName) {
        each(StudentArray, function (e, i) {
            if (e.id === id) {
                e.lastName = lastName;
            }
        });
    };

    var updateClass = function (id, clas) {
        each(StudentArray, function (e, i) {
            if (e.id === id) {
                e.clas = clas;
            }
        });
    };
    // i cant push the to the array except when i use the this
    var add = function () {
        StudentArray.push(this);
    };
    // the object of in the Student array was deleted , but in the display it dont 
    var remouve = function () {
        var target  = this.id 
        each(StudentArray, function (e, i) {
            if (e.id === target) {
                StudentArray.splice(i, 1);
            }
        });
    };
    var showInfo = function () {
        return  "the student : " + this.lastName + " , " + this.firstName + " in the class : " + this.clas + "."
    }

    // this data is add manualy i need to make it run with the inputs of the create student html page 
/*     var admin = createStudent("aminess", "dhib", 5, "dh@gmail.com");
    var ad = createStudent("ami", "dhib", 5, "dh@gmail.com"); 
    console.log(admin ,"admin");
    saveDataStudentFirst(admin)
    saveDataStudentFirst(ad)
    console.log("this is the data");
    getDataStudentFormLocal() */


     /*  ar.push(studentobj) */
     /*  console.log('updated 1',ar);  
      localStorage.setItem('studentArr',JSON.stringify(ar))
      var test = localStorage.getItem('studentArr')
      var ar1 = JSON.parse(test)
      console.log('updated 2 arr1 :',ar1);
    console.log(admin);  

   var backup = localStorage.getItem('studentArr')
    var array = JSON.parse(backup)
    console.log(array); 
 */
  /*   function storageStudent(obj) {
        
    var studentobj = {
        firstname : obj.firstName,
        lastName: obj.lastName,   
        clas: obj.clas,
        email: obj.email,
    }

    } */


    // Example of creating an admin
    /* var admin = createStudent("aminess", "dhib", 5, "dh@gmail.com");
    std.push(admin)
    localStorage.setItem('studentArr',JSON.stringify(std))
    console.log(admin);
    admin.add() */
    /* std[0].showInfo() */
   /*  admin.updateName(0,'ss') */
  /*   admin.remouve(0) */
    // function display students 
    // now i need to make 
   
  function DisplayStudent() {
    // get the data from local storage 
    var arr = getDataStudentFormLocal()
    for (let i = 0; i <  arr.length; i++) {
        $("#row").append(`<div id="card">
        <img src="/images/maleStudent.png" alt="">  
        <div>${arr[i].firstname}</div>
        <div>${arr[i].lastname}</div>
        <div>${arr[i].cla}</div>
        <div class="btn">
            <div id="btn+$(i)">
                <button type="button">Update</button>
            </div>
            <div id="btn2+$(i)">
                <button type="button">Delete</button>
            </div>
        </div>
    </div>`);
    }
  }
  // i need to get the data from the iput button in the sudent arr 
  DisplayStudent()
    console.log("done");
    document.querySelector('#create-button').onclick = function () {
        window.location.href = 'CreateStudent.html'
    }
});
