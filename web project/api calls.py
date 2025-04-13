import requests

def fetch_news_from_api(api_key, query):
    url = f"https://newsapi.org/v2/everything?q={query}&apiKey={api_key}"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        return data['articles']
    else:
        print(f"Error fetching data: {response.status_code}")
        return None

if __name__ == "__main__":
    api_key = "YOUR_API_KEY"  # Replace with your actual News API key
    query = "innovation"
    articles = fetch_news_from_api(api_key, query)

    if articles:
        for article in articles:
            print(article['title'])
            print(article['url'])
            print(article['publishedAt'])
            print("-" * 20)




            src="https://ww2.eagle.org/content/dam/eagle/Images/new-graphics/1920x1080/innovation-tech-1920x1080.jpg">
          <img class="carousel_photo" src="https://cre8tivecapital.com/wp-content/uploads/2020/11/getty_691886452_405128.jpg">
          <img class="carousel_photo" src="https://s44650.pcdn.co/wp-content/uploads/2024/06/best-financial-innovations-2024-scaled.jpg">
          <img class="carousel_photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3wM8tlWMercQ8_fogKSo5Pl1aVmipnmoFg&s">
          <img class="carousel_photo" src="https://academy.smu.edu.sg/sites/academy.smu.edu.sg/files/insights/Innovation-is-Indispensable-for-Economic-Growth-img.jpg">


          <div id="filters">
    <label for="category">Category:</label>
    <select id="categoryFilter">
        <option value="">All</option>
        <option value="technology">Technology</option>
        <option value="science">Science</option>
        <option value="business">Business</option>
        </option> 
    </select>
    <label for="source">Source:</label>
    <select id="sourceFilter">
        <option value="">All</option>
        <option value="source1">Source 1</option>
        <option value="source2">Source 2</option>
    </select>
</div>
<div id="news-feed"></div>



 <div id="country-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <button class="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Back to Map
          </button>
        </div>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Featured Card</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="featured-card">
        <img src="your-image.jpg" alt="Featured Image" class="featured-image">
        <div class="card-content">
            <h3>Card Title</h3>
            <p>Some descriptive text for the card.  This could be a short summary or a call to action.</p>
            <a href="#" class="cta-button">Learn More</a>
        </div>
    </div>

</body>
</html>
