import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = signal('frontend');
  message = signal('');

  constructor(private http: HttpClient) {}

    testarApi() {
    this.http.get('http://localhost:8080/user/hello', { responseType: 'text' })
      .subscribe(res => {
        this.message.set(res);
      });
  }
}
