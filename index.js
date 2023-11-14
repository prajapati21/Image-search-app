const accessKey = "Lkf9JV8bl44xispUeslbsuF2JZlkKO8yHCe3ObuE7xA";

const formEl = document.querySelector("form");
const searchInputKl = document.querySelector(".search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreBtn = document.querySelector(".show-more-btn");
let page = 1

const searchImages = async () => {
      const searchInput = searchInputKl.value;
      const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchInput}&client_id=${accessKey}`;
      const response = await fetch(url);
      const data = await response.json();
      if(page === 1)
      {
            searchResultsEl.innerHTML = "";
      }
      const result = data.results;
      console.log(result);
      result.map((item,index)=>{
            searchResultsEl.innerHTML +=`
            <div class="search-result">
            <img src="${item.urls.small}" alt="">
            <a href="${item.links.html}">
            ${item.alt_description}
            </a>
      </div>
            `;
      });
      page ++;
      if(page > 1)
      {
            showMoreBtn.style.display = "block";
      }
    
}
formEl.onsubmit = (e) => {
      e.preventDefault();
      page = 1;
      searchImages();
    }
    showMoreBtn.onclick = () =>{
      searchImages();
    }