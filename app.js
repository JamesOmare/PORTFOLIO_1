const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

const PageTransitions = () => {
    //Button click toggles active class
   sectBtn.forEach(button => {
       button.addEventListener('click', e => {
           
        toggleBtns(e)
        toggleSections(e)

       })
   });

const toggleBtns = (e) =>
   {
       //remove current active class
       sectBtn.forEach(btn => btn.classList.remove('active-btn'))

       //add new active class to clicked tab
       e.target.classList.add('active-btn')
   }

const toggleSections = (e) =>
   {
       //remove current active classes from section
       allSections.querySelectorAll('.section').forEach(item => {
           item.classList.remove('active')
       })

       //add new class to section
       const selector = e.target.getAttribute('data-id')
       const section = allSections.querySelector(selector)
       section.classList.add('active')
     
   }
   
}

PageTransitions()