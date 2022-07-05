var hour=new Date().getHours();

if(hour>00&&hour<01){
    document.body.style.backgroundImage="url('photo/0000.jpg')";
    document.body.style.color='white'
    document.body.style.opacity=0.9;
 word='Gece yaridir'
}
else if(hour>01&&hour<02){
    document.body.style.backgroundColor='white'
    document.body.style.backgroundImage="url('photo/01.jpg')";
    document.body.style.color='green'
    document.body.style.opacity=0.8;
    word='Gecedir'
}
else if(hour>02&&hour<03){
    document.body.style.backgroundColor='white'
    document.body.style.backgroundImage="url('photo/02.jpg')";
    document.body.style.color='green'
    document.body.style.opacity=0.8;
    word='Gecedir'
}
else if(hour>04&&hour<05){
    document.body.style.backgroundColor='white'
    document.body.style.backgroundImage="url('photo/05.webh')";
    document.body.style.color='green'
    document.body.style.opacity=0.8;
    word='Seher acilmayib'
}
else if(hour>05&&hour<06){
    document.body.style.backgroundColor='white'
    document.body.style.backgroundImage="url('photo/07.jpg')";
    document.body.style.color=''
    document.body.style.opacity=0.8;
    word='Sabahiniz xeyir'
}
else if(hour>06&&hour<07){
    document.body.style.backgroundColor='white'
    document.body.style.backgroundImage="url('photo/07.jpg')";
    document.body.style.color='green'
    document.body.style.opacity=0.8;
    word='Sabahiniz xeyir'
}
else if(hour>12&&hour<14){
    document.body.style.backgroundColor='yellow'
    document.body.style.backgroundImage="url('photo/download.jpg')";
    document.body.style.color='green'
    document.body.style.opacity=0.7;
    word='Her vaxtiniz xeyir'
}
else if(hour>17&&hour<20){
    document.body.style.backgroundColor='blue'
    document.body.style.backgroundImage="url('photo/20.jpg')";
    document.body.style.color='white'
    document.body.style.opacity=0.7;
    word='Axsaminiz xeyir'
}
else if(hour>20&&hour<22){
    document.body.style.backgroundColor='grey'
    document.body.style.backgroundImage="url('photo/21.jpg')";
    document.body.style.color='white'
    document.body.style.opacity=0.8;
    word='Geceniz xeyir'
}
else{
    document.body.style.backgroundColor='orange'
    document.body.style.backgroundImage="url('photo/good-evening-image-18.jpg')";
    document.body.style.color='black'
    document.body.style.opacity=0.9;
    word='helloo'
}
function Get(){
    document.getElementById('first').innerHTML=word
}
