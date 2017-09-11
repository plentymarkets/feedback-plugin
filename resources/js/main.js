$(document).ready(function() {

});


// this is the id of the form
$("#feedbacks #createFeedback").submit(function(e) {

    var formFields = {};
    $.each(
        $('#feedbacks #createFeedback').serializeArray(),
        function (_, kv) {
            formFields[kv.name] = kv.value;
        }
    );

    // ajax call
    $.ajax({
        type: "POST",
        url: '/rest/feedbacks/feedback',
        data: JSON.stringify(formFields),
        xhrFields: {
            withCredentials: true
        },
        success: function(data)
        {
            location.reload();
        },
        contentType: "application/json; charset=utf-8",
        dataType: "json"
    });

    e.preventDefault();
});