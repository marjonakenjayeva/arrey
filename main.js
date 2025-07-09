let mevalar = ["olma", "olcha", "gilos", "mandall",]

let uzunligi = alert(`Boshlanishida arreyning uzunligi ${mevalar.length}`)
console.log(mevalar)

let con = confirm("Arreydan bitta malumotni olib tashlamoqchimisiz")

if(con){
    mevalar.pop()
    alert (`Arreyning uzunligi ${mevalar.length}`)
    console.log(mevalar)
}
else{
    alert (`Arreyning uzunligi ${mevalar.length}`)
    console.log(mevalar) 
}
