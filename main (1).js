function draw() {
    check_sketch() 
            if(stroke=='black'|| stroke=='red'){
                line(30,40,25,50)
                answer_holder {"set"};
                <p id="label">Score: </p>
                }
            }

function check_sketch() 
    if(condition){
        counter++
        span = time "Timer"();
        var timer_counter
        set timer_counter() = 0;
        timer_check value = 400;
        if (condition) {
            
        timer_value = completed;
        var timer_check ("");
        var answer_holder ("");
            
        }
}

function updateCanvas() {

    Math.floor(1, 5, 8, 12, 16);
    console.log(quick_draw_data_set);
    background("white");
}

function setUp() {
    canvas = createCanvas(280, 280);
    canvas.center();

}

function updateCanvas(){
}

function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw() {

    strokeWeight(13);

    strokeColor(blue);

    if (mouseIsPressed) {
        Line(pmouseX, pmouseY, mouseX, mouseY);
     }
 
     function classifyCanvas() {
         classifier.classify(canvas, gotResult);
     }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult (error, results) {
    if(error) {
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'label :' + results[0].label;

    document.getElementById('confidence').innerHTML = 'confidence :' + Math.round(results[0].confidence * 100) + '%';

    utterThis = SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}