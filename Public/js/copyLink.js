const link = document.getElementById("copy_link");
const copied = document.getElementById("copied");
const whatsapp = document.getElementById("whatsapp");
const facebook = document.getElementById("facebook");

link.addEventListener("click", async () =>{
    await navigator.clipboard.writeText(window.location.href);
    copied.style.display = "block"
    setTimeout(() => {
        copied.style.display = "none"
      }, 2000);
});

whatsapp.addEventListener("click",async()=>{
    const message = encodeURIComponent(`Check out this article: ${window.location.href}`);
    whatsapp.href = `https://wa.me/?text=${message}`;
    
})
facebook.addEventListener("click",async()=>{
    const message = encodeURIComponent(`Check out this article: ${window.location.href}`);
    facebook.href = `https://web.facebook.com/v5.0/dialog/share?app_id=542599432471018&href=`;
    
})


