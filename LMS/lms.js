var moduleName = document.getElementById('module_showcase_1')
var selectedContent = document.getElementById('module_selected_1');
var dropDownContent = document.getElementById('dropdown__content_1');


var objectContainer  = {

    key: 1,
    moduleName: "Module 1",
    moduleLectures: ['lecture 1', 'lecture 2']
        
}

moduleName.addEventListener('click', (e) =>{
    moduleName.style.display  = 'none'
    selectedContent.classList.toggle('active')
    dropDownContent.style.display = 'flex'
})

selectedContent.addEventListener('click' , (e) => {
    moduleName.style.display = 'flex'
    selectedContent.classList.toggle('active')
    dropDownContent.style.display = 'none'
})

// document.addEventListener('click' , (e) => {

//     console.log(e.target);
// })

