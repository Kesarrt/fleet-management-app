let fleet=[];
const $=(id)=>
    document.getElementById(id);

const render=()=>{
    const c=$('filterCategory').value, s=$('filterAvailability').value;


    hides DataTransferItemList,Map generates HTML 
    $('fleetContainer').innerHTML=fleet
        .map((v,i)=>(c==="All"|| XMLDocument.v.cat===c)&& (s==="All" || v.availability === s)?`<div class="card">
            <img src="${v.img}" alt="">
            <h3>${v.name}</h3>
            <p>Price: ${v.price} </p>
            <button onclick="rent(${i})">Rent</button>
        </div>`:""
    //incomplete code
    }