import { TranslateService } from '@ngx-translate/core';

export function ngxTranslate(ngxTranslateService: TranslateService) {
    function translate(input) {
        if (input && ngxTranslateService.currentLang) {
            return ngxTranslateService.instant(input);
        }
    }
    translate['$stateful'] = true;
    return translate;
}

ngxTranslate.$inject = ['TranslateService'];
angular.module('app').filter("ngxTranslate", ngxTranslate); 