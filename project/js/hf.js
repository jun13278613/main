document.getElementById("login").addEventListener("mouseover",()=>{
    document.getElementById("loginbox").removeAttribute('hidden')
})
document.getElementById("loginbox").addEventListener("mouseleave",()=>{
    document.getElementById("loginbox").setAttribute('hidden',true)
})

document.getElementById("sech").addEventListener('click',()=>{
    if(document.getElementById("sechbox").hidden==true){
        document.getElementById("sechbox").removeAttribute('hidden')
    }else if(document.getElementById("sechbox").hidden==false)
    document.getElementById("sechbox").setAttribute('hidden',true)
})

let menu=document.getElementById("menu1");
menu.addEventListener("click",()=>{
    let tmp=document.getElementById("open");
    if(tmp.hidden==true){
        tmp.removeAttribute("hidden");
    }else if(tmp.hidden==false){
        tmp.setAttribute("hidden",true)
    }
})
