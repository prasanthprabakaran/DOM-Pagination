// https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json

let container=document.createElement("div");
container.className="container";

let heading=document.createElement("div");
heading.className="heading";

let h1=document.createElement("h1");
h1.id="title";
h1.innerHTML="DOM Pagination Task"

let p=document.createElement("p");
p.id="description";
p.innerHTML="This is DOM Pagination Task";

heading.append(h1,p);


let div=document.createElement("div");
div.className="table-responsive";

let table=document.createElement("table");
table.id="pages";
table.className="table table-bordered";
let thead=document.createElement("thead");
thead.className="thead-dark";

let tr1 =document.createElement("tr");
let th1=createelem("th","ID");
let th2=createelem("th","Name");
let th3=createelem("th","Email");

function createelem(elementname,value){
    let ele=document.createElement(elementname);
    ele.innerHTML=value;
    return ele;
}

tr1.append(th1,th2,th3);
thead.append(tr1);

let tbody=document.createElement("tbody");
tbody.id="data-output";

table.append(thead,tbody);
div.append(table);
container.append(heading,div);
document.body.append(container);





let api=fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
console.log(api);
api.then((data)=>data.json())
.then((value)=>{
    console.log(value);
    result(value);
})
.catch((error)=>console.log(error));

function result(res){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    let members=res;
    members.forEach((element)=>{
        out += `<tr> <td>${element.id}</td> <td>${element.name}</td> <td>${element.email}</td> </tr>`
    });
    placeholder.innerHTML=out;
        
}

