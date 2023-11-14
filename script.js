const zorluk = document.getElementById('select')
const tahmin = document.getElementById('tahmin')
const btn = document.getElementById('btn')
const sonuc = document.getElementById('sonuc')
const badge = document.getElementById('hak')



document.title = `Tahmin Oyunu`
btn.disabled = true
tahmin.disabled = true
let random
zorluk.addEventListener('change',function zorlukSec(){
    random = Math.round(Math.random()*Number(zorluk.value))
    btn.disabled = false
    tahmin.disabled = false
    console.log(random)
})

let hak = 3
btn.addEventListener('click',isYapan)
tahmin.addEventListener('keypress',function(e){
    if(e.keyCode == 13){
        isYapan()
    }
})



function isYapan(){
    let kullaniciTahmin = Number(tahmin.value)
    if(isNaN(tahmin.value)){        
        durumKontrol('Sorunlu musun?',['text-primary'],'text-danger')
        btnIcin(true,'Küstüm',['btn-primary'],'btn-danger')
    }
    hak--
    document.title = `Tahmin Oyunu - ${hak}`
    badge.textContent = hak
    if(random == kullaniciTahmin){
        document.title = `Tahmin Oyunu - KAZANDIN`
        durumKontrol('Doğru bilgin',['text-primary','text-danger'],'text-success')
        btnIcin(true,'Kazandın !',['btn-primary', 'btn-danger'],'btn-success')
    }else if(random > kullaniciTahmin){
        durumKontrol('Daha büyük bir sayı girin','text-primary','text-danger')
    }else if(random < kullaniciTahmin){
        durumKontrol('Daha küçük bir sayı girin','text-primary','text-danger')
    }
    if(hak == 0 && random != kullaniciTahmin){
        sonuc.textContent = 'Kaybettin !'
        btnIcin(true,'Kaybettin!','btn-primary','btn-danger')
    }
}

function durumKontrol(content,remove,add){
    sonuc.textContent = content
    for(let i of remove){
        sonuc.classList.remove(i)
    }
    sonuc.classList.add(add)
}

function btnIcin(dis,win,classRemove,classAdd){
    btn.disabled = dis
    btn.textContent = win
    for(let i of classRemove){
        btn.classList.remove(i)
    }
    btn.classList.add(classAdd)
}