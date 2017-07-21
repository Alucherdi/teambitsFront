import { Component, OnInit } from '@angular/core';
import email from "emailjs"

@Component({
	selector: 'app-contacto',
	templateUrl: './contacto.component.html',
	styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		var cc = this
		var fc = <HTMLFormElement>document.getElementById("formContacto")
		fc.onsubmit = function() {
			var fd = cc.getFormData()
			console.log(fd)
			cc.sendEmail(fd.email, "alucherdi@gmail.com", fd.mensaje)
		}
	}

	sendEmail(mfrom, mto, msg) {
		var server = email.server.connect({
			user: "hjgo127942@gmail.com",
			password: "mundofreak666",
			host: "smtp.gmail.com",
			ssl: true
		})
		
		server.send({
			text: msg,
			from: "Cliente <" + mfrom + ">",
			to: "Alucherdi <alucherdi@gmail.com>",
			subject: "hope this fucking works"
		}, function (err, data) { console.log(err || data) })
	}

	getFormData() {
		var formData = {
			nombre: (<HTMLInputElement>document.getElementById("inputName")).value,
			empresa: (<HTMLInputElement>document.getElementById("inputEmpresa")).value,
			telefono: (<HTMLInputElement>document.getElementById("inputTelefono")).value,
			email: (<HTMLInputElement>document.getElementById("inputEmail")).value,
			asesoria: (<HTMLInputElement>document.getElementById("exampleSelect1")).value,
			mensaje: (<HTMLInputElement>document.getElementById("exampleTextarea")).value,
			llamada: (<HTMLInputElement>document.getElementById("regresarLlamada")).checked
		}

		return formData
	}

}
