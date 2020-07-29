
     document.addEventListener("DOMContentLoaded", function(event) {
     var getStoredName1 = localStorage.sfname;
     var getStoredName2 = localStorage.smname;
     var getStoredName3 = localStorage.slname;
     var getStoredEmail = localStorage.email;
     var getStoredName4 = localStorage.ffname;
     var getStoredName5 = localStorage.fmname;
     var getStoredName6 = localStorage.flname;
     var getStoredName7 = localStorage.mfname;
     var getStoredName8 = localStorage.mmname;
     var getStoredName9 = localStorage.mlname;
     var getStoredGender = localStorage.gender;
     var getStoredPhone = localStorage.num;
     var getStoredAddress1 = localStorage.add1;
     var getStoredAddress = localStorage.add;
     var getStoredState = localStorage.statenames;
     var getStoredCity = localStorage.citynames;
     var getStoredPIN = localStorage.pcode;

     console.log(getStoredName1, getStoredName2, getStoredName3, getStoredName4, getStoredName5, getStoredName6,getStoredName7, getStoredName8, getStoredName9, getStoredEmail, getStoredPhone, getStoredGender, getStoredState, getStoredCity, getStoredPIN);
           if(getStoredName1 !==undefined || getStoredName2 !== undefined || getStoredName3 !== undefined || getStoredName4 !== undefined || getStoredName5 !== undefined || getStoredName6 !== undefined || getStoredName7 !== undefined || getStoredName8 !== undefined || getStoredName9 !== undefined || getStoredEmail !== undefined || getStoredPhone !== undefined || getStoredGender !== undefined || getStoredAddress !== undefined || getStoredCity !== undefined || getStoredState !== undefined || getStoredPIN !== undefined){
           document.getElementById("sfname").value=getStoredName1;
           document.getElementById("smname").value=getStoredName2;
           document.getElementById("slname").value=getStoredName3;
           document.getElementById("ffname").value=getStoredName4;
           document.getElementById("fmname").value=getStoredName5;
           document.getElementById("flname").value=getStoredName6;
           document.getElementById("mfname").value=getStoredName7;
           document.getElementById("mmname").value=getStoredName8;
           document.getElementById("mlname").value=getStoredName9;
           document.getElementById("gender").value=getStoredGender;
           document.getElementById("num").value=getStoredPhone;
           document.getElementById("add").value=getStoredAddress;
           document.getElementById("add1").value=getStoredAddress1;
           document.getElementById("statenames").value=getStoredState;
           document.getElementById("citynames").value=getStoredCity;
           document.getElementById("pcode").value=getStoredPIN;
           }

     })

     // Set local storage on click of next button

     var getNextButton = document.getElementById("nextButton");

     getNextButton.addEventListener("click",function(){

         localStorage.sfname=document.getElementById("sfname").value=get
         localStorage.smname=document.getElementById("smname").value=get
         localStorage.slname=document.getElementById("slname").value=get
         localStorage.ffname=document.getElementById("ffname").value=get
         localStorage.fmname=document.getElementById("fmname").value=get
         localStorage.flname=document.getElementById("flname").value=get
         localStorage.mfname=document.getElementById("mfname").value=get
         localStorage.mmname=document.getElementById("mmname").value=get
         localStorage.mlname=document.getElementById("mlname").value=get
         localStorage.gender=document.getElementById("gender").value=get
         localStorage.num=document.getElementById("num").value=getSto
         localStorage.add=document.getElementById("add").value=getSto
         localStorage.add1=document.getElementById("add1").value=getSt
         localStorage.statenames=document.getElementById("statenames").value
         localStorage.citynames=document.getElementById("citynames").value=
         localStorage.pcode=document.getElementById("pcode").value=getS
         })
