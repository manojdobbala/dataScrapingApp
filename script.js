$( document ).ready(function() {
$.ajax(
    {
        url: 'output.json',
        dataType: 'json',
        async: true,
        data:
        {},
        success: function(response)
        {
            var data = response;
            console.log(response);         
        }
    });
});