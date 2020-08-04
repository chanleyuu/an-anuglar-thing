import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TosComponent } from './components/tos/tos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RatingsFormComponent } from './components/ratings-form/ratings-form.component';
import { RatingsPageComponent } from './components/pages/ratings-page/ratings-page.component';
import { TogglebuttonComponent } from './components/togglebutton/togglebutton.component';
import { RadioselectDirective } from './radioselect.directive';
import { Form2Component } from './components/form2/form2.component';
import { Form2pageComponent } from './components/pages/form2page/form2page.component';

@NgModule({
  declarations: [
    AppComponent,
    TosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    RatingsFormComponent,
    RatingsPageComponent,
    TogglebuttonComponent,
    RadioselectDirective,
    Form2Component,
    Form2pageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
