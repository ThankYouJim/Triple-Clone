function image(id, name) {
    this.id = id;
    this.name = name;
}

var allImages = [];
var folder = "images/";

var id = 0;
$.ajax({
    url: folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if (val.match(/\.(jpe?g|png|gif)$/)) {
                //$("body").append("<img src='" + folder + val + "'>");
                allImages.push(new image(id++, val));
            }
        });
    }
});

for(var i in allImages)
    console.log(allImages);