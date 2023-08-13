import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditWordComponent } from './add-edit-word/add-edit-word.component';
import { AddTranslationTypeComponent } from './add-translation-type/add-translation-type.component';
import { MyWordsComponent } from './my-words.component';
import { WordListComponent } from './word-list/word-list.component';

const routes: Routes = [
  {
    path: '',
    component: MyWordsComponent,
    children: [
      { path: '', component: WordListComponent },
      { path: 'add', component: AddEditWordComponent },
      { path: 'edit/:id', component: AddEditWordComponent },
      { path: 'type', component: AddTranslationTypeComponent },
      { path: 'edit/:id/:groupId', component: AddEditWordComponent },
      { path: 'add/:groupId', component: AddEditWordComponent },
      { path: ':groupId', component: WordListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyWordsRoutingModule {}
