import {bootstrap}    from '@angular/platform-browser-dynamic';
import {UserNavigationComponent} from './user.navigation.component';
import {APP_ROUTER_PROVIDERS} from './routes';
import { LocationStrategy,HashLocationStrategy } from '@angular/common';
import {APP_BASE_HREF} from '@angular/common';

bootstrap(UserNavigationComponent, [
    APP_ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy },
    {provide: APP_BASE_HREF, useValue: '/'}
]);