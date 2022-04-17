var DomainExtensions = 'com, com.tr, net, org, org.tr, edu.tr, net.tr, tr';

function CheckEmail(){
    var result = false;
    var TxtMailAddress = document.getElementById("TxtMailAddress");

    if(TxtMailAddress !== undefined){
        if (TxtMailAddress !== null) {
            var Email = TxtMailAddress.value;
            if (Email === "") {
                ErrorMail('Type your e-mail address..');
                return;
            }
            //harunakgul@gmail.com
            //harun.akgul@gmail.com
            //harun.akgul@gmail.com.tr
            //array[0]=harun.akgul
            //array[1]=gmail.com
            var MailArray = Email.split('@');
            if (MailArray.length < 2) {
                ErrorMail("Invalid email address.");
            }
            else{
                 if (MailArray[0] === "" || MailArray[1] === "") {
                     ErrorMail("Invalid email address.")
                     return;
                 }
                 else{
                     var Extensions = MailArray[1].split('.');
                     if (Extensions.length > 1) {
                         var SelectedExtension = "";
                        if (Extensions.length === 2) {
                            SelectedExtension = Extensions[1];
                        }
                        else if(Extensions.length === 3){
                            SelectedExtension = Extensions[1] + "." + Extensions[2];
                        }
                        if (SelectedExtension === "") {
                            ErrorMail("Invalid domain address");
                            return;
                        }
                        else{
                            var index = DomainExtensions.indexOf(SelectedExtension);
                            if (index === -1) {
                                ErrorMail("Invalid domain address.");
                                return;
                            }
                            else{
                                ClearErrorMail();
                                result = true;
                            }
                        }
                     }
                     else{
                        ErrorMail("Invalid mail address.")
                     }
                 }
            }        
        }
    }
    return result;
}

function ErrorMail(ErrorMessage) {
    var LblValidMail = document.getElementById("LblValidMail");
    if (LblValidMail !== undefined) {
        if (LblValidMail !== null) {
            LblValidMail.innerHTML = '<b>'+ ErrorMessage +'<b>';
        }
    }
}

function ClearErrorMail() {
    var LblValidMail = document.getElementById("LblValidMail");
    if (LblValidMail !== undefined) {
        if (LblValidMail !== null) {
            LblValidMail.innerHTML = "";
        }
    }
}

function CheckPassword() {
    var result = false;
    var TxtPassword = document.getElementById('TxtPassword');
    var TxtRePassword = document.getElementById('TxtRePassword');
    var LblValidPassword = document.getElementById('LblValidPassword');
    if (TxtPassword !== undefined && TxtRePassword !== undefined) {
        if (TxtPassword !== null && TxtRePassword !== null) {
            var Password = TxtPassword.value;
            var RePassword = TxtRePassword.value;
            if (Password === "" || RePassword === "") {
                alert('Passwords cannot be empty.');
                return;
            }
            if (Password !== RePassword) {
                if (LblValidPassword !== undefined) {
                    if (LblValidPassword !== null) {
                        LblValidPassword.innerHTML = '<b>The passwords you chose are not the same.</b>';
                    }
                }
            } else {
                LblValidPassword.innerHTML = '';
                result = true;
            }
        }
    }
    return result;
}

function CheckForm() {
    var TxtUsername = document.getElementById('TxtUsername');
    if (TxtUsername !== undefined) {
        if (TxtUsername !== null) {
            var Username = TxtUsername.value.trim();
            if (Username === "") {
                alert('Username cannot be empty.');
            } else {
                if (Username.length < 3) {
                    alert('Username must be at least 3 characters.');
                } else {

                    if (!CheckEmail()) {
                        return;
                    }

                    if (!CheckPassword()) {
                        return;
                    }

                    alert('Form Submitted.');

                }
            }
        }
    }
}