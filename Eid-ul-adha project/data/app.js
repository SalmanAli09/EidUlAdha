function calldate() {
    document.getElementById("btn_1").style.display = "none";
    document.getElementById("btn_2").style.display = "none";
    document.getElementById("bth_1").style.display = "none"
    document.getElementById("heading_main").style.display = "none"
    var todaydate = new Date();
    var getdays = todaydate.toDateString();
    var eidDate = new Date("07/10/2022");
    var getdays2 = eidDate.toDateString();
    var Difference_In_Time = eidDate.getTime() - todaydate.getTime();
    var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    document.getElementById("datecontainer").style.display = "block";
    document.getElementById("datecontainer_1").style.display = "block";
    document.getElementById("datecontainer_2").style.display = "block";
    document.getElementById("datecontainer_btn").style.display = "block";
    document.getElementById("datetimecontainer").style.border = "0px";
    document.getElementById("datecontainer").innerHTML =  "Today is : " + '"'+ getdays + '"';
    document.getElementById("datecontainer_2").innerHTML= "Eid will be on : " + '"' + getdays2 + '"';
    document.getElementById("datecontainer_1").innerHTML =    Difference_In_Days + " " + " Days left in EID from now."; 
    
}
function fd() {
    document.getElementById("heading_main").style.display = "none"
    document.getElementById("btn_1").style.display = "none";
    document.getElementById("btn_2").style.display = "none";
    document.getElementById("select").style.display = "none";
    var todaydate = new Date();
    var getdays = todaydate.toDateString();
    var eidDate = new Date("07/10/2022");
    var getdays2 = eidDate.toDateString();
    var Difference_In_Time = eidDate.getTime() - todaydate.getTime();
    var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    document.getElementById("datecontainer").style.display = "block";
    document.getElementById("datecontainer_1").style.display = "block";
    document.getElementById("datecontainer_2").style.display = "block";
    document.getElementById("datecontainer_btn").style.display = "block";
    document.getElementById("datetimecontainer").style.border = "0px";
    document.getElementById("datecontainer").innerHTML =  "Today is : " + '"'+ getdays + '"';
    document.getElementById("datecontainer_2").innerHTML= "Eid will be on : " + '"' + getdays2 + '"';
    document.getElementById("datecontainer_1").innerHTML =   Difference_In_Days + " Days left in EID from now."; 
}
function sd() {
    document.getElementById("heading_main").style.display = "none"
    document.getElementById("btn_1").style.display = "none";
    document.getElementById("btn_2").style.display = "none";
    document.getElementById("select").style.display = "none";
    var todaydate = new Date();
    var getdays = todaydate.toDateString();
    var eidDate = new Date("07/11/2022");
    var getdays2 = eidDate.toDateString();
    var Difference_In_Time = eidDate.getTime() - todaydate.getTime();
    var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    document.getElementById("datecontainer").style.display = "block";
    document.getElementById("datecontainer_1").style.display = "block";
    document.getElementById("datecontainer_2").style.display = "block";
    document.getElementById("datecontainer_btn").style.display = "block";
    document.getElementById("datetimecontainer").style.border = "0px";
    document.getElementById("datecontainer").innerHTML =  "Today is : " + '"'+ getdays + '"';
    document.getElementById("datecontainer_2").innerHTML= "Eid will be on : " + '"' + getdays2 + '"';
    document.getElementById("datecontainer_1").innerHTML =   Difference_In_Days + " Days left in EID from now."; 
    
}
function ld() {
    document.getElementById("heading_main").style.display = "none"
    document.getElementById("btn_1").style.display = "none";
    document.getElementById("btn_2").style.display = "none";
    document.getElementById("select").style.display = "none"
    var todaydate = new Date();
    var getdays = todaydate.toDateString();
    var eidDate = new Date("07/12/2022");
    var getdays2 = eidDate.toDateString();
    var Difference_In_Time = eidDate.getTime() - todaydate.getTime();
    var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    document.getElementById("datecontainer").style.display = "block";
    document.getElementById("datecontainer_1").style.display = "block";
    document.getElementById("datecontainer_2").style.display = "block";
    document.getElementById("datecontainer_btn").style.display = "block";
    document.getElementById("datetimecontainer").style.border = "0px";
    document.getElementById("datecontainer").innerHTML =  "Today is : " + '"'+ getdays + '"';
    document.getElementById("datecontainer_2").innerHTML= "Eid will be on : " + '"' + getdays2 + '"';
    document.getElementById("datecontainer_1").innerHTML =   Difference_In_Days + " Days left in EID from now."; 
    
}

function callCondition(){
    document.getElementById("heading_main").style.display = "none"
    document.getElementById("btn_1").style.display = "none";
    document.getElementById("btn_2").style.display = "none";
    document.getElementById("select").style.display = "flex";
    
}

function calluserinterest(){
    swal({
        title: "Are you sure?",
        text: "If you select that date it can't be changed!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Your Desired DAY has been selected", {
            icon: "success",
          });
        } else {
          swal("You Can Change it now!");
        }
      });
}
