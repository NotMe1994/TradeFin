$(document).ready(function () {
    

    function signupHandler(e) {
        e.preventDefault(); 
         
       var dataadmin = JSON.stringify({

            "key": "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",
            "subject": "New user",
            "emailTo": "s.timofeyeva@dinamicka.com", //replace email!
            "emailFrom": "info@dinamicka.com", 
            "html": '<strong> New user signed up! </strong> ' + 
                '<p>Name: ' + $('#userName').val() + 
                '</p><p>Job: ' + $('#jobTitle').val() +
                '</p><p>Email: ' + $('#userEmail').val() +
                '</p><p>Phone: ' + $('#userPhone').val() + 
                '</p><p>Message: ' + $('#userMessage').val() + '</p>'

        });

        var data = encodeURI(dataadmin);
        var requestData = 'req=' + data;

        
            $.ajax({
                type: 'POST',
                url: 'http://dinamickamail.azurewebsites.net/mail.php',
                data: requestData,
                dataType: 'html',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8'

            })
       
            function _clearVal() {
                $('#userName').val('');
                $('#jobTitle').val('');
                $('#userEmail').val('');
                $('#userPhone').val('');
                $('#userMessage').val(''); 
            }
            _clearVal()

    }

    $('#signup').on('submit', signupHandler); 


})


