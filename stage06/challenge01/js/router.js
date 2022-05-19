export class Router {
    routes = {};
    imgs = {}

    add(routeName, page, src) {
        this.routes[routeName] = page;
        this.imgs[routeName] = src
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();

        window.history.pushState({}, "", event.target.href);

        const exit = document.querySelector('.selected')
        if (exit !== null) {
            exit.classList.remove('selected');
        }
        event.path[0].classList.add('selected');

        this.handle();
    }

    async handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404];
        const img = new Image;
        img.src = this.imgs[pathname] || this.imgs[404];

        fetch(route)
            .then(data => data.text())
            .then(img.onload)
            .then(html => {
                document.querySelector('main').innerHTML = html;                

                document.body.classList.remove('animation');
                // document.body.style.backgroundImage = `url("")`;

                setTimeout(() => {                    
                    document.body.classList.add('animation');
                    document.body.style.backgroundImage = `url("${img.src}")`;
                }, "10")
            }
            );
    }
}