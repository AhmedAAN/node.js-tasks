// url = https://newsapi.org/v2/everything?q=tesla&from=2023-07-15&sortBy=publishedAt&apiKey=2f7ce219784f47418d18bf5ce5e0b364



async function getNews() {
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-07-15&sortBy=publishedAt&apiKey=2f7ce219784f47418d18bf5ce5e0b364",
    response = await fetch(url),
    news = await response.json()
    return news.articles
}

async function displayNewsCards() {
    const articles = await getNews()
    const container = document.querySelector('.Container')

    for (let article of articles){
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';
        
        card.innerHTML = `
            <img src="${article.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.description}</p>
                <a href="${article.url}" class="btn btn-primary">Read Full Article</a>
            </div>
        `;

        container.appendChild(card)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displayNewsCards().catch((error) => {
      console.error("Error:", error);
    });
  });