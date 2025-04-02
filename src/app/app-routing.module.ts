import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloAngularComponent} from './hello-angular/hello-angular.component';
import { AboutComponent } from './about/about.component';
import { ItemsComponent} from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FormProductComponent } from './form-product/form-product.component';
import { Lab3Component } from './lab3/lab3.component';
import { PostsComponent } from './posts/posts.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {path: '', redirectTo: '/profile',pathMatch: 'full'},
  {path:"profile",component: ProfileFormComponent},
  {path:"register",component: RegisterFormComponent},
  {path:"hello",component: HelloAngularComponent},
  {path:"about",component: AboutComponent},
  {path:"profile",component: AboutComponent},
  {path:"posts",component: PostsComponent},
  {path:"create-post",component: CreatePostComponent},

  {path:"items",component: ItemsComponent},
  {path:"newproduct",component: FormProductComponent},
  {path:"items/:id",component: ItemDetailComponent},
  {path:"**", component: PageNotFoundComponent},
  {path:"lab3",component: Lab3Component}

]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
