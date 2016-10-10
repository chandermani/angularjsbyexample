(function (global) {
    var map = {
        'app': 'js',
        '@angular': '/node_modules/@angular',
        'rxjs': '/node_modules/rxjs',
        'ng2-translate': '/node_modules/ng2-translate/bundles'
    };

    var packages = {
        'app': { main: 'app.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'ng2-translate': { defaultExtension: 'js' }
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'upgrade',
    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);
})(this);