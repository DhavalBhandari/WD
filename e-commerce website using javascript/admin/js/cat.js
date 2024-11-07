let catData = []; //2
const saveCat = () => {
  let allCatData = JSON.parse(localStorage.getItem("catInfo")); //6
  let length = allCatData != null ? allCatData.length + 1 : 1; //7

  let cname = document.catfrm.catname.value; //1
  let cid = document.catfrm.catid.value;

  if (cid != "") {
    //update
    let result = allCatData.map((i) => {
      if (i.id == cid) {
        i.name = cname;
      }
      return i;
    });
    catData = result;
  } else {
    //insert
    let obj = {
      id: length,
      name: cname,
    }; //3
    catData.push(obj); //4
  }

  console.log(cname);

  localStorage.setItem("catInfo", JSON.stringify(catData)); //5
  document.catfrm.reset(); //8
  disp();
};

const disp = () => {
  let allCatData = JSON.parse(localStorage.getItem("catInfo")); //1
  let tr = "";
  allCatData.map((i) => {
    tr += `<tr><td>${i.id}</td>
               <td>${i.name}</td>
               <td class="d-flex">
               <button class="btn btn-info" onclick="editCat(${i.id})"><i class="fa fa-pen"></i></button>&nbsp;
               <button class="btn btn-danger" onclick="deleteCat(${i.id})">Dlt</button></td></tr>`;
  }); //2
  document.getElementById("tblCatData").innerHTML = tr; //3
};
disp();

const deleteCat = (id) => {
  let allCatData = JSON.parse(localStorage.getItem("catInfo"));
  // allCatData.splice(id-1,1)
  let arr = allCatData.filter((i) => {
    return i.id != id;
  });

  let j = 1;
  a = arr.map((i) => {
    i.id = j++;
    return i;
  });
  localStorage.setItem("catInfo", JSON.stringify(arr));
  disp();
};

const editCat = (id) => {
  let allCatData = JSON.parse(localStorage.getItem("catInfo"));
  let edited = allCatData.find((i) => {
    return i.id == id;
  });
  document.catfrm.catname.value = edited.name;
  document.catfrm.catid.value = id;
  disp();
};
