import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloAngularComponent } from './hello-angular/hello-angular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormProductComponent } from './form-product/form-product.component';
import { Lab3Component } from './lab3/lab3.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloAngularComponent,
    ProductComponent,
    AboutComponent,
    ItemComponent,
    ItemsComponent,
    ItemDetailComponent,
    PageNotFoundComponent,
    ProfileFormComponent,
    RegisterFormComponent,
    FormProductComponent,
    Lab3Component,
    PostComponent,
    PostsComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
