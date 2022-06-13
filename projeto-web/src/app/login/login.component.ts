import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PizzasService } from '../shared/services/pizza.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private pizzasService: PizzasService,
    private router: Router
  ) {}
  formularioEnviado: boolean = false;

  // Formulário
  formulario: FormGroup = this.formBuilder.group({
    usuario: [null, Validators.required],
    senha: [null, Validators.required],
  });

  ngOnInit(): void {}

  onLogin() {
    this.formularioEnviado = true;
    if (this.formulario.valid) {
      this.pizzasService
        .login(this.formulario.value)
        .subscribe(
          (usuario) => {
            if (usuario.length > 0) {
              var session = {
                logado: true,
                nome: usuario[0].nome,
              };
              sessionStorage.setItem('usuario', JSON.stringify(session));
              console.log(sessionStorage.getItem('usuario'));
              this.toastr.success('Acesso liberado!');
              setTimeout(() => {
                this.router.navigate(['home']);
              }, 800);
            } else {
              this.toastr.error('Acesso não liberado!');
            }
          },
          (error) => {
            this.toastr.error('Acesso não liberado!');
          }
        )
        .add(() => {
          this.formularioEnviado = false;
        });
    } else {
      this.toastr.warning('Preencha os campos obrigatórios!');
    }
  }
}
