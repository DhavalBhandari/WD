let tr = `<li class="nav-item">
            <a class="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                <span class="text-dark" style="width: 130px;">All Products</span>
            </a>
        </li>`;

let allCatData = JSON.parse(localStorage.getItem("catInfo"));

let k = 2;
allCatData.map((i) => {
  tr += `<li class="nav-item">
            <a class="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-${k++}">
                <span class="text-dark" style="width: 130px;">${i.name}</span>
            </a>
        </li>`;
});

document.getElementById("catList").innerHTML = tr;

let allPrData = JSON.parse(localStorage.getItem("prInfo"));
let pr = `<div id="tab-1" class="tab-pane fade show p-0 active">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="row g-4">`;
allPrData.map((j) => {
  pr += `<div class="col-md-6 col-lg-4 col-xl-3">
                                         <div class="rounded position-relative fruite-item">
                                             <div class="fruite-img">
                                                 <img src="${j.productImg}" class="img-fluid w-100 rounded-top" alt="">
                                             </div>
                                             <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">All Category</div>
                                             <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                 <h4>${j.prodcutName}</h4>
                                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                 <div class="d-flex justify-content-between flex-lg-wrap">
                                                     <p class="text-dark fs-5 fw-bold mb-0">${j.productPrice} / kg</p>
                                                     <button onclick="addToCart(${j.id})" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</button>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>`;
});
pr += ` </div>
                                </div>
                            </div>
                        </div>`;
k = 2;
allCatData.map((i) => {
  pr += `<div id="tab-${k++}" class="tab-pane fade show p-0">
                            <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="row g-4">`;
  allPrData.map((j) => {
    if (i.id == j.catProName) {
      pr += `<div class="col-md-6 col-lg-4 col-xl-3">
        <div class="rounded position-relative fruite-item">
            <div class="fruite-img">
                <img src="${j.productImg}" class="img-fluid w-100 rounded-top" alt="">
            </div>
            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${i.name}</div>
            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4>${j.prodcutName}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                <div class="d-flex justify-content-between flex-lg-wrap">
                    <p class="text-dark fs-5 fw-bold mb-0">${j.productPrice} / kg</p>
                    <button onclick="addToCart(${j.id})" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</button>
                </div>
            </div>
        </div>
    </div>`;
    }
  });

  pr += `</div>
            </div>
                    </div>
                        </div>`;
});

document.getElementById("prList").innerHTML = pr;

let cartData = [];
const addToCart = (pid) => {
  let allCartData = JSON.parse(localStorage.getItem("cartData")) ;

  let exist = allCartData.find((i) => i.pid === pid);

  if (exist!=undefined) {
    // Increment quantity if product already exists in cart
    let finalData = allCartData.map((i) => {
      if (i.pid === pid) {
        i.qty += 1;
      }
      return i;
    });
    localStorage.setItem('cartData', JSON.stringify(finalData));
  } 
  else {
    // Add new product to cart if it doesn't exist
    let productInfo = allPrData.find((i) => i.id === pid);
    let obj = {
      cartid: allCartData.length + 1,
      qty: 1,
      pid: pid,
      pname: productInfo.prodcutName,
      price: productInfo.productPrice,
      image: productInfo.productImg,
    };
    allCartData.push(obj);
    localStorage.setItem("cartData", JSON.stringify(allCartData));
  }
  window.location.href = 'cart.html';
};

