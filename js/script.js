var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

var client = contentful.createClient({
  space: 'qeovitnrltf2',
  accessToken: 'zOxrVP7HSAM4vng42avdDqi5Ky7ejGP0ZHvHNWf1d2Q',
});

client.getEntry({content_type: 'wayfair'}).then(function (entry){
console.log(entry)

var item = document.createElement("div");
item.classList.add("header");

var img = document.createElement("img");
  console.log("entry", entry);
  // img.innerHTML = entry.fields.Image;
  img.src = "https:" + entry.fields.hero.fields.file.url;
  item.append(img);
  img.appendChild(item)

  

});

document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("active");
  });