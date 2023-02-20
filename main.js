function startclassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BoOMSeVN5/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
    console.log("error");
    }
    else{
    console.log(results);
    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML = "I Can Hear - " + results[0].label;
document.getElementById("result_label").style.color = "rgb("+ random_number_r + ","+ random_number_g + ","+ random_number_b+")";
document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_confidence").style.color = "rgb("+ random_number_r + ","+ random_number_g + ","+ random_number_b+")";

img  = document.getElementById("animal_img");

if(results[0].label=="Dog"){
    img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksZdjXNJFg5Fif1azKlr9S6vTXQEO7lTFeNCEG2PrlUnKbEk9nlQ7g1suzMXvIOHH5GY&usqp=CAU";
}
else if(results[0].label=="Cat"){
    img.src="https://media.istockphoto.com/id/1097490360/vector/vector-illustration-of-cute-black-cat.jpg?s=612x612&w=0&k=20&c=Ef0qYl79aZJ6NJXJVbJ0onjXVNnSyqrN_TKPjieAIGE=";
}
else if(results[0].label=="Elephant"){
    img.src="https://www.shutterstock.com/image-vector/adorable-baby-elephant-vector-illustration-260nw-1929090011.jpg";
}
else if(results[0].label=="Lion"){
    img.src="https://cdn1.vectorstock.com/i/1000x1000/02/15/funny-lion-cartoon-vector-1310215.jpg";
}
else{
img.src="https://saltwaterco.com/wp-content/uploads/2018/09/ear.gif";
}
    }}