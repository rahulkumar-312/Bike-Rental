let info = [
    {
        ModelName: 'Scooty',
        ModelYear: '2018',
        Milege: '71kmph',
        Cost: '$10 Per Day',
        Helmet: '1',

    },
    {
        ModelName: 'Triumph',
        ModelYear: '2019',
        Milege: '60kmph',
        Cost: '$8 Per Day',
        Helmet: '1',

    },
    {
        ModelName: 'Royal Enfiled',
        ModelYear: '2021',
        Milege: '40kmph',
        Cost: '$15 Per Day',
        Helmet: '2',

    },
    {
        ModelName: 'Super Bike',
        ModelYear: '2017',
        Milege: '60kmph',
        Cost: '$20 Per Day',
        Helmet: '1',

    },
    {
        ModelName: 'Scooter',
        ModelYear: '1990',
        Milege: '33kmph',
        Cost: '$25 Per Day',
        Helmet: '1',

    }

]


let imgurl = document.querySelector("img").getAttribute("src");

let modelnames = document.querySelectorAll(".model-name");

modelnames.forEach(function(modelname){
    modelname.addEventListener("click", function(event){
        let clickedId = event.target.id;
        imgurl = `./img/${clickedId}.png`;
        document.querySelector("img").setAttribute("src", imgurl);
        console.log(clickedId);
        document.querySelectorAll(".model-info")[1].innerHTML = info[Number(clickedId)-1].ModelName;
        document.querySelectorAll(".model-info")[3].innerHTML = info[Number(clickedId)-1].ModelYear;
        document.querySelectorAll(".model-info")[5].innerHTML = info[Number(clickedId)-1].Milege;
        document.querySelectorAll(".model-info")[7].innerHTML = info[Number(clickedId)-1].Cost;
        document.querySelectorAll(".model-info")[9].innerHTML = info[Number(clickedId)-1].Helmet;


    })
})


function submit(){
    document.getElementById("box-contact-id").innerHTML = `
        <h2 class="submit-h2" >Thank You. Will Get Back to you soon.</h2> 
        
    
    
    `


}


let radiobtns = document.querySelectorAll(".radiobtn");
let model2017_1 = `./img/${4}.png`;

let model2018_1 = `./img/${1}.png`;
let model2018_2 = `./img/${3}.png`;

let model2019_1 = `./img/${2}.png`
let model2019_2 = `./img/${8}.png`
let model2019_3 = `./img/${10}.png`;

let model1990_1 = `./img/${5}.png`;
let model1990_2 = `./img/${7}.png`;
let model1990_3 = `./img/${9}.png`;

radiobtns.forEach(function(radiobutton) {
        radiobutton.addEventListener("click", function(event){
        let radiobuttonclickedid = event.currentTarget.id;
        console.log(radiobuttonclickedid);
        if(radiobuttonclickedid == "1990"){
            document.getElementsByClassName("listimg")[0].setAttribute("src", model1990_1);
            document.querySelectorAll("h3")[1].innerText = "Old Scooter"
            document.querySelectorAll("h4")[0].innerText = "Model 1990"

            document.getElementsByClassName("listimg")[1].setAttribute("src", model1990_2);
            document.querySelectorAll("h3")[2].innerText = "Chetak"
            document.querySelectorAll("h4")[1].innerText = "Model 1990"

            document.getElementsByClassName("listimg")[2].setAttribute("src", model1990_3);
            document.querySelectorAll("h3")[3].innerText = "Red Scooter"
            document.querySelectorAll("h4")[2].innerText = "Model 1990"
            document.querySelector(".bikeslist.bike-img2").style.visibility = "visible"; 
            document.querySelector(".bikeslist.bike-img3").style.visibility = "visible"; 

            document.querySelector(".bikeslist.bike-img4").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img5").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img6").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img7").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img8").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img9").style.visibility = "hidden"; 
            
        }else if(radiobuttonclickedid == "2018"){
            document.getElementsByClassName("listimg")[0].setAttribute("src", model2018_1);
            document.querySelectorAll("h3")[1].innerText = "Scooty"
            document.querySelectorAll("h4")[0].innerText = "Model 2018"

            document.getElementsByClassName("listimg")[1].setAttribute("src", model2018_2);
            document.querySelectorAll("h3")[2].innerText = "Royal Enfield"
            document.querySelectorAll("h4")[1].innerText = "Model 2018"
            document.querySelector(".bikeslist.bike-img2").style.visibility = "visible"; 

        
            document.querySelector(".bikeslist.bike-img3").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img4").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img5").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img6").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img7").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img8").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img9").style.visibility = "hidden"; 

        }else if(radiobuttonclickedid == "2019"){
            document.getElementsByClassName("listimg")[0].setAttribute("src", model2019_1);
            document.querySelectorAll("h3")[1].innerText = "Triumph"
            document.querySelectorAll("h4")[0].innerText = "Model 2019"

            document.getElementsByClassName("listimg")[1].setAttribute("src", model2019_2);
            document.querySelectorAll("h3")[2].innerText = "Yamaha"
            document.querySelectorAll("h4")[1].innerText = "Model 2019"

            document.getElementsByClassName("listimg")[2].setAttribute("src", model2019_3);
            document.querySelectorAll("h3")[3].innerText = "Red Bullet"
            document.querySelectorAll("h4")[2].innerText = "Model 2019"


            document.querySelector(".bikeslist.bike-img2").style.visibility = "visible"; 
            document.querySelector(".bikeslist.bike-img3").style.visibility = "visible"; 


        
            document.querySelector(".bikeslist.bike-img4").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img5").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img6").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img7").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img8").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img9").style.visibility = "hidden"; 


        }else if(radiobuttonclickedid == "2017"){
            document.getElementsByClassName("listimg")[0].setAttribute("src", model2017_1);
            document.querySelectorAll("h3")[1].innerText = "Super Bike"
            document.querySelectorAll("h4")[0].innerText = "Model 2017"

            document.querySelector(".bikeslist.bike-img2").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img3").style.visibility = "hidden"; 
        
            document.querySelector(".bikeslist.bike-img4").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img5").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img6").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img7").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img8").style.visibility = "hidden"; 
            document.querySelector(".bikeslist.bike-img9").style.visibility = "hidden"; 


        }

        
    });
});
