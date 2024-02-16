window.onload = start; 

function start() {
    let classMenu = document.getElementsByClassName("menu");
    let elementMenu = classMenu[0];
    let classZoom = document.getElementsByClassName("zoom");
    let elementZoom = classZoom[0];
    let classPartNav = document.getElementsByClassName("PartNav");
    let CompanyBtn = classPartNav[0];
    let classZoomPart = document.getElementsByClassName("zoomPart");
    let CompanyPart = classZoomPart[0];
    let classBtnCroix = document.getElementsByClassName("BtnCroix");
    let CompanyCroix = classBtnCroix[0];

    let TeamPart = classZoomPart[1];
    let TeamCroix = classBtnCroix[1];
    let TeamBtn = classPartNav[1];

    let ContextPart = classZoomPart[2];
    let ContextCroix = classBtnCroix[2];
    let ContextBtn = classPartNav[2];

    let MissionsPart = classZoomPart[3];
    let MissionsCroix = classBtnCroix[3];
    let MissionsBtn = classPartNav[3];

    let ResultatsPart = classZoomPart[4];
    let ResultatsCroix = classBtnCroix[4];
    let ResultatsBtn = classPartNav[4];

    CompanyBtn.addEventListener("click", function() {
        elementMenu.classList.add("active");
        elementZoom.classList.add("active");
        CompanyPart.classList.add("active");
    });

    CompanyCroix.addEventListener("click", function() {
        elementMenu.classList.remove("active");
        elementZoom.classList.remove("active");
        CompanyPart.classList.remove("active");
    });

    TeamBtn.addEventListener("click", function() {
        elementMenu.classList.add("active");
        elementZoom.classList.add("active");
        TeamPart.classList.add("active");
    });

    TeamCroix.addEventListener("click", function() {
        elementMenu.classList.remove("active");
        elementZoom.classList.remove("active");
        TeamPart.classList.remove("active");
    });

    ContextBtn.addEventListener("click", function() {
        elementMenu.classList.add("active");
        elementZoom.classList.add("active");
        ContextPart.classList.add("active");
    });

    ContextCroix.addEventListener("click", function() {
        elementMenu.classList.remove("active");
        elementZoom.classList.remove("active");
        ContextPart.classList.remove("active");
    });

    MissionsBtn.addEventListener("click", function() {
        elementMenu.classList.add("active");
        elementZoom.classList.add("active");
        MissionsPart.classList.add("active");
    });

    MissionsCroix.addEventListener("click", function() {
        elementMenu.classList.remove("active");
        elementZoom.classList.remove("active");
        MissionsPart.classList.remove("active");
    });

    ResultatsBtn.addEventListener("click", function() {
        elementMenu.classList.add("active");
        elementZoom.classList.add("active");
        ResultatsPart.classList.add("active");
    });

    ResultatsCroix.addEventListener("click", function() {
        elementMenu.classList.remove("active");
        elementZoom.classList.remove("active");
        ResultatsPart.classList.remove("active");
    });
}
