function notification(sms, email){
    console.log("Process Starts");
    sms();
    email();
}

notification(function sms() {
    alert('Send sms');
},
    function email(){
        alert('Send email');
    });

    function notification1(ex1, ex2){
        console.log("Process Started");
        ex1();
        ex2();
    }

    notification1(function ex1()
    {
        alert('This is ex1 of callback function');
    },
       function ex2(){
           alert('This ex2 of callback function');
       });
