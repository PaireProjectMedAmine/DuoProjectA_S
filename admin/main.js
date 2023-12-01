
$(document).ready(function () {
    var Admin = ["dhibamine@gmail.com", "123"];
    function each(arr, fun) {
        for (let i = 0; i < arr.length; i++) {
            fun(arr[i])
        }
    }

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
        localStorage.setItem('StudentArr',JSON.stringify(StudentArray))
    }
    // ok ! 

    // set data student and i need to make readable 
    function setDataStudentFormLocal(array) {
        localStorage.setItem('StudentArr',JSON.stringify(array))
        console.log('done')
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

    function DisplayStudent() {
        $("#row").empty();
        // get the data from local storage 
        var arr = localStorage.getItem('StudentArr') ? JSON.parse(localStorage.getItem('StudentArr')) : [];
        
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            $("#row").append(`<div id="card">
            <img src="/images/maleStudent.png" alt="">  
            <div>${arr[i].firstname}</div>
            <div>${arr[i].lastname}</div>
            <div>${arr[i].cla}</div>
            <div class="btn">
                <div class="div-btn-1">
                    <button class="btn-update" type="button" value="${i}">Update</button>
                </div>
                <div class="div-btn-2">
                   <button class="btn-delete" style="margin-top: 11px;" type="button" value="${i}">Delete</button>
                </div>
            </div>
        </div>`);
        }
        $(".btn-delete").on('click', function () {
            var value = $(this).val();
            for (let i = 0; i < arr.length; i++) {
                if (i == value) {
                    arr.splice(i, 1);
                    console.log('DONE');    
                }
            }
            
            localStorage.clear();
            console.log(arr);
            setDataStudentFormLocal(arr);
            
            DisplayStudent();
        })
    
        $(".btn-update").on('click', function () {
            var value = $(this).val();
            for (let i = 0; i < arr.length; i++) {
                if (i == value) {
                    localStorage.setItem('std', JSON.stringify(arr[i]));
                    console.log('done add for the update');
                }
            }
            window.location.href = '../studentUpdate/updateStudent.html';
        });
    }
    document.querySelector('#create-button').onclick = function () {
        window.location.href = '../studentCreation/CreateStudent.html'
    }
    DisplayStudent()
});

