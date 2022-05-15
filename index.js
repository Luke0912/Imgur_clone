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
    console.log(data.data);
    for (var i = 0; i < data.data.length; i++) {
      let img = data.data[i].images;
      let title = data.data[i].title;
      let upvote = data.data[i].ups;
      let comment = data.data[i].comment_count;
      let views = (+data.data[i].views / 1000) | 0;
      // console.log(title);
      if (img) {
        for (var j = 0; j < img.length; j++) {
          // console.log(img[j]);
          appenddata(img[j], title, upvote, comment, views);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};
data();

function appenddata(images, title, upvote, comment, views) {
  var box = document.createElement("div");
  box.className = "box";
  var div = document.createElement("div");
  div.className = "imgDiv";
  var textDiv = document.createElement("div");
  textDiv.className="textDiv"
  var nameDiv = document.createElement("div");
  var tit = document.createElement("div");
  tit.className = "tit";
  var likesDiv = document.createElement("div");
  likesDiv.className = "likesDiv";
  var upvoted = document.createElement("div");
  var commentd = document.createElement("div");
  var viewsd = document.createElement("div");
  var img = document.createElement("img");
  if (images.link) {
    if (images.type === "image/jpeg") {
      img.setAttribute("class", "ham");
      img.setAttribute("src", images.link);
      tit.innerText = title;
      upvoted.innerText = "votes:" + upvote;
      commentd.innerText = "com:" + comment;
      viewsd.innerText = "views:" + views + "K";
      div.append(img);
      nameDiv.append(tit);
      likesDiv.append(upvoted, commentd, viewsd);
      textDiv.append(nameDiv, likesDiv);
      box.append(div, textDiv);
      document.getElementById("images-grid").append(box);
    }
  }
}
