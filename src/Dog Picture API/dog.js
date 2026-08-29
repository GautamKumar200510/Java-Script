let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    let link = await getImage();

    // console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src",link);
    console.log(link);
    // // let p = document.querySelector("#result");
    // // p.innerText = fact;
});

async function getImage() {
    try {
        let res = await axios.get(url2);
        console.log(res.data.message);
        return res.data.message;
    } catch (e) {
        console.log("error -- ", e);
        return "No Image found";
    }
}