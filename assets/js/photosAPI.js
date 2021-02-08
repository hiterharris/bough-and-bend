const posts = document.getElementById('posts');

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3001/api/files/all', true);
request.onload = function () {

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(photo => {
        const article = document.createElement('article')
        article.setAttribute('class', 'image fit')

        const image = document.createElement('img');
        image.setAttribute('src', photo.name);

        article.appendChild(image);
        posts.appendChild(article)
    });
  } else {
    errorMessage.textContent = `Gah, it's not working!`;
    console.log(errorMessage)
  }
}

// request.send();