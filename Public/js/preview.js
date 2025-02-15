document.getElementById('thumbnail_input').addEventListener('change', function(event) {
    const file = event.target.files[0]; 
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('thumbnail').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function preview() {
    let content = document.getElementById("content")
    let preview_section = document.getElementById("preview_section");
    let writer_input = document.getElementById("writer_input");
    let title_input = document.getElementById("title_input");
    let description_input = document.getElementById("description_input");
    let categories_input = document.getElementById("categories_input");
    let content_input = document.getElementById("content_input");
    
    let title = document.getElementById("title")
    let writer = document.getElementById("writer") ; 
    let description = document.getElementById("description");
    let categories = document.getElementById("categories");
    

    preview_section.style.display = "block";
    title.innerHTML = title_input.value ;
    writer.innerHTML = writer_input.value ;
    description.innerHTML = description_input.value ;
    categories.innerHTML = categories_input.value ;
    
    content.innerHTML = ""
    content_input.value.split('\n').forEach(paragraph => { 
        content.insertAdjacentHTML("beforeend", `<p class="content " style="padding-left: 2px;">${paragraph}</p>`);
     }); 
    


}