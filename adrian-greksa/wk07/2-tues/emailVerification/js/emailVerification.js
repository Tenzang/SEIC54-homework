const $table = $('.contents table')

const validateEmail = function (email) {
    $.ajax(`https://api.eva.pingutil.com/email?email=${ email }`).done(function (response) {
        info = response.data
        console.log(info);

        $table.empty();

        for (let key in info) {
            const treatedKey = key.replace('_', ' ')
            const $tableRow = $(`<tr><td>${ treatedKey }:</td></tr>`)
            const $tableCell = $(`<td>${ info[key] }<td></tr>`).css('color', 'red');
            
            if ( info[key] ) {
                $tableCell.css('color', 'green')
            };
            $tableRow.append($tableCell)
            $table.append($tableRow);
        };
    });
};

$('#verify').on('submit', function(event) {
    event.preventDefault();

    const email = $('#email-value').val();
    validateEmail(email);
});

// ('true'.map(l=>l).join('') === 'true')? true : true