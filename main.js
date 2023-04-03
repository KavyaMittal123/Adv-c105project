Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera= document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="capture_img" >';
    });
}

console.log("ML5 Version= ",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/32yVjX2gx/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model is loaded");
}

function checkimg(){
    img= document.getElementById("capture_img");
    classifier.classify(img,gotResult);
}

function gotResult(error , result){
    if (error){
        console.log(" Error ");
    }
    else{
        console.log(result);
        document.getElementById("resultobjname").innerHTML="Object= "+result[0].label;
        document.getElementById("resultobjaccuracy").innerHTML="Accuracy= "+(result[0].confidence*100).toFixed(2)+"%";
    }
}