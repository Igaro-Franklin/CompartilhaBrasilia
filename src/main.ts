import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    FormsModule,
    ReactiveFormsModule,
    provideRouter(routes),
    FormGroup,
  ]
}).catch((err) => console.error(err));
