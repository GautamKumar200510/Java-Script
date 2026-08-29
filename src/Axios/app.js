let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    // console.log("nutton was clicked");

    let fact= await getFacts();
    console.log(facts);
    let p=document.querySelector("#result");
    p.innerText = fact;
});


let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
        // console.log(res.data.fact);
    } catch (e) {
        console.log("error--", e);
        return "No facts found";
    }
}