import {
  badUrlPage,
  homePage
} from './pages.js';
/*import {
  accountPage,
  badUrlPage,
  categoryPage,
  homePage,
  page2,
  page3,
  searchPage,
} from './pages.js';
*/
const routers = [
  {
    path: '/',
    component: homePage,
    meta: { auth: false },
  },
  {
    path: '/page2',
    component: page2,
    meta: { auth: false },
  },
  {
    path: '/page3',
    component: page3,
    meta: { auth: false },
  },
  {
    path: '/account',
    component: accountPage,
    meta: { auth: true },
  },
  {
    path: '/search',
    component: searchPage,
    meta: { auth: false },
  },
  {
    path: '/category',
    component: categoryPage,
    meta: { auth: false },
  },
];
const checkAuth = () => {
  if (sessionStorage.getItem('accessToken') !== null) {
    return false;
  }
  return true;
};
let startState = true;
export const updateHistory = query => {
  let router = routers.find(item => item.path === query);
  if (!router) return;
  if (!router.meta.auth || !checkAuth()) history.pushState(query, null, query);
};
export const updatedContent = () => {
  let router = routers.find(
    item => item.path === history.state || item.path === location.pathname,
  );
  if (!router) {
    badUrlPage();
    return;
  }
  if (!router.meta.auth || !checkAuth()) {
    router.component(); // call component
  } else if (router.meta.auth && checkAuth() && startState) {
    routers[0].component(); // call if no avtorized
    history.pushState(routers[0].path, null, routers[0].path);
  }
  startState = false;
};
export const updatePage = (query, searchQuery) => {
  updateHistory(query);
  if (searchQuery === undefined) {
    updatedContent();
    return;
  }
  location.hash = searchQuery;
};
/*const routers = [
    {
        path:'/',
        component: fun1,
        meta: { auth: false}
    },
    {
        path:'/page1',
        component: fun2,
        meta: { auth: true}
    },
    {
        path:'/page2',
        component: fun3,
        meta: { auth: false}
    },
    {
        path:'/page3',
        component: fun4,
        meta: { auth: false}
    }
];

let auth = true;
let startState = true;

let navbarNav = document.querySelector('.filter__inner');
let title = document.querySelector('.section');
console.log(title, navbarNav)

export function updatePage (e) {
    if (e.target.tagName !== "A") return
    e.preventDefault();
    updateHistory(e);
    updatedContent();
}

function updateHistory(e) {
    const query = e.target.getAttribute('href');
    let router = routers.find( item => item.path === query);
    if (!router) return
    if (!router.meta.auth || !auth) history.pushState(query, null, query)
}

function updatedContent() {
    let router = routers.find( item => item.path === history.state || item.path === location.pathname)
    if (!router) {
        fun5();
        return
    }
    if (!router.meta.auth || !auth) {
        router.component(); 
    }
    else if (router.meta.auth && auth && startState) {
        routers[0].component();
        history.pushState(routers[0].path, null, routers[0].path) 
    } 
    startState = false;
}

window.onpopstate = function(event) {
    updatedContent();
};

navbarNav.addEventListener('click', updatePage);
window.addEventListener('load', updatedContent());

function fun1 () {
    title.innerHTML = 'Home';
}

function fun2 () {
    title.innerHTML = 'Page 1';
}

function fun3 () {
    title.innerHTML = 'Page 2';
}

function fun4 () {
    title.innerHTML = 'Page 3';
}

function fun5 () {
  title.innerHTML = 'Not found';
  badUrlPage();
}*/
