import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private platform: Platform) { }



  // enviando email desde un programa de email instalado en el dispositivo de escritorio o laptop
  // para acceder a la app de correo electronico se debe tener instalado el plugin email-composer
  async enviarCorreo() {
    // protegiendo el acceso a la app de correo electronico para que no se crashee en el dispositivo de escritorio
    try {
      //enviando parametros para la aplicacion de email electronico
      console.log('Iniciando proceso de envío de correo');

      // abriendo programa de email
      await this.platform.ready();
      // enviando desde consola el programa de email abierto
      console.log('Plataforma lista');

      // const to = 'marioenriquealvarado12@gmail.com';

      // correo electronico destinatario
      const to = 'jorgealberto.cotozelaya@gmail.com';

      //encabezado del correo
      const subject = 'Prueba de Ionic Email';

      //Cuerpo del correo
      const body = 'Este es un correo de prueba enviado desde una aplicación Ionic web.';
      
      // enviando los parametros para el programa donde se abrira el corre electronico 
      let mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


      // enviando mensaje de abrir el programa con los parametros
      console.log('Abriendo enlace mailto:', mailtoLink);

      // abriendo nueva ventana 
      window.open(mailtoLink, '_blank');

      // envio exitoso
      console.log('Enlace mailto abierto exitosamente');
    } catch (error) {
      // envio fallido
      console.error('Error al abrir el enlace mailto:', error);
      // mostrando alerta
      alert('Error al intentar abrir el cliente de correo: ' + JSON.stringify(error));
    }
  }
}


// // import { Component } from '@angular/core';
// // import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
// // import { Platform } from '@ionic/angular';

// // @Component({
// //   selector: 'app-home',
// //   templateUrl: 'home.page.html',
// //   styleUrls: ['home.page.scss'],
// // })
// // export class HomePage {

// //   constructor(
// //     private emailComposer: EmailComposer,
// //     private platform: Platform
// //   ) { }

// //   async enviarCorreo() {
// //     try {
// //       console.log('Iniciando proceso de envío de correo');
      
// //       // Verificar si la plataforma está lista
// //       await this.platform.ready();
// //       console.log('Plataforma lista');

// //       const available = await this.emailComposer.isAvailable();
// //       console.log('Email composer available:', available);

// //       if (available) {
// //         let email = {
// //           to: 'marioenriquealvarado12@gmail.com',
// //           subject: 'Prueba de Ionic Email Composer',
// //           body: 'Este es un correo de prueba enviado desde una aplicación Ionic.',
// //           isHtml: true
// //         };

// //         console.log('Configuración del correo:', email);

// //         console.log('Intentando abrir el compositor de correo');
// //         await this.emailComposer.open(email);
// //         console.log('Compositor de correo abierto exitosamente');
// //       } else {
// //         console.log('El compositor de correo no está disponible en este dispositivo');
// //         alert('No se puede enviar correos desde este dispositivo');
// //       }
// //     } catch (error) {
// //       console.error('Error al enviar el correo:', error);
// //       alert('Error al intentar enviar el correo: ' + JSON.stringify(error));
// //     }
// //   }
// // }

