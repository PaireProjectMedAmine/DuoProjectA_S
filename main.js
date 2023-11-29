var StudentArray = []; // Add this line to declare StudentArray

$(document).ready(function () {
    var Admin = ["dhibamine@gmail.com", "123"];
    function each(arr, fun) {
        for (let i = 0; i < arr.length; i++) {
            fun(arr[i])
        }
    }

    // super user
    var std = [
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
        {
            firstName: "ha",
            lastName: "dhib",
            clas: 1,
            email: "ha@5.com",
        },
        {
            firstName: "ha",
            lastName: "dhib",
            clas: 1,
            email: "ha@5.com",
        },
        {
            firstName: "ha",
            lastName: "dhib",
            clas: 1,
            email: "ha@5.com",
        },
        {
            firstName: "ha",
            lastName: "dhib",
            clas: 1,
            email: "ha@5.com",
        },
        {
            firstName: "ha",
            lastName: "dhib",
            clas: 1,
            email: "ha@5.com",
        },
        
    ];

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

    // Example of creating an admin
    var admin = createStudent("aminess", "dhib", 5, "dh@gmail.com");
    console.log(admin);
    admin.add()
    /* std[0].showInfo() */
   /*  admin.updateName(0,'ss') */
  /*   admin.remouve(0) */
    // function display students 
    // now i need to make 
  function DisplayStudent() {
    for (let i = 0; i < std.length; i++) {
        $("#row").append(`<div id="card">
        <img src="/images/maleStudent.png" alt="">
        <div>${std[i].firstName}</div>
        <div>${std[i].lastName}</div>
        <div>${std[i].clas}</div>
        <div class="btn">
            <div id="btn1">
                <button type="button">Update</button>
            </div>
            <div id="btn2">
                <button type="button">Delete</button>
            </div>
        </div>
    </div>`);
    }
  }
  DisplayStudent()
    console.log("done");
});
