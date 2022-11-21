const navContainer = document.querySelector('.nav-container');

const navigationMarkUp = `
<ul class="nav-items">
    <li class="nav-item"><a href="#" class="nav-link">link 1</a></li>
    <li class="nav-item"><a href="#" class="nav-link">link 2</a></li>
    <li class="nav-item"><a href="#" class="nav-link">link 3</a></li>
    <li class="nav-item"><a href="#" class="nav-link">link 4</a></li>
</ul>
`;

const renderNavigation = () => {
  navContainer.insertAdjacentHTML('afterbegin', navigationMarkUp);
};

export default renderNavigation;