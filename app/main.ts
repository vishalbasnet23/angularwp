import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provide } from '@angular/core';
import { AppComponent } from './app.component';

// import { XHRBackend } from '@angular/http';

bootstrap(AppComponent, [ HTTP_PROVIDERS ]);
