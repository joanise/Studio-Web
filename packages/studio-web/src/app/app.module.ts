import { ToastrModule } from "ngx-toastr";

import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { MaterialModule } from "./material.module";
import { UploadComponent } from "./upload/upload.component";
import { TextFormatDialogComponent } from "./text-format-dialog/text-format-dialog.component";
import { NgxRAWebComponentModule } from "@readalongs/ngx-web-component";
import { defineCustomElements } from "@readalongs/web-component/loader";
import { StudioComponent, PrivacyDialog } from "./studio/studio.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

defineCustomElements();

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    UploadComponent,
    PrivacyDialog,
    TextFormatDialogComponent,
    StudioComponent,
    ErrorPageComponent,
    // ShepherdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatToolbarModule,
    FormsModule,
    NgxRAWebComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}