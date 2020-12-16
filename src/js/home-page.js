import createCategoryMarkup from '../templates/all-category.hbs'

const main = document.querySelector('.section')

export default function renderCategory(page) {
    for (const key in ads) {
        if (ads[key].length !== 0) {
            main.insertAdjacentHTML('afterbegin', createCategoryMarkup(ads[key]))
        }
    }
        
    
}