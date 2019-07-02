'use strict';

angular.module('wcagReporter')
.controller('AuditCriteriaCtrl', function ($scope, evalAuditModel, evalScopeModel,
wcag2spec, $rootElement, $anchorScroll, $filter, $rootScope, $timeout) {
    var principlesOrigin = [];
    var scFilters = {
      levels: evalScopeModel.conformanceOptions
        .filter(evalScopeModel.matchConformTarget)
        .map(function (level) {
          var label = $filter('rdfToLabel')(level);
          return {
            id: label.toLowerCase().replace(' ', '_'),
            label: label,
            rdf: level,
          };
        }),
      versions: evalScopeModel.versionOptions
        .map(function (version) {
          var label = $filter('rdfToLabel')(version);
          return {
            id: label.toLowerCase().replace(' ', '_'),
            label: label,
            rdf: version,
          };
        }),
    }
    $scope.scFilters = {};
    $scope.versions = [];
    $scope.levels = [];

    $scope.criteria = evalAuditModel.getCriteriaSorted();

    $scope.getCritAssert = evalAuditModel.getCritAssert;

    // If there is only one filter item it has no use to add it
    if (scFilters.levels.length > 1) {
      $scope.levels = scFilters.levels;
    }

    if (evalScopeModel.versionTarget.indexOf('2.0') === -1) {
      $scope.versions = scFilters.versions;
    }

    if ($scope.versions.length || $scope.levels.length) {
      $scope.showScFilters = true;
    }

    function buildPrinciples(target, origin) {
        var tgtPrinciple  = origin[target.length];
        target.push(tgtPrinciple);

        if (target.length !== origin.length) {
            $timeout(function () {
                buildPrinciples(target, origin);
            }, 50);
        }
    }

    $scope.principles = [];

    if (wcag2spec.isLoaded()) {
        principlesOrigin = wcag2spec.getPrinciples();
        buildPrinciples($scope.principles, principlesOrigin);
    }


    $scope.$on('wcag2spec:langChange', function () {
        principlesOrigin = wcag2spec.getPrinciples();
        $scope.principles = [];
        buildPrinciples($scope.principles, principlesOrigin);
    });


    if ($rootScope.rootHide.criteria) {
    	$scope.scFilters = $rootScope.rootHide.criteria;

    } else {
    	scFilters.versions
        .concat(scFilters.levels)
        .forEach(function (filter) {
          $scope.scFilters[filter.rdf] = true;
        });

    	$rootScope.rootHide.criteria = $scope.scFilters;
    }

    $scope.isCriterionVisible = function (critSpec) {
		// Check if the level of this criterion should be shown
      var critAssert = evalAuditModel.getCritAssert(critSpec.id);

      // Check WCAG targets
    	if (
        evalScopeModel.matchVersionTarget(critSpec.versions) === false
        || evalScopeModel.matchConformTarget(critSpec.level) === false
      ) {
    		return false;
    	}

      // Check active filters
      if (
        critSpec.versions.reduce(function (outcome, version) {
          return outcome || !$scope.scFilters[version];
        }, false)
        || $scope.scFilters[critSpec.level] === false
      ) {
        return false
      }

      // Check if the assert has an outcome, if no, don't show the criterion
      if (typeof critAssert !== 'object' ||
      typeof critAssert.result !== 'object') {
          return false;
      }

		// Check if the outcome is set to hidden
    	return true;
    };

    $scope.isGuidelineVisible = function (guideline) {
    	var visible = false;
    	guideline.successcriteria.forEach(function (critSpec) {
    		// Only check the criterion if a previous check hasn't already returned true
    		if (visible || $scope.isCriterionVisible(critSpec)) {
    			visible = true;
    		}
    	});
        return visible;
    };

    $scope.isPrincipleVisible = function (principle) {
        var visible = false;
        principle.guidelines.forEach(function (guideline) {
            // Only check the criterion if a previous check hasn't already returned true
            if (visible || $scope.isGuidelineVisible(guideline)) {
                visible = true;
            }
        });
    	return visible;
    };

    var untested = ['earl:untested', 'earl:cantTell'];
    $scope.criteriaUntested = function (guideline) {
        var count = 0;
        guideline.successcriteria.forEach(function (critSpec) {
            var critAssert = evalAuditModel.getCritAssert(critSpec.id);
            if (untested.indexOf(critAssert.result.outcome) !== -1) {
                count += 1;
            }
        });
        return count;
    }


    // Scroll to the top, then move focus to the h1
    $scope.toTop = function () {
        $('html, body').animate({
            scrollTop: $rootElement.offset().top
        }, 200, $rootElement.focusH1);
    };
});
