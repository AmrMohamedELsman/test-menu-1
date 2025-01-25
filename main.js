
let slider = document.getElementsByTagName("div")[2];
let s2 = document.getElementsByTagName('span')[3];

let closePro =  document.getElementById("closePro");



slider.addEventListener("click" , function(){
    let mianDive = document.createElement('div');
    let mianLinks = document.createElement('div');
  
  
    mianDive.className = 'mianDive';
    mianLinks.className = 'mianLinks';
    let links = [
        { text: 'Services', id: 'services' },
        { text: 'Portfolio', id: 'portfolio' },
        { text: 'About', id: 'about' },
        { text: 'Stores', id: 'stores' },
        { text: 'Contact', id: 'contact' }
    ]

    s2.style.width = '100%';
    s2.style.transition = ' 500ms'; 

    links.forEach(link=>{
        let div = document.createElement('div');
        div.textContent = link.text;
        div.addEventListener('click' ,function(){
            document.getElementById(link.id).scrollIntoView({ behavior: 'smooth' });
        })
        mianLinks.appendChild(div);
    })


    mianDive.appendChild(mianLinks);
    document.body.append(mianDive);
    
    s2.style.width = '100%';
    s2.style.transition = '500ms';

    mianDive.addEventListener("click" , function(){
        mianLinks.style.display = 'none';
        s2.style.width = '50%';
    })
    
    
})


// show and haied content

// evre time click to show btn add 3 cards

let showBtn = document.getElementById('showBtn');
let miandiv2 = document.getElementById('miandiv2');
let showLessBtn = document.getElementById("showlessBtn");

showBtn.onclick = function(){
    let arr = [
        {amges : "img2"},
        {amges : "img3"},
        {amges : "img4"}
    ];

    let portContent;
    let img ;
    let h2 ;
    let p;

    for(let i = 0 ; i < 3 ; i++){
        portContent = document.createElement('div');
        img = document.createElement('div');
        h2 = document.createElement('h2');
        p = document.createElement('p');
        
        portContent.className = 'portContent';
        img.className = arr[i].amges;
        
        h2.textContent = 'Project Here';
        p.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, praesentium.';

        portContent.appendChild(img);
        portContent.appendChild(h2);
        portContent.appendChild(p);
        
        miandiv2.appendChild(portContent);
    }

    showBtn.style.display = "none";
    showLessBtn.style.display = "block";
    miandiv2.style.display = "flex";

}

showLessBtn.onclick = function (){
    miandiv2.style.display = "none";
    showLessBtn.style.display = "none";
    showBtn.style.display = "block";
}


// stores

function show(e){
    let showProduct = document.getElementById("showProduct");
    let proImg = document.getElementById("proImg");

    let urlimg = e.dataset.img;

    showProduct.style.display = "block";
    proImg.style.backgroundImage = `url(${urlimg})`;
    proImg.style.backgroundSize = "cover";
    proImg.style.backgroundRepeat = "no-repeat";
    proImg.style.width = " 50%";
    proImg.style.height = "200px";
    proImg.style.marginRight = "10px";
}

closePro.onclick = function(){
    showProduct.style.display = "none";
}