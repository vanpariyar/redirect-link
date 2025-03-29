var url_string = window.location.href; 
var url = new URL(url_string);
var type = url.searchParams.get("type");
var value = url.searchParams.get("value");
console.log(type);

if( type && url ) {
    window.location.replace(`${type}:${value}`);
}