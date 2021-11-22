import updateTime from "./clock.js";
import smooth from "./smooth.js";

function getNav(){
    document.addEventListener("DOMContentLoaded", () => {
        const elems = document.querySelectorAll('.sidenav');
        

        M.Sidenav.init(elems);
        

        let page = window.location.hash.substr(1);

        if (page === ""){
            page = "home";
        }
        

        updateTime();
        smooth();
        loadNav();
        loadPage(page);
        

        
        function loadNav(){
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if (this.readyState === 4){
                    if (this.status !== 200){
                        return;
                    }

                    document.querySelectorAll(".show-pages").forEach(elm => {
                        elm.innerHTML = xhttp.responseText;
                    });

                    document.querySelectorAll(".show-pages").forEach(elm => {
                        elm.addEventListener("click", event => {
                            const sideNav = document.querySelector(".sidenav");

                            M.Sidenav.getInstance(sideNav).close();

                            page = event.target.getAttribute("href").substr(1);
                            console.log(page);
                            loadPage(page);
                        })
                    })
                }
            }
            xhttp.open("GET", "nav.html", true);
            xhttp.send();
        }

        function loadPage(page){
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if (this.readyState === 4){
                    const content = document.querySelector("#body-content");
                    if (this.status === 200){
                        
                        content.innerHTML = xhttp.responseText;
                    } else if (this.status === 404){
                        content.innerHTML = "<h1>Page is not found</h1>";
                    } else {
                        content.innerHTML = '<h1>Ups....Page is cannot access</h1>';
                    }
                }
            }
            xhttp.open("GET", `pages/${page}.html`, true);
            xhttp.send();
        }

    });
}

export default getNav;