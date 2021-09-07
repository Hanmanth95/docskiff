import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CustomInputComponent } from "./custom-input/custom-input.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, CustomInputComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
