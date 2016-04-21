import {provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {UserNavigationComponent} from './user.navigation.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS,AsyncRoute} from 'angular2/router';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';

bootstrap(UserNavigationComponent, [
    provide(APP_BASE_HREF, {useValue: '/'}),
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);