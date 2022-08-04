const links = $('a')
links.each(function (){
    console.log($(this).attr('href'))
    const url = $(this).attr('href');
    const thumbnail = youtube.generateThumbnailUrl(url) 
    const img = $('<img>').attr('src' , thumbnail)
    $(this).prepend(img)
    console.log(img.attr('src')) 
})



