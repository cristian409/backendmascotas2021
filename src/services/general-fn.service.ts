import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {generate} from 'generate-password';

const CryptoJS = require("crypto-js");

@injectable({scope: BindingScope.TRANSIENT})
export class GeneralFnService {
  constructor(/* Add @inject to inject parameters */) { }

  /**
    * Función para generar una clave aleatoria
    */
  generarClaveAleatoria(): string {
    const pass = generate({
      length: 10,
      numbers: true,
      uppercase: true,
      lowercase: true
    });
    return pass;
  }


  /**
   * Cifrar una cadena
   */
  cifrarTexto(texto: string): string {
    // const ciphertext = CryptoJS.AES.encrypt(texto, llaves.AESkey).toString();
    const ciphertext = CryptoJS.MD5(texto);
    return ciphertext;
  }
}
