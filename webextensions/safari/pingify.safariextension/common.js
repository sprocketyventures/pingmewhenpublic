var formatResult = function(result)
{
    result = result.replace(new RegExp('<', 'g'),"{");
    result = result.replace(new RegExp('>', 'g'),"}");
    result = result.replace(new RegExp('{', 'g'),"<span style='background:#dddddd; border: 1px solid #cccccc; border-radius: 3px; padding: 3px; '>");
    result = result.replace(new RegExp('}', 'g'),"</span>");
    return result;
}

var httpPostAsync = function(url, data, callback)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200)
            callback(JSON.parse(xhr.responseText));
    }

    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}

var iconUrl = function() {
    var icon_url;
    if (typeof chrome != "undefined")
        icon_url = chrome.extension.getURL("pingmewhen-32.png");
    else if (typeof browser != "undefined")
        icon_url = browser.extension.getURL("pingmewhen-32.png");
    else if (typeof safari != "undefined")
        icon_url = safari.extension.baseURI + "pingmewhen-32.png";
    return icon_url;
}