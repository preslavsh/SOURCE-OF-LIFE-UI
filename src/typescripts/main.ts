import {provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {UserNavigationComponent} from './user.navigation.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS,AsyncRoute,ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy,APP_BASE_HREF} from 'angular2/platform/common';

bootstrap(UserNavigationComponent, [
    provide(APP_BASE_HREF, {useValue: '/'}),
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);