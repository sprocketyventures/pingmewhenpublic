
(function() {

    //
    // Filter the page
    //

    var searchBox = document.querySelectorAll('[id=yschsp]');
    if (searchBox.length <= 0)
        return;
    searchBox = searchBox[0];

    var searchBoxValue = searchBox.getAttribute("value");
    console.log("Searching for " + searchBoxValue);

    httpPostAsync("https://api.pingmewhen.com/api/v1/main/submitsearch", {query: searchBoxValue},
        (r) => {
            var result = r.result;
            if (result.length == 0)
                return;

            var nav = document.querySelectorAll("[id=sf]");
            if (nav.length <= 0)
                return;
            nav = nav[0];

            var pmw = document.createElement('div');
            pmw.style = "padding-top: 5px";

            pmw.innerHTML = "";
            for (var i = 0; i < result.length; ++i) {
                var link_url = "https://www.pingmewhen.com/#/?go=" + encodeURI(result[i]);
                pmw.innerHTML += "<img src='" + iconUrl() + "' width='10' height='10'><span class='st'> Ping Me When <a href='" + link_url + "' style='text-decoration: none;'>" + formatResult(result[i]) + "</a></span>   ";
            }
            nav.parentNode.insertBefore(pmw, nav.nextSibling);

            // Adjust horizontal bar
            var bar = document.querySelectorAll("[id=horizontal-bar]");
            if (bar.length <= 0)
                return;
            bar = bar[0];

            bar.style.paddingTop = '90px';

        }
    );


})();
