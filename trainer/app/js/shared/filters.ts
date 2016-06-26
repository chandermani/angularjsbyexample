import {TranslateService} from 'ng2-translate';

export function ng2Translate(ng2TranslateService: TranslateService) {
   function translate(input) {
    if (input && ng2TranslateService.currentLang) {
      return ng2TranslateService.instant(input);
    }
  }
  translate['$stateful'] = true;
  return translate;
}

ng2Translate.$inject = ['ng2TranslateService'];
angular.module('app').filter("ng2Translate", ng2Translate);
