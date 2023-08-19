import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditWordComponent } from './add-edit-word/add-edit-word.component';
import { AddTranslationTypeComponent } from './add-translation-type/add-translation-type.component';
import { WordListComponent } from './word-list/word-list.component';

const routes: Routes = [
  { path: '', component: WordListComponent },
  { path: 'add', component: AddEditWordComponent },
  { path: 'edit/:id', component: AddEditWordComponent },
  { path: 'type', component: AddTranslationTypeComponent },
  { path: 'add/:groupId', component: AddEditWordComponent },
  { path: ':groupId', component: WordListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyWordsRoutingModule {}
