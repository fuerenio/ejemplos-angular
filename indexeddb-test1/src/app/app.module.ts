import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestDaoService } from './services/test-dao.service';
import { AppComponent } from './app.component';
import { AltaPersonasComponent } from './components/alta-personas/alta-personas.component';
import { ListadoPersonasComponent } from './components/listado-personas/listado-personas.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { PersonasModule } from './personas/personas.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, FormsModule, PersonasModule
  ],
  providers: [TestDaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
