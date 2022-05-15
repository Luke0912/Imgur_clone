let url =
  "https://api.imgur.com/3/gallery/hot/viral/top/1?showViral={{showViral}}&mature={{showMature}}&album_previews={{albumPreviews}}";
const data = async () => {
  try {
    let res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Client-ID ceee765478c547d",
      },
    });
    let data = await res.json();
    for (var i = 0; i < data.data.length; i++) {
      let img = data.data[i].images;
      console.log(img);
      if (img) {
        for (var j = 0; j < img.length; j++) {
          console.log(img[j]);
          appenddata(img[j]);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};
data();

function appenddata(images) {
  var div = document.createElement("div");
  var img = document.createElement("img");
  if (images.link) {
    if (images.type === "image/jpeg") {
      img.setAttribute("class", "ham");
      img.setAttribute("src", images.link);
      div.append(img);
      document.getElementById("images-grid").append(div);
    }
  }
}
