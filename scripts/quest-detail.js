function display_quest_info() {
    let params = new URL(window.location.href); // get URL of search bar
    let ID = params.searchParams.get("quest_id"); // get value for quest "id"

    db.collection("quests").doc(ID).get()  // get the data with the id from the collection called "quests"
        .then(doc => {
            var quest_name = doc.data().quest_name;          // get the quest name
            var quest_rating = doc.data().rate;              // get value of the "details" key
            var image_name = doc.data().image_name;          // get the name of the image
            var quest_place = doc.data().location_name;      // get the name of the location
            var quest_price = doc.data().cost;               // get the price of the quest
            var quest_description = doc.data().description;  // gets the description field
            
            // update contents
            $(`.quest_name`).text(quest_name);
            $(`.quest_rating`).text('★'.repeat(quest_rating));
            $('.quest_image').attr('src', `./images/${image_name}.jpg`);
            $(`.quest_place`).text(quest_place);
            $('.quest_price').text('$'.repeat(quest_price));
            $(`.quest_description`).text(quest_description);
            $(`#complete_quest_pop_up .pop_up_confirm_button`).attr('onclick', `location.href='./quest-completion.html?quest_id=${ID}'`);
        })
}

function switch_buttons_and_pop_ups() {
    $('.quest_accept_button').click(function() {
        $('#quest_accepted_pop_up').removeClass('d-none');
        $('#details_go_here').addClass('opacity-25');
    })
    $('#quest_accepted_pop_up .pop_up_close_button').click(function() {
        $(this).closest('.pop_up').addClass('d-none');
        $('.quest_accept_button').addClass('d-none');
        $('.quest_complete_button, .quest_drop_button').removeClass('d-none');
        $('#details_go_here').removeClass('opacity-25');
    })
    $('.quest_drop_button').click(function () {
        $('#drop_quest_pop_up').removeClass('d-none');
        $('#details_go_here').addClass('opacity-25');
    })
    $('#drop_quest_pop_up .pop_up_cancel_button').click(function () {
        $(this).closest('.pop_up').addClass('d-none');
        $('#details_go_here').removeClass('opacity-25');
    })
    $('#drop_quest_pop_up .pop_up_confirm_button').click(function () {
        $(this).closest('.pop_up').addClass('d-none');
        $('#quest_dropped_pop_up').removeClass('d-none');
    })
    $('#quest_dropped_pop_up .pop_up_close_button').click(function () {
        $(this).closest('.pop_up').addClass('d-none');
        $('.quest_accept_button').removeClass('d-none');
        $('.quest_complete_button, .quest_drop_button').addClass('d-none');
        $('#details_go_here').removeClass('opacity-25');
    })
    $('.quest_complete_button').click(function() {
        $('#complete_quest_pop_up').removeClass('d-none');
        $('#details_go_here').addClass('opacity-25');
    })
    $('#complete_quest_pop_up .pop_up_cancel_button').click(function() {
        $(this).closest('.pop_up').addClass('d-none');
        $('#details_go_here').removeClass('opacity-25');
    })

}

$(document).ready(function() {
    display_quest_info();
    switch_buttons_and_pop_ups();
})