let kgrngCanvas;
let kgrngCtx;
let infoClickFlag = false;
window.onload = function(){
    document.body.innerHTML = "<canvas id = 'kgrng'></canvas>";
    kgrngCanvas = document.getElementById("kgrng");
    kgrngCtx = kgrngCanvas.getContext("2d");
    changeSize(640, 480);
    changeTitle("kgrng");
    init();
    document.addEventListener('keydown', (event) => {
        const keyname = event.key;
        keydown(keyname);
    });
    kgrngCanvas.addEventListener("click", function(e){
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        kgrngClick(x, y);
    }, false);
    setInterval(kgrngLoop, 20);
}
function getWidth(){
    infoClickFlag = false;
    return kgrngCanvas.width;
}
function getHeight(){
    infoClickFlag = false;
    return kgrngCanvas.height;
}
function changeTitle(title){
    infoClickFlag = false;
    document.title = title;
}
function changeSize(width, height){
    infoClickFlag = false;
    kgrngCanvas.width = width;
    kgrngCanvas.height = height;
}
function kgrngClick(x, y){
    if(infoClickFlag && 400 < x && x < 630 && 440 < y && y < 470){
        window.open('https://kagasan.github.io/kgrng/demo.html', '_blank');
    }
    click(x, y);
}
function kgrngLoop(){
    drawInfo();
    loop();
}
function rgb(r = 255, g = 0, b = 0){
    infoClickFlag = false;
    return "rgb(" + r + "," + g + "," + b + ")";
}
function drawBox(x1, y1, x2, y2, color, thickness = 1){
    infoClickFlag = false;
    const w = x2 - x1;
    const h = y2 - y1;
    if(thickness < 0){
        kgrngCtx.fillStyle = color;
        kgrngCtx.fillRect(x1, y1, w, h);
    }
    else{
        kgrngCtx.lineWidth = thickness;
        kgrngCtx.strokeStyle = color;
        kgrngCtx.strokeRect(x1, y1, w, h);
    }
}
function drawScreen(color = rgb(220, 220, 220)){
    infoClickFlag = false;
    drawBox(0, 0, getWidth(), getHeight(), color, -1);
}
function drawCircle(x, y, r, color, thickness = 1){
    infoClickFlag = false;
    if(thickness < 0){
        kgrngCtx.fillStyle = color;
        kgrngCtx.beginPath();
        kgrngCtx.arc(x, y, r, 0, Math.PI * 2, true);
        kgrngCtx.fill();
    }
    else{
        kgrngCtx.strokeStyle = color;
        kgrngCtx.lineWidth = thickness;
        kgrngCtx.beginPath();
        kgrngCtx.arc(x, y, r, 0, Math.PI * 2, false);
        kgrngCtx.stroke();
    }
}
function drawPolygon(pts, color = "#000000", thickness = 1){
    infoClickFlag = false;
    if(thickness < 0){
        this.kgrngCtx.fillStyle = color;
        this.kgrngCtx.beginPath();
        this.kgrngCtx.moveTo(pts[0].x, pts[0].y);
        for(let i = 1; i < pts.length; i++){
            this.kgrngCtx.lineTo(pts[i].x, pts[i].y);
        }
        this.kgrngCtx.lineTo(pts[0].x, pts[0].y);
        this.kgrngCtx.fill();
    }
    else{
        this.kgrngCtx.strokeStyle = color;
        this.kgrngCtx.lineWidth = thickness;
        this.kgrngCtx.beginPath();
        this.kgrngCtx.moveTo(pts[0].x, pts[0].y);
        for(let i = 1; i < pts.length; i++){
            this.kgrngCtx.lineTo(pts[i].x, pts[i].y);
        }
        this.kgrngCtx.lineTo(pts[0].x, pts[0].y);
        this.kgrngCtx.stroke();
    }
}
function drawLine(x1, y1, x2, y2, color = "#000000", thickness = 1){
    infoClickFlag = false;
    kgrngCtx.lineWidth = thickness;
    kgrngCtx.strokeStyle = color;
    kgrngCtx.beginPath();
    kgrngCtx.moveTo(x1, y1);
    kgrngCtx.lineTo(x2, y2);
    kgrngCtx.stroke();
}
function drawString(x, y, text, color = "#000000", size = 16, font = "メイリオ"){
    infoClickFlag = false;
    kgrngCtx.font = "" + size + "px '" + font +"'";
    kgrngCtx.fillStyle = color;
    kgrngCtx.fillText(text, x, y + size);
}
function drawStrings(x, y, texts = [], color = rgb(40, 40, 40), size = 16, font = "メイリオ"){
    infoClickFlag = false;
    for(let i = 0; i < texts.length; i++){
        drawString(x, y + 25 * i, texts[i], color, size, font);
    }
}
function drawInfo(){
    drawScreen();
    drawStrings(20, 20, [
        ">>>Provided functions<<<",
        "getWidth()",
        "getHeight()",
        "changeTitle(title)",
        "changeSize(width, height)",
        "rgb(r, g, b)",
        "drawBox(x1, y1, x2, y2, color, thickness)",
        "drawScreen(color)",
        "drawCircle(x, y, r, color, thickness)",
        "drawPolygon(pts, color, thickness)",
        "drawLine(x1, y1, x2, y2, color, thickness)",
        "drawString(x, y, text, color, size, font)",
        "",
        ">>>Please implement<<<",
        "init()",
        "click(x, y)",
        "keydown(key)",
        "loop()"
    ]);
    drawBox(380, 20, 580, 80, rgb(100, 100, 100), 1);
    drawString(400, 40, "Welcome to kgrng!", rgb(20, 20, 20));
    drawLine(360, 20, 360, 460, rgb(100, 100, 100));
    drawStrings(380, 100, [
        ">>>Example<<<",
        "let px = 100, py = 100;",
        "const bg = rgb(200, 200, 200);",
        "const bl = rgb(250, 0, 0);",
        "function init(){}",
        "function click(x, y){",
        "    px = x;",
        "    py = y;",
        "}",
        "function keydown(key){}",
        "function loop(){",
        "    drawScreen(bg);",
        "    drawCircle(px, py, 5, c, -1);",
        "}"
    ]);

    drawBox(400, 440, 630, 470, rgb(50, 50, 240), -1);
    drawString(420, 445, "Go this example demo.", rgb(240, 240, 240));
    infoClickFlag = true;
}