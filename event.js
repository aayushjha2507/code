const eventnames={
    Birthdayparties:"Birthdayparties",
Weddings:"Weddings",
Anniversaries:"Anniversaries",
Reunions:"Reunions"
}
let a=document.querySelectorAll(".event select")
for(let sel of a){
    for(const key in eventnames){
        let n= document.createElement("option")
        n.innerText=key
        n.value=key
        sel.append(n)
    }
}
let b=document.querySelectorAll(".sel button")
let c=document.querySelector(".nonveg")

b.forEach((e)=>{
    console.log(e)
    e.innerText="NO"
    e.addEventListener("click",()=>{
       if(e.innerText=="NO"){
        c.classList.remove("nonveg")
        e.innerText="YES"
        }
       else{
        e.innerText="NO"
        c.classList.add("nonveg")
       }
        
    })
})

let d=document.querySelector(".no button")
let d1=document.querySelector(".lab")
let d2=document.querySelector(".tatt")
let c1=100
d.addEventListener("click",()=>{
    d.style.background="aqua"
        d.disabled=true
        many.disabled=true
        thrice.disabled=true
        quad.disabled=true
    pent.disabled=true
    d1.classList.remove("lab")
    c1++
        
    })

let many=document.querySelector(".many button")
let many1=document.querySelector(".lab2")
let many2=document.querySelector(".tatt2")
let c2=200
many.addEventListener("click",()=>{
    many.disabled=true
    many.style.background="aqua"
    thrice.disabled=true
    d.disabled=true
    quad.disabled=true
pent.disabled=true
many1.classList.remove("lab2")
    c2++
  })
let thrice=document.querySelector(".thrice button")
let thrice1=document.querySelector(".lab3")
let thrice2=document.querySelector(".tatt3")
let c3=300
thrice.addEventListener("click",()=>{
    thrice.style.background="aqua"
    thrice.disabled=true
    quad.disabled=true
    d.disabled=true
    many.disabled=true
pent.disabled=true
thrice1.classList.remove("lab3")
    c3++
})
let quad=document.querySelector(".quad button")
let quad1=document.querySelector(".lab4")
let quad2=document.querySelector(".tatt4")
let c4=400
quad.addEventListener("click",()=>{
    quad.style.background="aqua"
    quad.disabled=true
    pent.disabled=true
    d.disabled=true
        many.disabled=true
        thrice.disabled=true
       quad1.classList.remove("lab4") 
    c4++
})
let pent=document.querySelector(".pent button")
let pent1=document.querySelector(".lab5")
let pent2=document.querySelector(".tatt5")
let c5=500
pent.addEventListener("click",()=>{
    pent.style.background="aqua"
    pent.disabled=true
    d.disabled=true
    many.disabled=true
    thrice.disabled=true
    quad.disabled=true
    pent1.classList.remove("lab5")
    c5++
})
 let calculate=document.querySelector(".calculate button")  
 let hun=document.querySelector(".hun")
 let twohun=document.querySelector(".twohun")
 let threehun=document.querySelector(".threehun")
 let fourhun=document.querySelector(".fourhun")
 let fivehun=document.querySelector(".fivehun")
 let r1=document.querySelector(".radio1")
 let r2=document.querySelector(".radio2")
 let r3=document.querySelector(".radio3")
 let r4=document.querySelector(".radio4")
 let r5=document.querySelector(".radio5")
 let r6=document.querySelector(".radio6")
 let r7=document.querySelector(".radio7")
const fun=()=>{
    if(d2.value<50 || d2.value>100){
         alert("wrong input")
        reload()
        }
   else if(c1==101){
       hun.classList.remove("hun")
     for(const val of a){
        val.disabled=true
     }
     for(const val of b){
        val.disabled=true
     }
      d2.disabled=true
     r1.disabled=true
     r2.disabled=true
     r3.disabled=true
     r4.disabled=true
     r5.disabled=true
     r6.disabled=true
     r7.disabled=true
    }
else if(many2.value<101 || many2.value>200){
    alert("wrong input")
    reload()
}
    else if(c2==201){

        twohun.classList.remove("twohun")
        for(const val of a){
            val.disabled=true
         }
         for(const val of b){
            val.disabled=true
         }
         many2.disabled=true
         r1.disabled=true
         r2.disabled=true
         r3.disabled=true
         r4.disabled=true
         r5.disabled=true
         r6.disabled=true
         r7.disabled=true
    }
    else if(thrice2.value<201 || thrice2.value>300){
        alert("wrong input")
        reload()
    }
    else if(c3==301){
        threehun.classList.remove("threehun")
        for(const val of a){
            val.disabled=true
         }
         for(const val of b){
            val.disabled=true
         }
      thrice2.disabled=true
      r1.disabled=true
      r2.disabled=true
      r3.disabled=true
      r4.disabled=true
      r5.disabled=true
      r6.disabled=true
      r7.disabled=true
    }
    else if(quad2.value<301 || quad2.value>400){
        alert("wrong input")
        reload()
    }
    else if(c4==401){
        fourhun.classList.remove("fourhun")
        for(const val of a){
            val.disabled=true
         }
         for(const val of b){
            val.disabled=true
         }
         quad2.disabled=true
         r1.disabled=true
         r2.disabled=true
         r3.disabled=true
         r4.disabled=true
         r5.disabled=true
         r6.disabled=true
         r7.disabled=true
    }
    else if(pent2.value<401 || pent2.value>500){
        alert("wrong input")
        reload()
    }
    else if(c5==501){
       fivehun.classList.remove("fivehun")
       for(const val of a){
        val.disabled=true
     }
     for(const val of b){
        val.disabled=true
     }
     pent2.disabled=true
     r1.disabled=true
     r2.disabled=true
     r3.disabled=true
     r4.disabled=true
     r5.disabled=true
     r6.disabled=true
     r7.disabled=true
    }
    
}
calculate.addEventListener("click",fun)
function reload(){
    location.reload(true)
}
