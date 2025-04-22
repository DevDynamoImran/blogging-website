// //filter js
// $(document).ready(function(){
//     $(".filter-item").click(function(){
//         const value = $(this).attr("post-filter");
//         if(value == "all") {
//             $(".post-box").show("1000");
//         }else{
//             $(".post-box")
//             .not("." + value)
//             .hide("1000");
//             $(".post-box")
//             .filter("." + value)
//             .show("1000");
//         }
//     });
//     //add active to btn
//     $('.filter-item').click(function(){
//         $(this).addClass("active-filter").siblings().removeClass("active-filter") 
//     });
// });

const filterItem = document.querySelectorAll('.filter-item');
const allPost = document.querySelectorAll('.all');
for(let i=0; i<filterItem.length; i++){
    filterItem[i].addEventListener('click',filterPost.bind(this,filterItem[i]));
}
function filterPost(item){
    activePosition(item);
    for(let i=0; i<allPost.length;i++){
        if(allPost[i].classList.contains(item.attributes.id.value)){
            allPost[i].style.display = "block";
            
        }
        else{
            allPost[i].style.display = "none";
            
        }
    }
}

function activePosition(activeItem){
    for(let i=0;i<filterItem.length; i++){
        filterItem[i].classList.remove('active-filter');
    }
    activeItem.classList.add('active-filter');
}