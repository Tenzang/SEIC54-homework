document.addEventListener("DOMContentLoaded", function () {
  console.log("document is ready. I can sleep now");

  const getBookTitle = function () {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      const data = JSON.parse(xhr.responseText);
      const thumbnail =
        data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
      const title = data.items[0].volumeInfo.title;

      document.getElementById("title").innerHTML = title;
      // document.getElementById("book-authors").innerHTML = authors;
      document.getElementById("cover").src = thumbnail;
    };

    let title = document.getElementById("bookName").value;
    xhr.open(
      "GET",
      `https://www.googleapis.com/books/v1/volumes?q=title:${title}`
    );
    xhr.send();
  };

  document.getElementById("search").addEventListener("click", getBookTitle);
});
