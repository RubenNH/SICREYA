interface Scripts {
    name: string;
    src: string;
}
export const ScriptStore: Scripts[] = [
    {name: 'helpers', src: '../assets/vendor/js/helpers.js'},
    {name: 'config', src: '../assets/js/config.js'},
    {name: 'jquery', src: '../assets/vendor/libs/jquery/jquery.js'},
    {name: 'popper', src: '../assets/vendor/libs/popper/popper.js'},
    {name: 'bootstrap', src: '../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js'},
    {name: 'menu', src: '../assets/vendor/js/menu.js'},
    {name: 'main', src: '../assets/js/main-template.js'},
]