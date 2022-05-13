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
    console.log(data);
  } catch (error) {
    console.log(data);
  }
};
data();
