var url_string = window.location.href; 
var url = new URL(url_string);
var type = url.searchParams.get("type");
var value = url.searchParams.get("value");
console.log(type);

switch( type ){
    case "mailto":
        window.location.replace(`${type}:${value}`);
    case "tel":
        window.location.replace(`${type}:${value}`);
}