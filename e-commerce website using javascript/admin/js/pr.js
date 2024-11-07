let allCatData = JSON.parse(localStorage.getItem("catInfo"));
let tr = `<option>--Select Category--</option>`;
allCatData.map((i) => {
  tr += `<option value="${i.id}">${i.name}</option>`;
});
console.log(tr);
document.getElementById("prcatid").innerHTML = tr;

let prData = [];

const savePr = () => {
  let allPrData = JSON.parse(localStorage.getItem("prInfo"));
  let length = allPrData != null ? allPrData.length + 1 : 1;

  let cpname = document.prfrm.prcat.value;
  let pname = document.prfrm.prname.value;
  let price = document.prfrm.prprice.value;
  let discription = document.prfrm.dis.value;
  let pimage = localStorage.getItem("productImage");

  let productId = document.prfrm.proid.value;

  if (productId != "") {
    let result = allPrData.map((i) => {
      if (i.id == productId) {
        (i.catProName = cpname),
          (i.prodcutName = pname),
          (i.productPrice = price),
          (i.productDis = discription),
          (i.productImg = pimage != null ? pimage : i.productImg);
      }
      return i;
    });
    prData = result;
  } else {
    let obj = {
      id: length,
      catProName: cpname,
      prodcutName: pname,
      productPrice: price,
      productDis: discription,
      productImg: pimage,
    };
    prData.push(obj);
  }
  document.prfrm.proid.value = "";
  localStorage.setItem("prInfo", JSON.stringify(prData));
  console.log(prData);
  document.prfrm.reset();
  document.getElementById("image").src = "";
  localStorage.removeItem("productImage");

  disp();
};

const disp = () => {
  let allPrData = JSON.parse(localStorage.getItem("prInfo"));
  let tr = " ";
  allPrData.map((i) => {
    allCatData.map((j) => {
      if (j.id == i.catProName) {
        i.catname = j.name;
      }
      return i;
    });
    tr += `<tr><td>${i.id}</td>
               <td>${i.catname}</td>
               <td>${i.prodcutName}</td>
               <td>${i.productPrice}</td>
               <td><img src=${i.productImg} height="50px" width="50px"></td>
               <td class="d-flex flex-column ">
               <button class="btn btn-info" onclick="editPr(${i.id})"><i class="fa fa-pen"></i></button>&nbsp;
               <button class="btn btn-danger" onclick="deletePr(${i.id})">Dlt</button></td></tr>`;
  });
  console.log(tr);
  document.getElementById("tblPrData").innerHTML = tr;
};
disp();

const deletePr = (id) => {
  let allPrData = JSON.parse(localStorage.getItem("prInfo"));
  let arr1 = allPrData.filter((i) => {
    return i.id != id;
  });

  let j = 1;
  a = arr1.map((i) => {
    i.id = j++;
    return i;
  });
  localStorage.setItem("prInfo", JSON.stringify(arr1));
  disp();
};

const editPr = (id) => {
  let allPrData = JSON.parse(localStorage.getItem("prInfo")); //1
  let editedVal = allPrData.find((i) => {
    return i.id == id;
  }); //2-it is generraly used for edited value show in form
  document.prfrm.prcat.value = editedVal.catProName; //3
  document.prfrm.prname.value = editedVal.prodcutName; //3
  document.prfrm.prprice.value = editedVal.productPrice; //3
  document.prfrm.dis.value = editedVal.productDis; //3
  document.getElementById("image").src = editedVal.productImg;
  document.querySelector("#proid").value = id; //3-it is stored edited field
  disp(); //in hidden field bcz it is used for
}; //edited data to compare id withproid

const dispImage = (event) => {
  var reader = new FileReader();
  reader.onload = function () {
    document.getElementById("image").src = reader.result;
    localStorage.setItem("productImage", reader.result);
  };
  reader.readAsDataURL(event.target.files[0]);
};
