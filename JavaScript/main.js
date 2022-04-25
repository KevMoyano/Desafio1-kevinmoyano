
/* BIENVENIDA */
let nombre = prompt("Ingrese su nombre de usuario");
 alert(
    "Bienvenido " + nombre + ", ahora armemos juntos tu PC desde 0!"
  );


/* Seleccion del procesador*/
let procesador = prompt ("Comenzemos por tu procesador. Selecciona la opcion que desees.\n 1) INTEL\n 2) AMD Ryzen");

    /* Seleccion de INTEL */
if (procesador === "1") {
    let generacion = prompt ( "Elige el tipo de procesador quieres. \n" + "1) i3 \n" + "2) i5 \n" + "3) i7 \n" + "4) i9")

    /* I3 */
    if (generacion === "1") {
        ix = prompt ( "Haz elegido el tipo i3. Ahora, segun nuestro stock, dinos que procesador quieres. \n" + "1) I3 - 8350K  \n" + "2) I3 - 9300 \n" + "3) I3 - 9350KF");

        let I3_8350K = 19000;
        let I3_9300 = 25000;
        let I3_9350KF = 29000;


        /* OPCION 1 I3 */
        if (ix === "1") { ix_mensaje = prompt ("Haz elegido I3 - 9300 \n" + "1) Continuar armado \n" + "2) Comprar \n"  + "3) Cancelar" )
                
                /* CONTINUAR ARMANDO */
                if (ix_mensaje === "1") { motherx = prompt ("Egije la placa madre para tu PC \n" + "1) XXXX \n" + "2) XXXX \n" + "3) XXXX" ) }
                


                /* COMPRAR */
                else if (ix_mensaje === "2") { motherx = prompt ("Llevas un total de $" + I3_8350K + "\n1) Pagar \n" + "2) Cancelar")
                    

                    /* PAGAR */
                    if (motherx === "1") {
                        metodo_pago = prompt  ("Selecciona un metodo de pago \n" + "1) Tarjeta de Credito \n" + "2) Tarjeta de Debito")
                         
                        /* METODO CREDITO*/
                        if (metodo_pago === "1") { 
                            tarjeta_pago = prompt  ("Selecciona tu tarjeta \n" + "1) Mastercard \n" + "2) Visa")     
                            if (tarjeta_pago === "1") {
                                cuotas_pago = prompt ("Selecciona las cuotas para pagar \n" + "1) 1 cuota, precio final $" + I3_8350K + "\n2) 3 cuotas, precio final $" + I3_8350K * 0.1 + "\n3) 6 cuotas, precio final $" + I3_8350K + "\n4) 12 cuotas, precio final $" + I3_8350K * 0.3)
                            }
                            else if (tarjeta_pago === "2") {
                                cuotas_pago = prompt ("Selecciona las cuotas para pagar \n" + "1) 1 cuota, precio final $" + I3_8350K + "\n2) 3 cuotas, precio final $" + I3_8350K * 0.3 + "\n3) 6 cuotas, precio final $" + I3_8350K + "\n4) 12 cuotas, precio final $" + I3_8350K * 0.5)
                            }
                            else {
                                alert ("Lo sentimos " + nombre + ", no logramos entender tu respuesta.")
                            }
                        }

                        /* METODO DEBITO */
                        else if (metodo_pago === "2") {
                            tarjeta_pago = prompt  ("Selecciona tu tarjeta \n" + "1) Mastercard \n" + "2) Visa")
                            if (tarjeta_pago === "1") {
                                cuotas_pago = prompt ("Selecciona para pagar con tu Mastercard \n" + "1) 1 cuota, precio final $" + I3_8350K) 
                            }
                            else if (tarjeta_pago === "2") {
                                cuotas_pago = prompt ("Selecciona para pagar con tu Visa \n" + "1) 1 cuota, precio final $" + I3_8350K) 
                            }
                            else {
                                alert (nombre + " lamentamos no poder ayudarte.")
                            }     
                        }

                        /* METODO ERROR*/
                        else {
                            alert (nombre + " lamentamos no poder ayudarte.")
                        }     
                    }

                    /* CANCELAR */
                    else {
                        alert (nombre + " lamentamos no poder ayudarte.")
                    }      
                }
                
                /* CANCELAR*/
                else { 
                    alert (nombre + " lamentamos no poder ayudarte.")
                }
        }




        /* OPCION 2 I3 */
        if (ix === "2") { ix_mensaje = prompt ("Haz elegido I3 - 9300 \n" + "1) Continuar armado \n" + "2) Comprar \n"  + "3) Cancelar" )
                
                /* CONTINUAR ARMANDO */
                if (ix_mensaje === "1") { motherx = prompt ("Elige la placa madre para tu PC \n" + "1) XXXX \n" + "2) XXXX \n" + "3) XXXX" ) }
                


                /* COMPRAR */
                else if (ix_mensaje === "2") { motherx = prompt ("Llevas un total de $" + I3_9300 + "\n1) Pagar \n" + "2) Cancelar")
                    

                    /* PAGAR */
                    if (motherx === "1") {
                        metodo_pago = prompt  ("Selecciona un metodo de pago \n" + "1) Tarjeta de Credito \n" + "2) Tarjeta de Debito")
                         
                        /* METODO CREDITO*/
                        if (metodo_pago === "1") { 
                            tarjeta_pago = prompt  ("Selecciona tu tarjeta \n" + "1) Mastercard \n" + "2) Visa")     
                            if (tarjeta_pago === "1") {
                                cuotas_pago = prompt ("Selecciona las cuotas para pagar \n" + "1) 1 cuota, precio final $" + I3_9300 + "\n2) 3 cuotas, precio final $" + I3_9300 * 0.1 + "\n3) 6 cuotas, precio final $" + I3_9300 + "\n4) 12 cuotas, precio final $" + I3_9300 * 0.3)
                            }
                            else if (tarjeta_pago === "2") {
                                cuotas_pago = prompt ("Selecciona las cuotas para pagar \n" + "1) 1 cuota, precio final $" + I3_9300 + "\n2) 3 cuotas, precio final $" + I3_9300 * 0.3 + "\n3) 6 cuotas, precio final $" + I3_9300 + "\n4) 12 cuotas, precio final $" + I3_9300 * 0.5)
                            }
                            else {
                                alert ("Lo sentimos " + nombre + ", no logramos entender tu respuesta.")
                            }
                        }

                        /* METODO DEBITO */
                        else if (metodo_pago === "2") {
                            tarjeta_pago = prompt  ("Selecciona tu tarjeta \n" + "1) Mastercard \n" + "2) Visa")
                            if (tarjeta_pago === "1") {
                                cuotas_pago = prompt ("Selecciona para pagar con tu Mastercard \n" + "1) 1 cuota, precio final $" + I3_9300) 
                            }
                            else if (tarjeta_pago === "2") {
                                cuotas_pago = prompt ("Selecciona para pagar con tu Visa \n" + "1) 1 cuota, precio final $" + I3_9300) 
                            }
                            else {
                                alert (nombre + " lamentamos no poder ayudarte.")
                            }     
                        }

                        /* METODO ERROR*/
                        else {
                            alert (nombre + " lamentamos no poder ayudarte.")
                        }     
                    }

                    /* CANCELAR */
                    else {
                        alert (nombre + " lamentamos no poder ayudarte.")
                    }      
                }
                
                /* CANCELAR*/
                else { 
                    alert (nombre + " lamentamos no poder ayudarte.")
                }
        }


        /* OPCION 3 I3 */
        if (ix === "3") { ix_mensaje = prompt ("Haz elegido I3 - 9300 \n" + "1) Continuar armado \n" + "2) Comprar \n"  + "3) Cancelar" )
                
                /* CONTINUAR ARMANDO */
                if (ix_mensaje === "1") { motherx = prompt ("Elige la placa madre para tu PC \n" + "1) XXXX \n" + "2) XXXX \n" + "3) XXXX" ) }
                


                /* COMPRAR */
                else if (ix_mensaje === "2") { motherx = prompt ("Llevas un total de $" + I3_9350KF + "\n1) Pagar \n" + "2) Cancelar")
                    

                    /* PAGAR */
                    if (motherx === "1") {
                        metodo_pago = prompt  ("Selecciona un metodo de pago \n" + "1) Tarjeta de Credito \n" + "2) Tarjeta de Debito")
                         
                        /* METODO CREDITO*/
                        if (metodo_pago === "1") { 
                            tarjeta_pago = prompt  ("Selecciona tu tarjeta \n" + "1) Mastercard \n" + "2) Visa")     
                            if (tarjeta_pago === "1") {
                                cuotas_pago = prompt ("Selecciona las cuotas para pagar \n" + "1) 1 cuota, precio final $" + I3_9350KF + "\n2) 3 cuotas, precio final $" + I3_9350KF * 0.1 + "\n3) 6 cuotas, precio final $" + I3_9350KF + "\n4) 12 cuotas, precio final $" + I3_9350KF * 0.3)
                            }
                            else if (tarjeta_pago === "2") {
                                cuotas_pago = prompt ("Selecciona las cuotas para pagar \n" + "1) 1 cuota, precio final $" + I3_9350KF + "\n2) 3 cuotas, precio final $" + I3_9350KF * 0.3 + "\n3) 6 cuotas, precio final $" + I3_9350KF + "\n4) 12 cuotas, precio final $" + I3_9350KF * 0.5)
                            }
                            else {
                                alert ("Lo sentimos " + nombre + ", no logramos entender tu respuesta.")
                            }
                        }

                        /* METODO DEBITO */
                        else if (metodo_pago === "2") {
                            tarjeta_pago = prompt  ("Selecciona tu tarjeta \n" + "1) Mastercard \n" + "2) Visa")
                            if (tarjeta_pago === "1") {
                                cuotas_pago = prompt ("Selecciona para pagar con tu Mastercard \n" + "1) 1 cuota, precio final $" + I3_9350KF) 
                            }
                            else if (tarjeta_pago === "2") {
                                cuotas_pago = prompt ("Selecciona para pagar con tu Visa \n" + "1) 1 cuota, precio final $" + I3_9350KF) 
                            }
                            else {
                                alert (nombre + " lamentamos no poder ayudarte.")
                            }     
                        }

                        /* METODO ERROR*/
                        else {
                            alert (nombre + " lamentamos no poder ayudarte.")
                        }     
                    }

                    /* CANCELAR */
                    else {
                        alert (nombre + " lamentamos no poder ayudarte.")
                    }      
                }
                
                /* CANCELAR*/
                else { 
                    alert (nombre + " lamentamos no poder ayudarte.")
                }
        }

    }





    /* I5 */
    else if (generacion === "2") {
        ix = prompt ( "Haz elegido el tipo i5. Ahora, segun nuestro stock, dinos que procesador quieres. \n" + "1) I5 - 8400   \n" + "2) I5 - 8600K \n" + "3) I5 - 9400 \n" + "4) I5 - 10400F \n" + "5) I5 - 11400F \n" + "6) I5 - 12600KF");
    }

    /* I7 */
    else if (generacion === "3") {
        ix = prompt ( "Haz elegido el tipo i7. Ahora, segun nuestro stock, dinos que procesador quieres. \n" + "1) I7 - 9700F \n" + "2) I7 - 10700F \n" + "3) I7 - 11700F \n" + "4) I7 - 11700KF \n" + "5) I7 - 12700KF");
    }

    /* I9 */
    else if (generacion === "4") {
        ix = prompt ( "Haz elegido el tipo i9. Ahora, segun nuestro stock, dinos que procesador quieres. \n" + "1) I9 - 10900F \n" + "2) I9 - 10900KF \n" + "3) I9 - 11900K \n" + "4) I9 - 12900KF \n" + "5) I9 - 12900KS");
    }

    /* ERROR */
    else {
        alert ("Lo sentimos " + nombre + ", no logramos entender tu respuesta.");
    }
}







    /* Seleccion de AMD */
else if (procesador === "2") {
    let generacion = prompt ( "Elige el tipo de procesador quieres.\n 1) Ryzen 3\n 2) Ryzen 5\n 3) Ryzen 7\n 4) Ryzen 9")

    /* Ryzen 3 */
    if (generacion === "1") {
        ix = prompt ( "Haz elegido el tipo Ryzen 3. Ahora, segun nuestro stock, dinos que procesador quieres.\n 1) Ryzen 3 - 4350G\n 2) Ryzen 3 - 4350G\n 3) Ryzen 3 - 4350G\n 4) Ryzen 3 - 4350G\n");
    }

    /* Ryzen 5 */
    else if (generacion === "2") {
        ix = prompt ( "Haz elegido el tipo Ryzen 5. Ahora, segun nuestro stock, dinos que procesador quieres.\n 1) Ryzen 5 - 3600\n 2) Ryzen 5 - 4650G\n 3) Ryzen 5 - 5600g\n 4) Ryzen 5 - 5600x\n");
    }

    /* Ryzen 7 */
    else if (generacion === "3") {
        ix = prompt ( "Haz elegido el tipo Ryzen 7. Ahora, segun nuestro stock, dinos que procesador quieres.\n 1) Ryzen 7 - 4750G\n 2) Ryzen 7 - 5700g\n 3) Ryzen 7 - 5800X\n");
    }

    /* Ryzen 9 */
    else if (generacion === "4") {
        ix = prompt ( "Haz elegido el tipo Ryzen 9. Ahora, segun nuestro stock, dinos que procesador quieres.\n 1) Ryzen 9 - 5900X\n 2) Ryzen 9 - 5950x\n");
    }

    /* ERROR */
    else {
        alert ("Lo sentimos " + nombre + ", no logramos entender tu respuesta.");
    }
}