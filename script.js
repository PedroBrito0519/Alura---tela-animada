import { Cards } from './cards'
import { Icones } from './icones'
import { Footer } from '.footer'

window.onload = () => {

    const animaCards = new Cards();
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));

    const icones = new Icones();
    icones.animaIcones();

    const footer = new Footer();
    footer.efeitoOnda();

}