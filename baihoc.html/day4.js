//lấy ra thẻ div có id là app
// const appElement =document.getElementById("app");
// const text = "hello world"
//hàm ínertAdjacentHTML(): sẽ thêm 1 chuối html vào một vị trí nào đó trong thẻ html
//cú pháp element.insertAdjacentHTML(positive.text);
//position:vị trí muốn thêm chuỗi HTML vào (beforebegin,afterbegin,beforeend,afterend)
//text : chuỗi HTMl 
// appElement.innerHTML =`
//    <div class="child">
//   <   h1 id="text">${text}</h1>
//    </div>
// `;
//    // sau khi render xong , ta có thể sử dụng JS đê lấy ra các thẻ html đã render để thao tác 
//   const h1Element =document.getElementById("text");
//   h1Element.addEventListener("click",() => {
//     alert("hello world")
//   })
// appElement.insertAdjacentHTML("beforeend",`
//         <div class="child">
//         <h1 id="text"> ${text}</text></h1>
//         </div>
// `);


movies.forEach((movie) => {
    document.getElementById("app").insertAdjacentHTML("beforeend",`
    <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
    <a href="#_" class="block">
        <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/fruit.jpg">
    </a>
    <div class="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
        <span>Lifestyle</span>
    </div>
    <h2 class="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">${movie.title} ${movie.id}</a></h2>
    <p class="text-sm text-gray-500">Learn the attributes you need to gain in order to build a future and create a life that you are truly happy with.</p>
    <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Mary Jane</a> · <span class="mx-1">April 17, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
</div>   
    `)
});