import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  nome = '';
  idade!: number;
  sexo = '';
  cpf!: number;

  exibirDivCriarUsuario = true;

  message = signal('');
  resultado = '';


  constructor(private userService: UserService) {}

    criarUsuario() {

      const novoUsuario = {
        nome: this.nome,
        idade: this.idade,
        sexo: this.sexo,
        cpf: this.cpf
      }

    console.log("📦 Body enviado para criação:", novoUsuario); // <<< AQUI

  this.userService.criarUsuario(novoUsuario).subscribe(res => {
    this.resultado = 'Usuário criado com sucesso!';
  });
  }
}
