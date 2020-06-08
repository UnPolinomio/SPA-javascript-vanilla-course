import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Header from "../templates/Header";

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

async function router() {
    const header = null || document.getElementById('Header')
    const content = null || document.getElementById('Content')
    header.innerHTML = await Header()
}

export default router