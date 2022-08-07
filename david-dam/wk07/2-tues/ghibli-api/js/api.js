const dictionary = {
    Arrietty: "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
    "Castle in the Sky": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "Earwig and the Witch": "790e0028-a31c-4626-a694-86b7a8cada40",
    "From Up on Poppy Hill": "45db04e4-304a-4933-9823-33f389e8d74d",
    "Grave of the Fireflies": "12cfb892-aac0-4c5b-94af-521852e46d6a",
    "Howl's Moving Castle": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
    "Kiki's Delivery Service": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "My Neighbor Totoro": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "My Neighbors the Yamadas": "45204234-adfd-45cb-a505-a8e7a676b114",
    "Only Yesterday": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
    "Pom Poko": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
    Ponyo: "758bf02e-3122-46e0-884e-67cf83df1786",
    "Porco Rosso": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
    "Princess Mononoke": "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
    "Spirited Away": "dc2e6bd1-8156-4886-adff-b39e6043af0c",
    "Tales from Earthsea": "112c1e67-726f-40b1-ac17-6974127bb9b9",
    "The Cat Returns": "90b72513-afd4-4570-84de-a56c312fdf81",
    "The Red Turtle": "d868e6ec-c44a-405b-8fa6-f7f0f8cfb500",
    "The Tale of the Princess Kaguya": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
    "The Wind Rises": "67405111-37a5-438f-81cc-4666af60c800",
    "When Marnie Was There": "5fdfb320-2a02-49a7-94ff-5ca418cae602",
    "Whisper of the Heart": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3"
}

const fetch = function (title) {
    $.ajax('https://ghibliapi.herokuapp.com/films/' + dictionary[title]).done(function (data){
        console.log(data)

        $('h1#title').html(`${ data.title }`);
        $('#cover').attr('src', data.image);
        $('p#description').html(`${ data.description }`);

    })
}

$('#search').on('submit', function (event) {
    event.preventDefault();
    const title = $('#title').val();
    fetch(title);

})
