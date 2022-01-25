class photoGallery {
  constructor() {
    this.API_KEY = "563492ad6f91700001000001acc9a047631c4293bf62caa171b07c82";
    this.mainContent = document.querySelector(".main-content");
    this.searchForm = document.querySelector(".header form");
    this.loadMore = document.querySelector(".btn");
    this.logo = document.querySelector(".logo");
    this.pageIndex = 1;
    this.searchValueGlobal = "";
    this.eventHandle();
  }

  eventHandle() {
    document.addEventListener("DOMContentLoaded", () => {
      this.getImg(1);
    });
    this.searchForm.addEventListener("submit", (e) => {
      this.pageIndex = 1;
      this.getSearchedImages(e);
    });

    this.loadMore.addEventListener("click", (e) => {
      this.imageLoadMore(e);
    });
    this.logo.addEventListener("click", ()=>{
      this.pageIndex=1;
      this.mainContent.innerHTML = "";
      this.getImg(this.pageIndex);
    })
  }

  async getImg(index) {
    this.loadMore.setAttribute("data-img", "curated");
    const config = {
      headers: { Accept: "application/json", Authorization: this.API_KEY },
    };
    const response = await axios.get(
      `https://api.pexels.com/v1/curated?page=${index}&per_page=12`,
      config
    );    
    const info = response.data;
    this.GenerateHTML(info.photos);
  }
  // picture represents an array which the value is inputed from info.photo a property of the response data.
  GenerateHTML(pictures) {
    pictures.forEach((picture) => {
      const image = document.createElement("div");
      image.classList.add("image");
      image.innerHTML = `
  <a href ="${picture.src.original}" target ="_blank">
  <img src = "${picture.src.medium}">
  <h3> ${picture.photographer} </h3>
  </a>
  `;
      this.mainContent.append(image);
    });
  }

  async getSearchedImages(e) {
    this.loadMore.setAttribute("data-img", "search");
    e.preventDefault();
    this.mainContent.innerHTML = "";
    const searchValue = this.searchForm.elements.query.value;
    this.searchValueGlobal = searchValue;
    const config = {
      headers: { Accept: "application/json", Authorization: this.API_KEY },
    };
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${searchValue}&page=1&per_page=12`,
      config
    );
    const info = response.data;
    console.log(info);
    this.GenerateHTML(info.photos);
    // this.searchForm is gotten from searchValue
    this.searchForm.reset();
  }

  async getMoreSearchedImages(index){
    const searchValue = this.searchForm.elements.query.value;
    const config = {
      headers: { Accept: "application/json", Authorization: this.API_KEY },
    };
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${this.searchValueGlobal}&page=${index}&per_page=12`,
      config
    );
    const info = response.data;
    console.log(info);
    this.GenerateHTML(info.photos);
  }

  imageLoadMore(e) {
    let index = ++this.pageIndex;
    // e.target here is how we get the attribute from the anchor tag it is different from the form input value
    const loadMoreData = e.target.getAttribute("data-img");
    if (loadMoreData === "curated") {
      this.getImg(index);
    }
    else{
      this.getMoreSearchedImages(index)
    }
  }
}

const gallery = new photoGallery();
