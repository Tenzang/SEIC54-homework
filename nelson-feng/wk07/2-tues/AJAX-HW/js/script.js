const getIdentity = function () {
    $.ajax('https://randomuser.me/api/').done(function (data){
        const picture = data.results[0].picture.large;
        const name = data.results[0].name.first;
        const surname = data.results[0].name.last;
        const email = data.results[0].email;
        const phone = data.results[0].phone;
        $('#image').attr('src',picture);
        $('#name').text(`${name} ${surname}`);
        $('#email').text(email);
        $('#phone').text(phone);
    });

};

const getSpeech = function (subject) {
    $.ajax(`https://en.wikipedia.org/api/rest_v1/page/summary/${subject}`).done(function (data){
        const topicTitle = data.title;
        const topic = data.extract;
        $('#blurbtitle').text(topicTitle);
        $('#blurb').text(topic);

    });

};

$('#random').on('click', function(){
    getIdentity();
});

$('#speech').on('submit', function(event){
    event.preventDefault();
    const subject = $('#topic').val();
    getSpeech(subject);
});