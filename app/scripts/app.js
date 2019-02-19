'use strict';
angular.module('wcagReporter', [
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'pascalprecht.translate',
    'wert-templates',
    'textAngular'
]).config(function ($routeProvider, $compileProvider, $provide) {

    const buildCheckAction = (labelClass, text) => {
        return function () {
            this.$editor().wrapSelection(
                'insertHTML',
                `<span class="label label-${labelClass} label-xs">${text}</span>&nbsp;`);
        }
    }

    $provide.decorator('taOptions', [
        'taRegisterTool', '$delegate', function (taRegisterTool, taOptions) {
            taRegisterTool('checkOK', {
                iconclass: 'fa fa-fw fa-check text-success',
                action: buildCheckAction('success', 'Pasa')
            });

            taRegisterTool('checkFail', {
                iconclass: 'fa fa-fw fa-times text-danger',
                action: buildCheckAction('danger', 'Falla')
            });

            taRegisterTool('checkUntested', {
                iconclass: 'fa fa-fw fa-warning text-warning',
                action: buildCheckAction('warning', 'No testeado')
            });

            taRegisterTool('checkMissing', {
                iconclass: 'fa fa-fw fa-circle-o text-info',
                action: buildCheckAction('info', 'No presente')
            });

            taRegisterTool('checkUndecided', {
                iconclass: 'fa fa-fw fa-question',
                action: buildCheckAction('default', 'No decide')
            });

            return taOptions;
        }
    ]);

    $compileProvider
        .aHrefSanitizationWhitelist(/^\s*(https?|data|blob):/);

    $routeProvider.when('/', {
        templateUrl: 'views/start.html',
        controller: 'StartCtrl'
    }).when('/evaluation/scope', {
        templateUrl: 'views/evaluation/scope.html',
        controller: 'EvalScopeCtrl'
    }).when('/evaluation/explore', {
        templateUrl: 'views/evaluation/explore.html',
        controller: 'EvalExploreCtrl'
    }).when('/evaluation/sample', {
        templateUrl: 'views/evaluation/sample.html',
        controller: 'EvalSampleCtrl'
    }).when('/evaluation/audit', {
        templateUrl: 'views/evaluation/audit.html',
        controller: 'EvalAuditCtrl'
    }).when('/evaluation/report', {
        templateUrl: 'views/evaluation/report.html',
        controller: 'EvalReportCtrl'
    }).when('/view_report', {
        templateUrl: 'views/viewReport.html',
        controller: 'ViewReportCtrl'
    }).when('/open', {
        templateUrl: 'views/open.html',
        controller: 'OpenCtrl'
    }).when('/save', {
        templateUrl: 'views/save.html',
        controller: 'SaveCtrl'
    }).when('/error', {
        templateUrl: 'views/error.html'
    }).otherwise({
        redirectTo: '/error'
    });
});