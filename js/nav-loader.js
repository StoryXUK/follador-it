(function () {
    var placeholder = document.getElementById('site-nav');
    if (!placeholder) return;

    fetch('nav.html')
        .then(function (response) {
            if (!response.ok) throw new Error('nav.html ' + response.status);
            return response.text();
        })
        .then(function (html) {
            placeholder.outerHTML = html;
            // Add holder spans to submenu triggers (required by the CSS animation)
            document.querySelectorAll('.cappa-menu > ul > li.cappa-menu-sub > a').forEach(function (a) {
                var span = document.createElement('span');
                span.className = 'holder';
                a.appendChild(span);
            });
        })
        .catch(function (err) {
            console.error('nav-loader:', err);
        });
}());
