function changePhoto() {
    var manReview = document.getElementById("man-review");
    var womenReview = document.getElementById("woman-review");
    
    if(manReview.style.display == "none") {
        manReview.style.display = "flex";
        womenReview.style.display = "none";
    }
    else {
        manReview.style.display = "none";
        womenReview.style.display = "flex";
    }
}