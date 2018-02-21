(function (global) {
    var map = {
        'app': 'js',
        '@angular': '/node_modules/@angular',
        '@angular/upgrade/static': '/node_modules/@angular/upgrade',
        'rxjs': '/node_modules/rxjs'
    };
    var packages = {
        'app': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        
        '@angular/core': {main: '/bundles/core.umd.js', defaultExtension:'js'},
        '@angular/common': {main: '/bundles/common.umd.js', defaultExtension:'js'},
        '@angular/compiler': {main: '/bundles/compiler.umd.js', defaultExtension:'js'},
        '@angular/platform-browser': {main: '/bundles/platform-browser.umd.js', defaultExtension:'js'},
        '@angular/platform-browser-dynamic': {main: '/bundles/platform-browser-dynamic.umd.js', defaultExtension:'js'},
        '@angular/http': {main: '/bundles/http.umd.js', defaultExtension:'js'},
        '@angular/router': {main: '/bundles/router.umd.js', defaultExtension:'js'},
        '@angular/forms': {main: '/bundles/forms.umd.js', defaultExtension:'js'},
        '@angular/upgrade/static': {main: '/bundles/upgrade-static.umd.js', defaultExtension:'js'}
    };
    
    var config = {
        map: map,
        packages: packages
    };

    System.config(config);
})(this);