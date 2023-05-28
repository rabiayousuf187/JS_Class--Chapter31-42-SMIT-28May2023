console.log("Chapter 52 Manipulating images and text to onwards");
console.log("Add Class Using JS by ID then ClassName");

function hide(){
    console.log("hide Funcation Call");
    console.log( document.getElementById("img1"));
    
    // document.getElementById("img1").className = "hidden";
    document.getElementById("img1").className += " resize";
}

console.log("Chapter 53: Swapping images");
function swap(){
    console.log( document.getElementById("img2"));
    document.getElementById("img2").className = "resize";
    document.getElementById("img2").src = "https://images3.alphacoders.com/276/276565.jpg";

}
function swapout(id,src){
    console.log( document.getElementById(id));
    document.getElementById("img2").className = "resize";
    document.getElementById("img2").src = src;

}
