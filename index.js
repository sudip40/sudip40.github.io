GitHubCalendar(".calendar", "sudip40");
    GitHubCalendar(".calendar", "sudip40", { responsive: true });

      function sendEmail(){
            
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "masterreaper7797@gmail.com",
            Password : "A9EFD247EE3D7A0DA5EDA042D4BB2FAE33EF",
            To : 'karmakar.sudip40@gmail.com',
            From : document.getElementById("email").value,
            Subject : document.getElementById("subject").value,
            Body : "Name : "+document.getElementById("name").value
            +"<br> Email : "+document.getElementById("email").value
            +"<br> Phone No : "+document.getElementById("pn").value
            +"<br> Subject : "+document.getElementById("subject").value
            +"<br> Message : "+document.getElementById("message").value
        }).then(
          message => alert("Email Sent Succesfully")
        );
    }
    function func(){
        document.getElementById("check").checked=false;
    }

    document.getElementById("r").onclick=function(){
        console.log("Yes");
        let file='File/Sudip_Karmakar_Resume.pdf';
        let dwnld = document.createElement('a');
        dwnld.href=file;
        dwnld.download=file.substring(file.lastIndexOf('/') + 1);
        dwnld.click();
        url="https://drive.google.com/file/d/1qCMizhMWpfDu2h-4Bxvvi8z729olOyGi/view?usp=sharing";
        window.open(url);
    }
    document.getElementById("resume").onclick=function(){
        console.log("Yes");
        let file='File/Sudip_Karmakar_Resume.pdf';
        let dwnld = document.createElement('a');
        dwnld.href=file;
        dwnld.download=file.substring(file.lastIndexOf('/') + 1);
        dwnld.click();
        url="https://drive.google.com/file/d/1qCMizhMWpfDu2h-4Bxvvi8z729olOyGi/view?usp=sharing";
        window.open(url);
    }