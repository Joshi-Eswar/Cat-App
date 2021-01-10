let c=[{
    img:"https://i.pinimg.com/originals/bc/78/4f/bc784f866bb59587b2c7364d47735a25.jpg",
    name:"vendy",
    breed:"What greater gift than the love of a cat.",
    description: " Say Goodbye to Allergie Well, not for you. But if you have kids or have kids on the way, having a pet at a young age can lower their risk of getting allergies. Not only to pet hair but according to the National Institute of Health pet exposure at a young age can also prevent other types of common allergies such as allergy to dust mites ragweed and grass."



},{
    img:"https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg",
    name:"roxy",
    breed:"In a cat's eye, all things belong to cats.",
    description: " Ever wonder why cats love to play? Since they don't hunt for their food, it's believed kitties have an abundance of energy stored up and release it through playtime."


},{
    img:"https://now.tufts.edu/sites/default/files/190814_ask_cats_scruffing_lg.jpg",
    name:"speedy",
    breed:"A cat will be your friend, but never your slave.",
    description: " Plenty of apartments allow cats because they’re quiet, so they are less likely to wake the neighbors up when someone rings your doorbell. "


},{
    img:"https://www.cats.org.uk/media/3236/choosing-a-cat.jpg",
    name:"sparrow",
    breed:"No home is complete without the pitter patter of kitty feet. ",
    description: "Cats do sleep a lot (more on that later), but even when they're snoozing, they still stay super alert. They're actively hearing and smelling things while asleep, so that they're able to pounce on a pest at a moment's notice. "


},{
    img:"https://images.ctfassets.net/440y9b545yd9/4ZP0InpIOw3MPh2NFW9jM4/09f008f8c5608c7587effffbcf03e655/shutterstock_752719666__1_.jpg",
    name:"laser",
    breed:"Like all pure creatures, cats are practical.",
    description: "Don't be fooled by all the fluff and fur, cats are natural predators. Despite being domesticated, they still have that hunter instinct — and will keep your home free of mice."


}];
image=document.querySelector(".image");
person=document.querySelector(".person");

job=document.querySelector(".job");

review=document.querySelector(".review");
next=document.querySelector(".nextt")

rand=document.querySelector(".rand")

prev=document.querySelector(".prevv")


  


indexer=0
 window.addEventListener("DOMContentLoaded",function(){
    let item=c[indexer];
    image.src=item.img;
    person.textContent=item.name;
    job.textContent=item.breed;
    review.textContent=item.description;

 });



function pro(){
    let item1=c[indexer];
    image.src=item1.img;
    person.textContent=item1.name;
    job.textContent=item1.breed;
    review.textContent=item1.description;
}
next.addEventListener("click",function(){
    indexer++;
    if(indexer>4){
        indexer=0
    }
    pro();
});
prev.addEventListener("click",function(){
    indexer--;
    if(indexer<0){
        indexer=c.length-1;
    }
    pro();
});
rand.addEventListener("click",function(){
    indexer=Math.floor(Math.random()*4)
    console.log(indexer);
    
    pro();
});


