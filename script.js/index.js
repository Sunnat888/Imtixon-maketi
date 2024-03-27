let URL = "http://localhost:3000/card"


fetch(URL).then((response) => {
    return response.json()
}).then((data)=>{
    data.map((item)=> {
        const{img,title,name,dataLoad} = item;
        document.querySelector('.card').innerHTML+=`
        <img src=${img}></img>
        <h3> ${title}</h3>
        `
    })
})