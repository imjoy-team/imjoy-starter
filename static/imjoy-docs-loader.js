window.setupImJoyDocs = function ({
    prefix,
    repo,
    editGithubUrl,
    alias
}) {
    prefix = prefix || '';
    window.$docsify = window.$docsify || {
        name: "ImJoy Docs",
        nameLink: '/',
        logo: "https://imjoy.io/static/img/imjoy-logo-black.svg",
        basePath: prefix.startsWith('/') ? prefix : '/',
        loadSidebar: true,
        coverpage: false,
        auto2top: true,
        autoHeader: false,
        subMaxLevel: 4,
        maxLevel: 5,
        alias: alias,
        repo: repo,
        homepage: '/README.md',
        search: {
            paths: 'auto',
            placeholder: 'Search',
            noData: 'No Results.',
            depth: 2
        },
        tabs: {
            persist: true, // default
            sync: true, // default
            theme: 'classic', // default
            tabComments: true, // default
            tabHeadings: true // default
        }
    };
    const urls = [
        "/static/vue.css",
        "/static/style.css",
        "/static/docsify-run-code.js",
        "/static/docsify-copy-code.min.js",
        "/static/docsify.min.js",
        "/static/prism-bash.min.js",
        "/static/prism-json.min.js",
        "/static/prism-python.min.js",
        "/static/search.min.js",
        "/static/external-script.min.js",
        "/static/docsify-pagination.min.js",
        "/static/docsify-tabs@1.js",
        "/static/zoom-image.min.js",
        "/static/docsify-sidebar-collapse.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js",
        "/static/imjoy-app.js"
    ]

    function loadScript(src) {
        return new Promise(function (resolve, reject) {
            var s;
            s = document.createElement('script');
            s.src = src;
            s.onload = resolve;
            s.onerror = reject;
            document.head.appendChild(s);
        });
    }
    async function loadResources(prefix) {

        for (let url of urls) {
            if (!url.startsWith('http')) {
                url = prefix + url;
            }
            if (url.endsWith('.css')) {
                const style = document.createElement('link');
                style.rel = "stylesheet"
                style.href = url;
                document.head.appendChild(style);
            } else if (url.endsWith('js')) {
                await loadScript(url)
            }
        }
    }

    loadScript(prefix + "/static/docsify-edit-on-github.js").then(() => {
        if (editGithubUrl) {
            window.$docsify.plugins = window.$docsify.plugins || []
            window.$docsify.plugins.push(EditOnGithubPlugin.create(
                editGithubUrl
            ))
        }
        loadResources(prefix);
    })
}