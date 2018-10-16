
(function() {

    //
    // Filter the page
    //

    var searchBox = document.querySelectorAll('[id=search_form_input]');
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

            var nav = document.querySelectorAll("[class=header__search-wrap]");
            if (nav.length <= 0)
                return;
            nav = nav[0];

            var pmw = document.createElement('div');
            pmw.style = "padding-left: 100px; padding-top: 5px; padding-bottom: 5px";

            pmw.innerHTML = "";
            for (var i = 0; i < result.length; ++i) {
                var link_url = "https://www.pingmewhen.com/#/?go=" + encodeURI(result[i]);
                pmw.innerHTML += "<img src='" + iconUrl() + "' width='10' height='10'><span class='st'> Ping Me When <a href='" + link_url + "' style='text-decoration: none;'>" + formatResult(result[i]) + "</a></span>   ";
            }
            nav.parentNode.insertBefore(pmw, nav.nextSibling);
        }
    );


})();
