
// ----------------------------------
//      CREATE FEEDBACK
// ----------------------------------
// this is the id of the form
var allowCreateFeedback = true;
$("#feedbacks form.createFeedback").submit(function(e) {

    if(allowCreateFeedback){
        allowCreateFeedback = false;

        var formFields = {};
        $.each(
            $(this).serializeArray(),
            function (_, kv) {
                formFields[kv.name] = kv.value;
            }
        );

        // ajax call
        $.ajax({
            type: "POST",
            url: '/rest/feedbacks/feedback/create',
            data: JSON.stringify(formFields),
            xhrFields: {
                withCredentials: true
            },
            success: function(data)
            {
                location.reload();
            },
            complete: function (){
                allowCreateFeedback = true;
            },
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        });


    }

    e.preventDefault();

});



// ----------------------------------
//      DELETE FEEDBACK
// ----------------------------------

function deleteFeedback(id, deleteReviewTranslation) {
    if (confirm(deleteReviewTranslation)) {
        // ajax call
        $.ajax({
            type: "DELETE",
            url: '/rest/feedbacks/feedback/delete/' + id,
            xhrFields: {
                withCredentials: true
            },
            success: function(data)
            {
                location.reload();
            }
        });
    }
}


// ----------------------------------
//      UPDATE FEEDBACK
// ----------------------------------
//  Put the form in the comment and ajax it
// ----------------------------------
function editFeedback(id, isReply, cancelTranslation, reviewMessageTranslation, editReviewTranslation, titleTranslation) {
    var wrapper = '#feedback-' + id;

    var feedbackId = $(wrapper).data('feedbackid');
    var title = $(wrapper +' .feedback-comment .feedback-comment-title').text();
    var ratingValue = $(wrapper +' .feedback-comment .feedback-comment-rating').data('ratingvalue');
    var message = $(wrapper +' .feedback-comment .feedback-comment-text').first().text();

    $(wrapper +' .feedback-comment').hide();
    $(wrapper +' .feedback-options').hide();

    if(isReply){
        $(wrapper).append('  <form class="feedback-edit" action="" method="">\n' +
            '                    <div class="form-group">\n' +
            '                        <textarea class="form-control" id="message" name="message" rows="3" placeholder="'+reviewMessageTranslation+'">'+message+'</textarea>\n' +
            '                    </div>\n' +
            '                    <input type="hidden" name="id" class="feedbackId" value='+feedbackId+'>\n' +
            '                    <button type="submit" class="btn btn-primary">'+editReviewTranslation+'</button>\n' +
            '                    <a class="btn btn-secondary feedback-edit-cancel" data-id="'+feedbackId+'">'+cancelTranslation+'</a>\n' +
            '                </form>');
    }else{
        $(wrapper).append('  <form class="feedback-edit" action="" method="">\n' +
            '                    <div class="stars">\n' +
            '                        <input class="star star-5" id="star-'+feedbackId+'-5" type="radio" value="5" name="ratingValue">\n' +
            '                        <label class="star star-5" for="star-'+feedbackId+'-5"></label>\n' +
            '                        <input class="star star-4" id="star-'+feedbackId+'-4" type="radio" value="4" name="ratingValue">\n' +
            '                        <label class="star star-4" for="star-'+feedbackId+'-4"></label>\n' +
            '                        <input class="star star-3" id="star-'+feedbackId+'-3" type="radio" value="3" name="ratingValue">\n' +
            '                        <label class="star star-3" for="star-'+feedbackId+'-3"></label>\n' +
            '                        <input class="star star-2" id="star-'+feedbackId+'-2" type="radio" value="2" name="ratingValue">\n' +
            '                        <label class="star star-2" for="star-'+feedbackId+'-2"></label>\n' +
            '                        <input class="star star-1" id="star-'+feedbackId+'-1" type="radio" value="1" name="ratingValue">\n' +
            '                        <label class="star star-1" for="star-'+feedbackId+'-1"></label>\n' +
            '                    </div>\n' +
            '                    <div class="form-group">\n' +
            '                        <input type="text" class="form-control" id="title" name="title" value="'+title+'" placeholder="'+titleTranslation+'" required>\n' +
            '                    </div>\n' +
            '                    <div class="form-group">\n' +
            '                        <textarea class="form-control" id="message" name="message" rows="3" placeholder="'+reviewMessageTranslation+'">'+message+'</textarea>\n' +
            '                    </div>\n' +
            '                    <input type="hidden" name="id" class="feedbackId" value='+feedbackId+'>\n' +
            '                    <button type="submit" class="btn btn-primary">'+editReviewTranslation+'</button>\n' +
            '                    <a class="btn btn-secondary feedback-edit-cancel" data-id="'+feedbackId+'">'+cancelTranslation+'</a>\n' +
            '                </form>');
    }


    $(wrapper).find('input#star-'+feedbackId+'-'+ratingValue).prop("checked", true);
}


// this is the id of the form
$(document).on('submit','form.feedback-edit',function(e){

    var feedbackId = $(this).find('.feedbackId').val();

    var formFields = {};
    $.each(
        $(this).serializeArray(),
        function (_, kv) {
            formFields[kv.name] = kv.value;
        }
    );

    // ajax call
    $.ajax({
        type: "PUT",
        url: '/rest/feedbacks/feedback/update/' + feedbackId,
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

$(document).on('click','.feedback-edit-cancel',function(e) {
    var wrapper = '#feedback-' + $(this).data('id');

    $(wrapper +' .feedback-comment').show();
    $(wrapper +' .feedback-options').show();
    $(wrapper +' .feedback-edit').remove();

});




// ----------------------------------
//     PAGINATION
// ----------------------------------

var feedbackTargetId = itemVariationId;
var feedbackIgnorePageLoad = 1;

// initial feedbacks list load
feedbackLoadMore(feedbackTargetId, 1);

function feedbackClickLoadMore(feedbackPage){
    if(feedbackPage > feedbackIgnorePageLoad){
        $(".feedback-loadmore").slideUp().fadeOut();
        feedbackLoadMore(feedbackTargetId, feedbackPage);
    }
    feedbackIgnorePageLoad = feedbackPage;
}



// ----------------------------------
//     VIEW REPLIES
// ----------------------------------

function toggleViewReplies(feedbackId){
    $("#feedback-replies-" + feedbackId).slideToggle();
}

function toggleAddReply(feedbackId){
    $("#feedback-add-reply-" + feedbackId).slideToggle();
}



// ----------------------------------
//     Helper functions
// ----------------------------------

function feedbackLoadMore(targetId, page){

    $("#feedback-list-reviews").append( $('<div>').load("/feedbacks/feedback/helper/feedbacklist/"+ targetId +"/"+ page) );

}




