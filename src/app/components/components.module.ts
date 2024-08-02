import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { ButtonComponent } from "./button/button.component";


@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent
  ],
  exports: [
    ButtonComponent,
    CardComponent
  ]
})
export class ComponentsModule {
  
}