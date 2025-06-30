---
title: Modelo de Casos de Uso del Negocio
description: Descripción detallada del modelo de casos de uso del negocio de Fixceler.
---

### **Agentes del negocio**

- **Cliente:** Es la persona o entidad externa que contacta a Fixceler para solicitar un servicio de reparación a domicilio. Es el iniciador del flujo de servicio.
- **Reparador:** Es el profesional técnico externo que se afilia a la red de Fixceler para ser asignado a servicios de reparación. Es responsable de la ejecución técnica del trabajo.

### **Trabajadores del negocio**

- **Asistente de Operaciones (AO):** Es el empleado interno de Fixceler responsable de gestionar todo el proceso de forma manual. Sus herramientas son el teléfono y las hojas de cálculo. Actúa como el intermediario principal entre el Cliente y el Reparador.

---

### **Casos de uso del negocio**

A continuación, se presentan los Casos de Uso del Negocio (CUN) que describen los procesos principales del modelo operativo manual de Fixceler:

1. **Gestión de Solicitud de Servicio**
2. **Gestión del Servicio de Reparación**
3. **Gestión de Registro de Reparador**
4. **Gestión de Atención al Cliente**

### **Diagrama de Casos de Uso**

El diagrama de casos de uso muestra la interacción entre los actores externos y los procesos de negocio:

- El **Cliente** participa en:
  - `Gestión de Solicitud de Servicio` (lo inicia).
  - `Gestión del Servicio de Reparación`.
  - `Gestión de Atención al Cliente`.
- El **Reparador** participa en:
  - `Gestión de Registro de Reparador` (lo inicia).
  - `Gestión de Solicitud de Servicio`.
  - `Gestión del Servicio de Reparación`.
  - `Gestión de Atención al Cliente`.

---

### Historial de revisión

| Fecha      | Versión | Descripción                                                        | Autor                |
|------------|---------|--------------------------------------------------------------------|----------------------|
| 23/05/2025 | 1.0     | Versión inicial basada en el análisis de los procesos del negocio. | El equipo de trabajo |
| 15/06/2025 | 2.0     | Caso de uso del Negocio de Atención al cliente añadido.            | El equipo de trabajo |

---

### **Especificación de Caso de Uso del Negocio Gestión de Solicitud de Servicio**

### **1. Introducción**

El presente trabajo estudia la evaluación del proceso de negocio de **Gestión de Solicitud de Servicio**, en la cual se encuentran involucrados el Cliente, el Reparador y, como trabajador principal, el Asistente de Operaciones.

#### **1.1. Propósito**
Registrar de manera formal las solicitudes de servicio entrantes de los clientes y asignar a un reparador calificado de la red de la empresa para atender dicha solicitud de manera oportuna.

#### **1.2. Alcance**
El caso de uso comienza con la llamada inicial del Cliente a la empresa y finaliza en el momento exacto en que el Asistente de Operaciones (AO) le comunica al Cliente que un reparador específico ha sido asignado.

#### **1.3. Definiciones, Acrónimos y Abreviaciones**
Las definiciones, acrónimos y abreviaturas utilizadas se encuentran detalladas en el Glosario al final de este documento.

#### **1.4. Referencias**

- Entrevistas con el Gerente General de Fixceler.
- Análisis del proceso manual y de los registros en hojas de cálculo existentes.

### **2. Descripción Breve**

Este CUN describe el flujo de trabajo del Asistente de Operaciones (AO), quien actúa como el intermediario central. El AO atiende las solicitudes telefónicas, las registra en una hoja de cálculo, busca y contacta manualmente a reparadores de una lista hasta encontrar uno disponible, y finalmente coordina y confirma la asignación a ambas partes.

### **3. Flujo de trabajo básico**

1. El **Cliente** llama al número de la empresa para solicitar un servicio.
2. El **Asistente de Operaciones (AO)** atiende la llamada y consulta si es un cliente nuevo. Si lo es, invoca el CUN "Gestión de Registro de Reparador" (para el alta de cliente). Si es un cliente recurrente, verifica su dirección usando su DNI.
3. El AO registra los detalles del problema en una nueva fila de la hoja de cálculo "Servicios".
4. El AO informa al Cliente: "Gracias. Buscaré un reparador disponible y le devolveré la llamada para confirmar la asignación". La llamada finaliza temporalmente.
5. El AO consulta su hoja de cálculo "Reparadores" para identificar a los candidatos adecuados por especialidad y que figuren como "Disponibles".
6. El AO contacta al primer candidato de la lista por mensajería (WhatsApp), enviándole el tipo de servicio y el distrito.
7. El **Reparador** contactado responde que **SÍ** está disponible y acepta el trabajo.
8. El AO actualiza el estado del Reparador a "No Disponible" en la hoja de cálculo de "Reparadores".
9. El AO asigna el nombre y DNI del Reparador a la solicitud del Cliente en la hoja de cálculo de "Servicios".
10. El AO llama de vuelta al **Cliente** para informarle: "Le hemos asignado al reparador [Nombre del Reparador] con DNI [DNI del Reparador]".
11. El AO contacta una última vez al **Reparador** para darle la confirmación final y recordarle llevar el formato de contrato físico.
12. El CUN finaliza exitosamente.

### **4. Flujos de trabajo alternativos**

#### **4.1. Reparador no disponible:** En el paso 7, el Reparador contactado responde que **NO** está disponible. El AO debe regresar al paso 5 y contactar al siguiente candidato de la lista.
#### **4.2. Ningún reparador disponible:** Si el AO contacta a todos los reparadores viables y ninguno acepta, llama de vuelta al Cliente para informarle que no es posible atender su solicitud en ese momento.

### **Agentes implicados en el proceso de negocio**

- **Actores:** Cliente, Reparador.
- **Trabajador del Negocio:** Asistente de Operaciones (AO).

### **Diagrama de roles del caso de uso: Gestión de Solicitud de Servicio**

*[Placeholder para el diagrama de roles que será insertado por el equipo.]*

### **Acciones necesarias para realizar el proceso de negocio**

➤ **Cliente**

- Llamar para solicitar un servicio.
- Proporcionar datos personales (nombre, DNI) y del servicio.
- Esperar y recibir la llamada de confirmación.

➤ **Asistente de Operaciones**

- Atender la llamada del cliente.
- Registrar o verificar datos del cliente en la hoja de cálculo "Clientes".
- Registrar nueva solicitud en la hoja de cálculo "Servicios".
- Buscar y contactar reparadores de la lista de contactos.
- Asignar el servicio al reparador disponible.
- Actualizar el estado del reparador a "No Disponible".
- Notificar al cliente y al reparador la confirmación de la asignación.

### **Diagrama de Actividad**

*[Placeholder para el diagrama de actividad BPM que será insertado por el equipo.]*

### **Lista de actividades a automatizar**

- Registro digital de clientes y solicitudes.
- Consulta automática de la disponibilidad de reparadores en tiempo real.
- Sistema de búsqueda y filtro de reparadores.
- Envío de notificaciones automáticas a todas las partes.
- Asignación automática del reparador en el sistema.

### **Listado de entidades del proceso del negocio**

- Solicitud de Servicio (fila en Excel "Servicios").
- Cliente (fila en Excel "Clientes").
- Reparador (fila en Excel "Reparadores").
- Acuerdo Verbal de Asignación.

### **Reglas de negocio del proceso de negocio: (Gestión de Solicitud de Servicio)**

➤ **Objeto de información: Solicitud de Servicio**

- **Atributos**
  - Fecha de solicitud
  - Datos del Cliente (Nombre, DNI)
  - Descripción del problema
  - Datos del Reparador Asignado
  - Estado (Pendiente, Asignado, Cancelado)
- **Restricciones**
  - Debe tener un cliente asociado.
  - Debe tener un reparador asignado para pasar a estado "Asignado".

➤ **Objeto de información: Reparador**

- **Atributos**
  - Nombre, DNI, Teléfono
  - Especialidades
  - Estado (Disponible, No Disponible)
- **Restricciones**
  - Un reparador no puede ser asignado a un nuevo servicio si su estado es "No Disponible".

### **Detalle de Actividades del Proceso**

➤ **Actividad:** Registrar Solicitud de Servicio.

- **Origen:** Llamada entrante de un Cliente.
- **Agente:** Asistente de Operaciones.
- **Precondiciones:** El AO está disponible para atender el teléfono.
- **Post Condiciones:** La información del servicio y del cliente (nuevo o verificado) está registrada en las hojas de cálculo. El cliente ha sido informado de que se le devolverá la llamada.
- **Caso de uso del sistema:** `<Registrar Solicitud>`

➤ **Actividad:** Buscar y Contactar Reparador.

- **Origen:** Una solicitud ha sido registrada y está pendiente de asignación.
- **Agente:** Asistente de Operaciones.
- **Precondiciones:** Existe un registro de servicio en estado "Pendiente" en la hoja de cálculo.
- **Post Condiciones:** Se ha encontrado a un reparador que ha aceptado verbalmente el servicio.
- **Caso de uso del sistema:** `<Buscar y Asignar Reparador>`

➤ **Actividad:** Asignar Servicio en Registros.

- **Origen:** Un reparador ha aceptado el trabajo.
- **Agente:** Asistente de Operaciones.
- **Precondiciones:** Acuerdo verbal con un reparador disponible.
- **Post Condiciones:** El estado del reparador se ha actualizado a "No Disponible" y el servicio se ha asignado formalmente en la hoja de cálculo "Servicios".
- **Caso de uso del sistema:** `<Actualizar Estado de Servicio>`

➤ **Actividad:** Notificar Confirmación a las Partes.

- **Origen:** La asignación ha sido registrada en las hojas de cálculo.
- **Agente:** Asistente de Operaciones.
- **Precondiciones:** La asignación está formalizada en los registros internos.
- **Post Condiciones:** El Cliente y el Reparador han sido notificados telefónicamente de que la asignación es oficial y se han dado las instrucciones finales (recordatorio del contrato al reparador).
- **Caso de uso del sistema:** `<Notificar Asignación>`

---

### Modelo de caso de uso inicial para el proceso: Gestión del Servicio de Reparación

### Modelo de objetos del negocio del proceso de objetos: Gestión del Servicio de Reparación

---

## Especificación de Caso de Uso del Negocio

## Gestionar Cuenta de Usuario

---

### Historial de revisión

| Fecha | Versión | Descripción | Autor |
| --- | --- | --- | --- |
| 15/06/2025 | 1.0 | Versión inicial del CUN para la gestión de cuentas de usuario. | El equipo de trabajo |

---

### **Especificación de Caso de Uso del Negocio: Gestión del Servicio de Reparación**

### **1. Introducción**
El presente trabajo estudia la evaluación del proceso de negocio de **Gestión del Servicio de Reparación**, en la cual se encuentran involucrados el Cliente y el Reparador como actores principales, y el Asistente de Operaciones como trabajador de soporte y control.

#### **1.1. Propósito**
Documentar el proceso manual de ejecución, formalización, cierre y liquidación de un servicio de reparación que ya ha sido previamente asignado.

#### **1.2. Alcance**
El caso de uso comienza cuando el Reparador inicia su desplazamiento hacia el domicilio del Cliente. Cubre la firma del contrato físico, la ejecución del trabajo, el pago directo del Cliente al Reparador, el reporte de finalización al Asistente de Operaciones (AO) y la posterior liquidación de la comisión.

#### **1.3. Definiciones, Acrónimos y Abreviaciones**
Las definiciones, acrónimos y abreviaturas utilizadas se encuentran detalladas en el Glosario al final de este documento.

#### **1.4. Referencias**

- Entrevistas con el Gerente General de Fixceler.
- Análisis del proceso manual actual.

### **2. Descripción Breve**

Este CUN describe la fase de ejecución del servicio. Una vez notificado, el Reparador se dirige al domicilio del cliente, formaliza el acuerdo mediante un contrato físico, realiza el trabajo, cobra directamente el monto total y finalmente reporta la finalización al AO para el registro y posterior liquidación de la comisión de la empresa.

### **3. Flujo de trabajo básico**

1. El caso de uso comienza cuando el **Reparador** ha sido asignado e inicia su desplazamiento al domicilio del **Cliente**.
2. Al llegar, el Reparador presenta un formato de contrato pre-impreso, lo llena con los detalles del servicio y el monto acordado. Ambas partes lo firman.
3. El Reparador realiza el trabajo de reparación.
4. Al finalizar, el Reparador informa al Cliente el costo total (que debe coincidir con el del contrato).
5. El **Cliente** paga el 100% del monto directamente al **Reparador** (en efectivo o por billetera digital).
6. El **Reparador** llama por teléfono al **Asistente de Operaciones (AO)** para reportar la finalización del servicio y el costo final cobrado.
7. El AO actualiza la hoja de cálculo de "Servicios", marcando el servicio como "Completado" y anotando el costo final.
8. El AO actualiza el estado del Reparador a "Disponible" en la hoja de cálculo de "Reparadores".
9. En un día fijo de la semana (ej. viernes), el **Reparador** se acerca a la oficina.
10. El AO y el Reparador revisan los servicios de la semana en la hoja de cálculo y calculan la comisión total a pagar a la empresa.
11. El Reparador entrega el monto de la comisión.
12. El CUN finaliza exitosamente.

### **4. Flujos de trabajo alternativos**

#### **4.1. Queja durante el servicio:** 
Si durante la ejecución del trabajo surge una queja grave por parte del Cliente o del Reparador, se invoca el CUN "Gestión de Atención al Cliente".

### **Agentes implicados en el proceso de negocio**

- **Actores:** Cliente, Reparador.
- **Trabajador del Negocio:** Asistente de Operaciones (AO).

### **Diagrama de roles del caso de uso: Gestión del Servicio de Reparación**

*[Placeholder para el diagrama de roles que será insertado por el equipo.]*

### **Acciones necesarias para realizar el proceso de negocio**

➤ **Reparador**

- Desplazarse al domicilio del Cliente.
- Llenar y obtener la firma del contrato físico.
- Ejecutar el servicio de reparación.
- Cobrar el pago directamente del Cliente.
- Reportar la finalización y el costo al AO.
- Liquidar comisiones semanalmente.
  
➤ **Cliente**

- Recibir al Reparador.
- Firmar el contrato de servicio.
- Realizar el pago del servicio.
  
➤ **Asistente de Operaciones**

- Recibir el reporte de cierre del Reparador.
- Actualizar los registros en las hojas de cálculo.
- Gestionar la liquidación de comisiones.

### **Diagrama de Actividad**

*[Placeholder para el diagrama de actividad BPM que será insertado por el equipo.]*

### **Lista de actividades a automatizar**

- Notificación automática al cliente cuando el reparador está "en camino".
- Generación de un contrato virtual con aceptación digital.
- Registro de pagos y costos en la plataforma.
- Cálculo automático de comisiones por servicio y por periodo.
- Sistema de liquidación y transferencia de pagos a través de la plataforma.

### **Listado de entidades del proceso del negocio**

- Contrato de Servicio (documento físico).
- Pago (transacción externa).
- Reporte de Cierre (llamada telefónica).
- Liquidación de Comisión (registro manual).

### **Reglas de negocio del proceso de negocio: (Gestión del Servicio de Reparación)**

➤ **Objeto de información: Contrato de Servicio**

- **Atributos**
  - Datos del Cliente (Nombre, DNI, Firma).
  - Datos del Reparador (Nombre, DNI, Firma).
  - Descripción del Servicio.
  - Monto Acordado.
  - Fecha.
- **Restricciones**
  - El trabajo de reparación no debe comenzar hasta que el contrato esté firmado por ambas partes.

➤ **Objeto de información: Liquidación de Comisión**

- **Atributos**
  - Periodo de liquidación (ej. Semana del 20 al 26 de junio).
  - Lista de servicios completados.
  - Monto total de los servicios.
  - Porcentaje de comisión.
  - Monto final de la comisión a pagar.
- **Restricciones**
  - La liquidación se realiza en una fecha y lugar acordados.
  - El cálculo se basa en los montos reportados por el reparador y registrados por el AO.

### **Detalle de Actividades del Proceso**

➤ **Actividad:** Formalizar Contrato Físico.

- **Origen:** El reparador llega al domicilio del cliente.
- **Agente:** Reparador, Cliente.
- **Precondiciones:** El reparador ha sido asignado y conoce los términos del servicio.
- **Post Condiciones:** Existe un acuerdo físico y firmado que autoriza el inicio del trabajo.

➤ **Actividad:** Ejecutar Servicio y Gestionar Pago.

- **Origen:** El contrato ha sido firmado.
- **Agente:** Reparador, Cliente.
- **Precondiciones:** Existe un contrato firmado.
- **Post Condiciones:** El trabajo de reparación ha sido realizado y el reparador ha recibido el pago completo por parte del cliente.

➤ **Actividad:** Reportar Cierre y Liquidar Comisión.

- **Origen:** El servicio ha sido pagado.
- **Agente:** Reparador, Asistente de Operaciones.
- **Precondiciones:** El reparador ha finalizado su labor en el domicilio.
- **Post Condiciones:** El AO ha actualizado los registros y la comisión ha sido entregada a la empresa.

### Modelo de caso de uso inicial para el proceso: Gestión del Servicio de Reparación

### Modelo de objetos del negocio del proceso de objetos: Gestión del Servicio de Reparación

---

## Especificación de Caso de Uso del Negocio

## Consultar Historial de Actividad

---

### Historial de revisión

| Fecha | Versión | Descripción | Autor |
| --- | --- | --- | --- |
| 15/06/2025 | 1.0 | Versión inicial del CUN para la consulta del historial de servicios de un usuario. | El equipo de trabajo |

---

### **Especificación de Caso de Uso del Negocio: Gestión de Registro de Reparador**

### **1. Introducción**

El presente trabajo estudia la evaluación del proceso de negocio de **Gestión de Registro de Reparador**, en la cual se encuentra involucrado el Reparador como actor externo y el Asistente de Operaciones como trabajador responsable del proceso.

#### **1.1. Propósito**
Documentar el proceso manual mediante el cual se incorpora a un nuevo profesional técnico a la red de contactos de Fixceler, habilitándolo para ser considerado en futuras asignaciones de servicios.

#### **1.2. Alcance**
El caso de uso comienza cuando un profesional técnico expresa su interés en trabajar con la empresa y finaliza cuando sus datos han sido validados y registrados formalmente en la hoja de cálculo de "Reparadores".

#### **1.3. Definiciones, Acrónimos y Abreviaciones**
Las definiciones, acrónimos y abreviaturas utilizadas se encuentran detalladas en el Glosario al final de este documento.

#### **1.4. Referencias**

- Entrevistas con el Gerente General de Fixceler.

### **2. Descripción Breve**

Este CUN describe el proceso de "onboarding" manual de nuevos reparadores. El Asistente de Operaciones (AO) recibe el contacto de un aspirante, realiza una validación informal, solicita la información necesaria y lo registra en una base de datos de Excel para incluirlo en la red de profesionales disponibles.

### **3. Flujo de trabajo básico**

1. Un aspirante a **Reparador** contacta a la empresa (usualmente por recomendación o llamada directa) para ofrecer sus servicios.
2. El **Asistente de Operaciones (AO)** recibe el contacto y agenda o realiza en el momento una breve entrevista telefónica.
3. Durante la entrevista, el AO valida las especialidades del aspirante, su experiencia general y su zona de cobertura principal.
4. Si el AO considera que el perfil es adecuado para el negocio, decide aceptarlo en la red.
5. El AO solicita al Reparador sus datos completos: nombre, DNI, teléfono y una lista detallada de sus especialidades.
6. El AO abre la hoja de cálculo "Reparadores".
7. El AO añade una nueva fila con toda la información proporcionada por el nuevo reparador.
8. El AO asigna un estado inicial de "Disponible" en la columna de estado correspondiente.
9. El CUN finaliza exitosamente.

### **4. Flujos de trabajo alternativos**

#### **4.1. Reparador no califica:** 
En el paso 4, si el AO determina que el reparador no cumple con los requisitos mínimos (ej. no tiene una especialidad demandada, no genera confianza), le agradece su tiempo y le informa que no pueden incorporarlo en este momento. El CUN finaliza sin éxito.

### **Agentes implicados en el proceso de negocio**

- **Actor:** Reparador (el aspirante).
- **Trabajador del Negocio:** Asistente de Operaciones (AO).

### **Diagrama de roles del caso de uso: Gestión de Registro de Reparador**

*[Placeholder para el diagrama de roles que será insertado por el equipo.]*

### **Acciones necesarias para realizar el proceso de negocio**

➤ **Reparador**

- Contactar a la empresa para ofrecer sus servicios.
- Proporcionar información sobre su experiencia y especialidades.
- Entregar sus datos personales y de contacto.

➤ **Asistente de Operaciones**

- Recibir y atender el contacto del aspirante.
- Realizar una entrevista de validación informal.
- Tomar la decisión de aceptar o rechazar al aspirante.
- Registrar los datos del nuevo reparador en la hoja de cálculo.

### **Diagrama de Actividad**

*[Placeholder para el diagrama de actividad BPM que será insertado por el equipo.]*

### **Lista de actividades a automatizar**

- Un formulario de registro en línea para que los reparadores se postulen.
- Creación automática de un perfil de reparador en la base de datos del sistema.
- Un panel de control para que el reparador pueda gestionar él mismo sus especialidades, certificados y zonas de cobertura.
- Un proceso de aprobación de nuevos reparadores para el administrador del sistema.

### **Listado de entidades del proceso del negocio**

- Reparador (fila en Excel).
- Especialidad (texto en una celda).
- Acuerdo de Afiliación (Verbal).

### **Reglas de negocio del proceso de negocio: (Gestión de Registro de Reparador)**

➤ **Objeto de información: Reparador**

- **Atributos**
  - Nombre Completo
  - DNI
  - Teléfono de Contacto
  - Lista de Especialidades (texto)
  - Estado (Disponible / No Disponible)
- **Restricciones**
  - El DNI debe ser único en la lista de reparadores para evitar duplicados.
  - Un reparador debe tener al menos una especialidad definida.

### **Detalle de Actividades del Proceso**

➤ **Actividad:** Validar Nuevo Reparador.

- **Origen:** Contacto inicial de un aspirante a reparador.
- **Agente:** Asistente de Operaciones.
- **Precondiciones:** Un profesional técnico ha expresado interés en unirse a la red.
- **Post Condiciones:** Se ha tomado la decisión de aceptar o rechazar al aspirante.

➤ **Actividad:** Registrar Datos de Reparador.

- **Origen:** La decisión de aceptar a un nuevo reparador.
- **Agente:** Asistente de Operaciones.
- **Precondiciones:** El reparador ha sido validado informalmente.
- **Post Condiciones:** Los datos del reparador están registrados en la hoja de cálculo y su estado inicial es "Disponible".
- **Caso de uso del sistema:** `<Crear Perfil de Reparador>`

### Modelo de caso de uso inicial para el proceso: Gestión de Registro de Reparador

### Modelo de objetos del negocio del proceso de objetos: Gestión de Registro de Reparador

---

## Especificación de Caso de Uso del Negocio

## Gestionar Reclamos y Quejas

---

### Historial de revisión

| Fecha | Versión | Descripción | Autor |
| --- | --- | --- | --- |
| 15/06/2025 | 1.0 | Versión inicial del CUN para la gestión de reclamos de quejas. | El equipo de trabajo |

---

### **Especificación de Caso de Uso del Negocio: Gestión de Atención al Cliente**

### **1. Introducción**

El presente trabajo estudia la evaluación del proceso de negocio de **Gestión de Atención al Cliente**, en la cual se encuentran involucrados los Usuarios (Clientes o Reparadores) como actores externos y el Asistente de Operaciones como trabajador responsable de la mediación.

#### **1.1. Propósito**
Documentar el proceso manual y reactivo mediante el cual la empresa maneja y resuelve las quejas, problemas o inconformidades reportadas por los usuarios con respecto a un servicio realizado.

#### **1.2. Alcance**
El caso de uso comienza cuando un Usuario (Cliente o Reparador) llama a la empresa para presentar una queja formal sobre un servicio. El proceso cubre el registro de la queja, la mediación del Asistente de Operaciones (AO) y finaliza cuando el AO comunica una resolución a las partes involucradas.

#### **1.3. Definiciones, Acrónimos y Abreviaciones**
Las definiciones, acrónimos y abreviaturas utilizadas se encuentran detalladas en el Glosario al final de este documento.

#### **1.4. Referencias**

- Entrevistas con el Gerente General de Fixceler.

### **2. Descripción Breve**

Este CUN describe el proceso de resolución de conflictos de Fixceler. Cuando surge un problema, el Asistente de Operaciones (AO) actúa como un mediador central. Recibe la queja por teléfono, contacta a la otra parte para obtener su versión, y toma una decisión final basada en su criterio para solucionar el incidente.

### **3. Flujo de trabajo básico**

1. Un **Usuario** (sea Cliente o Reparador) llama por teléfono al **Asistente de Operaciones (AO)** para presentar una queja sobre un servicio específico.
2. El AO escucha al usuario, busca el registro del servicio en la hoja de cálculo "Servicios" y anota los detalles de la queja en una columna de "Notas".
3. El AO le informa al Usuario que investigará el caso y que se pondrá en contacto con él más tarde.
4. El AO llama a la otra parte involucrada en el servicio para obtener su versión de los hechos.
5. Con la información de ambas partes, el AO evalúa la situación y toma una decisión final basada en su criterio (ej. gestionar una visita de corrección, anular el costo, vetar a uno de los usuarios para futuros servicios).
6. El AO anota la resolución en la hoja de cálculo. Si la decisión es vetar a un usuario, lo marca como "baneado" en la lista correspondiente ("Clientes" o "Reparadores").
7. El AO llama a ambas partes por separado para comunicarles la decisión final tomada por la empresa.
8. El CUN finaliza.

### **4. Flujos de trabajo alternativos**

#### **4.1. No se puede contactar a la otra parte:** 
Si el AO intenta llamar a la otra parte involucrada varias veces sin éxito, debe tomar una decisión basándose únicamente en la información proporcionada por quien presentó la queja y los registros existentes.

### **Agentes implicados en el proceso de negocio**

- **Actores:** Cliente, Reparador (ambos como "Usuario").
- **Trabajador del Negocio:** Asistente de Operaciones (AO).

### **Diagrama de roles del caso de uso: Gestión de Atención al Cliente**

*[Placeholder para el diagrama de roles que será insertado por el equipo.]*

### **Acciones necesarias para realizar el proceso de negocio**

➤ **Usuario (Cliente o Reparador)**

- Llamar a la empresa para presentar una queja.
- Explicar detalladamente la situación.
- Atender la llamada del AO con la resolución.

➤ **Asistente de Operaciones**

- Recibir y registrar la queja.
- Contactar a la contraparte para investigar.
- Mediar y tomar una decisión final.
- Registrar la resolución y posibles sanciones.
- Comunicar la decisión a ambas partes.

### **Diagrama de Actividad**

*[Placeholder para el diagrama de actividad BPM que será insertado por el equipo.]*

### **Lista de actividades a automatizar**

- Un sistema de tickets digital para que los usuarios registren y hagan seguimiento de sus quejas formalmente.
- Un flujo de trabajo digital para la gestión de casos.
- Un sistema de mensajería interna para facilitar la comunicación entre las partes y el administrador.
- Registro formal y automático de resoluciones y sanciones en el perfil del usuario.

### **Listado de entidades del proceso del negocio**

- Queja/Reclamo (Nota en Excel).
- Servicio (Fila en Excel).
- Resolución (Decisión verbal y nota en Excel).
- Registro de Sanción (Marca en la lista de contactos).

### **Reglas de negocio del proceso de negocio: (Gestión de Atención al Cliente)**

➤ **Objeto de información: Queja**

- **Atributos**
  - ID del Servicio asociado.
  - Descripción del problema.
  - Usuario reclamante.
  - Fecha del reclamo.
  - Resolución.
- **Restricciones**
  - Una queja debe estar asociada a un servicio existente.

➤ **Objeto de información: Sanción**

- **Atributos**
  - Motivo (ej. "Queja del cliente por mal servicio").
  - Estado resultante ("Baneado", "En observación").
- **Restricciones**
  - La decisión de sancionar a un usuario es potestad del AO.

### **Detalle de Actividades del Proceso**

➤ **Actividad:** Registrar Queja.

- **Origen:** Llamada de un Usuario para reportar un problema.
- **Agente:** Asistente de Operaciones.
- **Precondiciones:** Se está ejecutando o se ha completado un servicio.
- **Post Condiciones:** La queja ha sido registrada como una nota en la hoja de cálculo.

➤ **Actividad:** Investigar y Mediar Conflicto.

- **Origen:** Una queja ha sido registrada.
- **Agente:** Asistente de Operaciones.
- **Precondiciones:** El AO tiene la versión de una de las partes.
- **Post Condiciones:** El AO tiene la versión de ambas partes y ha evaluado la situación.

➤ **Actividad:** Tomar y Comunicar Resolución.

- **Origen:** La mediación ha concluido.
- **Agente:** Asistente de Operaciones.
- **Precondiciones:** El AO ha tomado una decisión final.
- **Post Condiciones:** La resolución ha sido registrada y comunicada a los involucrados.
- **Caso de uso del sistema:** `<Gestionar Reclamo>`

### Modelo de caso de uso inicial para el proceso: Gestión de Atención al Cliente

### Modelo de objetos del negocio del proceso de objetos: Gestión de Atención al Cliente

---