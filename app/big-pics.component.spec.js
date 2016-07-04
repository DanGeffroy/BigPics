"use strict";
var testing_1 = require('@angular/core/testing');
var big_pics_component_1 = require('../app/big-pics.component');
testing_1.beforeEachProviders(function () { return [big_pics_component_1.BigPicsAppComponent]; });
testing_1.describe('App: BigPics', function () {
    testing_1.it('should create the app', testing_1.inject([big_pics_component_1.BigPicsAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
});
//# sourceMappingURL=..\big-pics.component.spec.js.map