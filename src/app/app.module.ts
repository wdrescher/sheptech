import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SheptechHeaderComponent } from './sheptech-header/sheptech-header.component';
import { SheptechContactFormComponent } from './sheptech-contact-form/sheptech-contact-form.component';
import { SheptechFooterComponent } from './sheptech-footer/sheptech-footer.component';
import { SheptechNavigationButtonsComponent } from './sheptech-navigation-buttons/sheptech-navigation-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    SheptechHeaderComponent,
    SheptechContactFormComponent,
    SheptechFooterComponent,
    SheptechNavigationButtonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
