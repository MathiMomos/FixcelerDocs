---
title: Modelo de Casos de Uso del Negocio
description: Descripción detallada del modelo de casos de uso del negocio de Fixceler.
---

## Agentes del Negocio

- **Cliente:** Quien busca y contrata un servicio.
- **Reparador:** Quien ofrece y ejecuta el servicio.

## Trabajadores del Negocio

- **Sistema Fixceler:** El facilitador central de todos los procesos.
- **Sistema Fixceler (Módulo de IA):** El componente especializado que asiste al Cliente en la búsqueda y selección de reparadores.
- **Sistema Fixceler (Módulo de Resolución Automatizada):** El componente que gestiona las disputas aplicando reglas de negocio.

## Casos de Uso del Negocio

### Diagrama de Casos de Uso

![](file:///C:/Users/User/AppData/Roaming/marktext/images/2025-06-15-22-35-15-image.png?msec=1750106309737)

---

# Sistema Fixceler

## Especificación de Caso de Uso del Negocio

## Contratación de Servicio

---

### Historial de revisión

| Fecha | Versión | Descripción | Autor |
| --- | --- | --- | --- |
| 15/06/2025 | 1.0 | Versión inicial basada en el análisis de los procesos del negocio. | El equipo de trabajo |

---

### Especificación de Caso de Uso del Negocio Contratación de Servicio

#### 1. Introducción

El presente trabajo estudia la evaluación del proceso de negocio contratación de servicio en la cual se encuentran involucrados el cliente, el reparador y el sistema Fixceler.

##### **1.1 Propósito**

Establecer el proceso de negocio completo a través del cual un Cliente contrata a un Reparador para un servicio específico. El propósito es facilitar una transacción segura, eficiente y transparente, desde la búsqueda de candidatos hasta la finalización y calificación del servicio, utilizando la plataforma Fixceler como facilitador central.

##### **1.2 Alcance**

El caso de uso comienza cuando un Cliente tiene una necesidad y busca a un Reparador en la plataforma. Cubre la solicitud del servicio, la negociación, la contratación, la ejecución y seguimiento del trabajo, la confirmación del pago y la calificación final. El proceso termina cuando el servicio ha sido completado y calificado por el cliente.

##### **1.3 Definiciones, Acrónimos y Abreviaciones**

Ver el glosario de términos del proyecto Fixceler.

##### **1.4 Referencias**

La información para la elaboración de este CUN ha sido extraída de los documentos de procesos proporcionados.

La información para la elaboración de este CUN ha sido extraída de los documentos de procesos proporcionados, que incluyen las descripciones para: *Buscar reparador, Solicitar servicio, Negociar Precio, Contratar servicio, Terminar servicio, Confirmar pago y Dar calificación*.

### **2. Gestionar Contratación de Servicio**

##### **2.1 Descripción Breve**

Este CUN describe el ciclo de vida completo de un servicio en Fixceler. Permite a un Cliente buscar y seleccionar a un Reparador, acordar los términos económicos, formalizar un contrato virtual, dar seguimiento al trabajo y finalizar la transacción de manera satisfactoria para ambas partes.

### **3. Flujo de trabajo básico**

1. El caso de uso comienza cuando el **Cliente** busca un **Reparador** en la plataforma, utilizando criterios de búsqueda y filtros para encontrar candidatos adecuados.
2. El **Cliente** selecciona un **Reparador** de la lista y le envía una "Solicitud de Servicio", especificando los detalles del trabajo y, opcionalmente, un monto propuesto.
3. El **Reparador** recibe la notificación de la solicitud, la revisa y la **acepta**.
4. Al haber un acuerdo en el precio, el **Sistema Fixceler** genera un **Contrato de Servicio** virtual con los términos acordados, que es aceptado por ambas partes.
5. El **Reparador** se dirige a la ubicación del Cliente. Durante este trayecto, el Cliente puede realizar un seguimiento de su ubicación aproximada.
6. El **Reparador** realiza el servicio acordado.
7. Una vez finalizado el trabajo, el **Reparador** o el **Cliente** confirman la terminación del servicio en la plataforma, y la otra parte valida dicha confirmación.
8. El **Cliente** realiza el pago del monto acordado por un medio externo y ambas partes confirman la recepción del pago en el **Sistema Fixceler**.
9. Con el pago confirmado, el **Sistema Fixceler** cierra el contrato y lo marca como "Completado".
10. El **Cliente** califica el servicio recibido y la experiencia con el **Reparador**.
11. El CUN finaliza exitosamente.

### **4. Flujos de trabajo alternativos**

#### **4.1. Negociación de Precio**

- En el paso 3 del flujo básico, si el **Reparador** no está de acuerdo con el monto propuesto o si el **Cliente** no propuso un monto inicial, el **Reparador** puede rechazar la solicitud e iniciar una negociación con una contraoferta.
- El **Cliente** recibe la contraoferta y puede aceptarla (el flujo continúa en el paso 4 del flujo básico) o rechazarla y proponer un nuevo monto.
- Este ciclo de negociación continúa hasta que una de las partes acepta una propuesta o decide terminar la negociación, finalizando el CUN sin éxito.

#### **4.2. Cancelación de Contrato Post-Acuerdo**

- En cualquier momento después del paso 4 (generación del contrato) y antes del paso 7 (terminación del servicio), cualquiera de las dos partes puede cancelar el contrato.
- La parte que cancela debe indicar un motivo. El sistema notifica a la otra parte de la cancelación.
- El **Sistema Fixceler** aplica las **Reglas de Negocio sobre Sanciones** a la parte que ha cancelado.
- El CUN finaliza.

### **Agentes implicados en el proceso de negocio: Contratación de Servicio**

![](file:///C:/Users/User/AppData/Roaming/marktext/images/2025-06-16-01-14-47-image.png?msec=1750106309725)

### **Acciones necesarias para realizar el proceso de negocio**

- **Cliente:**
- Buscar y seleccionar Reparador.
- Enviar Solicitud de Servicio.
- Negociar precio.
- Aceptar Contrato.
- Realizar y confirmar pago.
- Confirmar terminación de servicio.
- Calificar servicio.
- **Reparador:**
- Recibir y evaluar Solicitud de Servicio.
- Aceptar o rechazar solicitud.
- Negociar precio.
- Aceptar Contrato.
- Ejecutar servicio.
- Confirmar terminación de servicio.
- Confirmar recepción de pago.

### **Lista de actividades a automatizar**

- Facilitar la búsqueda de reparadores al Cliente (esta actividad será optimizada con un módulo de IA).

### Listado de entidades del proceso del negocio

- Solicitud de Servicio
- Contrato de Servicio
- Calificación a Reparador
- Calificación a Cliente
- Pago
- Sanción

### **Reglas de negocio del proceso de negocio**

➤ **Objeto de información: Solicitud de Servicio** (Basado en la tabla `solicitud`)

- **Atributos:**

- ID de Solicitud (único)
- ID de Cliente (quien solicita)
- ID de Reparador (a quien se asigna)
- Descripción del problema/servicio
- Monto propuesto
- Fecha de solicitud
- Estado (Pendiente, Asignada, Completada, etc. )
- **Restricciones:**

- El `monto` debe ser mayor a 0 y menor o igual a 500.

➤ **Objeto de información: Contrato de Servicio** (Representado por una `Solicitud` en estado avanzado)

- **Atributos:**
- ID de Contrato (corresponde a `id_solicitud`)
- Partes involucradas (ID Cliente, ID Reparador)
- Monto final acordado (`monto`)
- Fecha de acuerdo (`fecha_contrato`)
- Fecha de finalización (`fecha_finalizacion`)
- **Restricciones:**
- La `fecha_contrato` se registra cuando el estado de la solicitud pasa a "Asignada".
- La `fecha_finalizacion` se registra cuando el estado pasa a "Completada".

➤ **Objeto de información: Calificación a Reparador** (Basado en la tabla `reseña_a_reparador`)

- **Atributos:**
- ID de Reseña
- ID de Contrato (`id_solicitud`)
- Calificación (de 1 a 5)
- Comentario
- Fecha
- **Restricciones:**
- La `calificacion` debe ser un valor entre 1 y 5.
- Solo puede existir una calificación de reparador por contrato (`id_solicitud` es único).
- Solo el Reparador asociado al contrato puede emitir esta calificación.

➤ **Objeto de información: Sanción** (Representado por la relación entre `usuario` y `historial_estado_usuario`)

- **Atributos:**
- ID de Usuario (sancionado).
- Tipo de Estado (Habilitado, Suspendido, Inhabilitado).
- Fecha de inicio del estado.
- **Restricciones:**
- La cancelación de un contrato por un usuario genera un registro en su `historial_estado_usuario` y puede cambiar su `id_estado_usuario` según las reglas.
- Un estado de "Suspendido" debe tener una duración definida antes de volver a "Habilitado".
- Un estado de "Inhabilitado" es permanente.

➤ **Detalle de Actividades del Proceso**

➤ **Actividad:** Buscar y Seleccionar Reparador.

- **Origen:** Necesidad de servicio por parte del cliente.
- **Agente:** Cliente.
- **Precondiciones:** El Cliente ha iniciado sesión en la plataforma.
- **Post Condiciones:** El Cliente ha identificado y seleccionado a un Reparador potencial.
- **Caso de uso del sistema:** `<pendiente de especificar>`

➤ **Actividad:** Enviar Solicitud de Servicio.

- **Origen:** El Cliente ha seleccionado a un Reparador.
- **Agente:** Cliente.
- **Precondiciones:** Un Reparador ha sido seleccionado.
- **Post Condiciones:** Se ha enviado una solicitud formal al Reparador a través del sistema.
- **Caso de uso del sistema:** `<pendiente de especificar>`

➤ **Actividad:** Evaluar y Aceptar Solicitud.

- **Origen:** El Reparador recibe una nueva solicitud de servicio.
- **Agente:** Reparador.
- **Precondiciones:** Existe una solicitud pendiente de respuesta.
- **Post Condiciones:** La solicitud ha sido aceptada y se ha confirmado el acuerdo sobre el precio.
- **Caso de uso del sistema:** `<pendiente de especificar>`

➤ **Actividad:** Generar Contrato de Servicio.

- **Origen:** Se ha aceptado una solicitud y acordado un precio.
- **Agente:** Sistema Fixceler.
- **Precondiciones:** Existe un acuerdo entre el Cliente y el Reparador.
- **Post Condiciones:** Se ha generado un contrato virtual que formaliza el acuerdo.
- **Caso de uso del sistema:** `<pendiente de especificar>`

➤ **Actividad:** Ejecutar Servicio.

- **Origen:** Se ha generado y aceptado un contrato de servicio.
- **Agente:** Reparador.
- **Precondiciones:** Existe un contrato activo.
- **Post Condiciones:** El trabajo de reparación ha sido realizado físicamente.
- **Caso de uso del sistema:** `<pendiente de especificar>`

➤ **Actividad:** Confirmar Terminación de Servicio.

- **Origen:** El Reparador ha finalizado el trabajo.
- **Agente:** Cliente y Reparador.
- **Precondiciones:** El servicio ha sido ejecutado.
- **Post Condiciones:** Ambas partes han confirmado en la plataforma que el servicio ha concluido.
- **Caso de uso del sistema:** `<pendiente de especificar>`

➤ **Actividad:** Confirmar Pago de Servicio.

- **Origen:** El servicio ha sido confirmado como terminado.
- **Agente:** Cliente y Reparador.
- **Precondiciones:** El pago físico o externo ha sido realizado por el cliente.
- **Post Condiciones:** Ambas partes han confirmado en la plataforma que el pago fue realizado y recibido.
- **Caso de uso del sistema:** `<pendiente de especificar>`

➤ **Actividad:** Calificar Experiencia.

- **Origen:** El contrato ha sido cerrado exitosamente.
- **Agente:** Cliente y Reparador.
- **Precondiciones:** El contrato tiene el estado "Completado".
- **Post Condiciones:** Se ha registrado una calificación de ambas partes en la plataforma.
- **Caso de uso del sistema:** `<pendiente de especificar>`

### Modelo de caso de uso inicial para el proceso: Gestionar Cuenta de Usuario

### Modelo de objetos del negocio del proceso de objetos: Gestionar Cuenta de Usuario

---

## Especificación de Caso de Uso del Negocio

## Gestionar Cuenta de Usuario

---

### Historial de revisión

| Fecha | Versión | Descripción | Autor |
| --- | --- | --- | --- |
| 15/06/2025 | 1.0 | Versión inicial del CUN para la gestión de cuentas de usuario. | El equipo de trabajo |

---

### Especificación de Caso de Uso del Negocio Gestión Cuenta de Usuario

#### 1. Introducción

El presente trabajo estudia la evaluación del proceso de negocio gestión cuenta de usuario en la cual se encuentran involucrados el cliente, el reparador y el sistema Fixceler.

#### **1.1 Propósito**

Establecer el proceso de negocio para el ciclo de vida de la cuenta de un usuario en la plataforma Fixceler. Esto incluye cómo un individuo se une a la comunidad, cómo accede a su cuenta y cómo mantiene su información personal y profesional actualizada.

#### **1.2 Alcance**

El caso de uso comienza cuando una persona sin registrar decide crear una cuenta. Cubre el registro, la validación de datos, el inicio de sesión y la modificación de la información del perfil. Termina cuando el usuario ha completado la gestión de su cuenta.

#### **1.3 Definiciones, Acrónimos y Abreviaciones**

Ver el glosario de términos del proyecto Fixceler.

#### **1.4 Referencias**

La información para la elaboración de este CUN ha sido extraída de los documentos de procesos proporcionados, incluyendo "Registrar usuario", "Iniciar sesión" y "Actualizar información", así como del script de la base de datos.

### **2. Gestionar Cuenta de Usuario**

#### **2.1 Descripción Breve**

Este CUN describe cómo una persona se registra en Fixceler, eligiendo ser Cliente o Reparador, y cómo posteriormente gestiona su perfil. Esto incluye el acceso seguro mediante credenciales y la capacidad de actualizar datos personales, de contacto o profesionales, como las especialidades en el caso de un Reparador.

### **3. Flujo de trabajo básico**

1. El caso de uso comienza cuando un nuevo visitante decide **Registrarse** en la plataforma.
2. El visitante **Elige su tipo de cuenta** (Cliente o Reparador).
3. El visitante **Ingresa sus datos personales** requeridos (nombres, apellidos, email, contraseña, etc.). Si elige ser Reparador, también puede añadir sus especialidades y certificados.
4. El **Sistema Fixceler** valida los datos y **Crea la cuenta del nuevo usuario**.
5. Posteriormente, cuando un usuario regresa a la plataforma, I**ngresa sus credenciales** (email y contraseña) para **Iniciar Sesión**.
6. Una vez dentro, el usuario puede decidir **Actualizar su información**, modificando su perfil.
7. El usuario envía los cambios y el **Sistema Fixceler** los registra.
8. El CUN finaliza.

### **4. Flujos de trabajo alternativos**

#### **4.1. Datos de Registro Inválidos**

- En el paso 4 del flujo básico, si los datos ingresados por el visitante no son válidos (ej. email ya existe, DNI duplicado), el **Sistema Fixceler** rechaza el registro, informa al visitante sobre el error y le solicita que corrija la información, regresando al paso 3.

#### **4.2. Credenciales de Inicio de Sesión Inválidas**

- En el paso 5 del flujo básico, si el usuario ingresa un email o contraseña incorrectos, el **Sistema Fixceler** rechaza el acceso y le solicita que lo intente nuevamente.

### **Agentes implicados en el proceso de negocio**

- **Actores:**
- Cliente
- Reparador
  (Ambos actúan en el rol de "Usuario" en este CUN)
- **Trabajadores del Negocio:**
- Sistema Fixceler

### **Diagrama de Proceso de Negocio (BPM)**

*[Placeholder para el diagrama BPM del proceso que será insertado por el equipo de desarrollo.]*

### **Listado de entidades del proceso del negocio**

- Usuario
- Cliente
- Reparador
- Especialidad
- Certificado

### **Reglas de negocio del proceso de negocio**

➤ **Objeto de información: Usuario** (Basado en la tabla `usuario`)

- **Atributos:** ID de Usuario, Nombres, Apellidos, Email, Contraseña, Teléfono, DNI, Foto de perfil, Fecha de registro, Estado del usuario.
- **Restricciones:**
- El `email` debe ser único en toda la plataforma.
- El `dni` debe ser único y contener 8 dígitos numéricos.
- El `telefono` debe contener 9 dígitos numéricos.
- El `id_estado_usuario` por defecto al crear un usuario es "habilitado".

➤ **Objeto de información: Cliente** (Basado en la tabla `cliente`)

- **Atributos:** ID de Cliente, ID de Usuario (asociado), Ubicación, Promedio de calificación, Cantidad de calificaciones.
- **Restricciones:**
- Un `id_usuario` solo puede estar asociado a un `id_cliente`.
- La `ubicacion` es un dato obligatorio para el Cliente.

➤ **Objeto de información: Reparador** (Basado en la tabla `reparador`)

- **Atributos:** ID de Reparador, ID de Usuario (asociado), Disponibilidad, Promedio de calificación, Cantidad de calificaciones, Cantidad de servicios realizados.
- **Restricciones:**
- Un `id_usuario` solo puede estar asociado a un `id_reparador`.
- La `disponibilidad` por defecto es `true` (disponible).

➤ **Objeto de información: Especialidad** (Basado en las tablas `especialidad` y `reparador_especialidad`)

- **Atributos:** ID de Especialidad, Nombre, Descripción.
- **Restricciones:**
- Un Reparador puede tener múltiples especialidades, pero la combinación de Reparador y Especialidad debe ser única.

---

➤ **Detalle de Actividades del Proceso**

➤ **Actividad:** Registrar Nuevo Usuario.

- **Origen:** Decisión de un visitante de unirse a la plataforma.
- **Agente:** Visitante (futuro Cliente o Reparador).
- **Precondiciones:** La persona no tiene una cuenta existente.
- **Post Condiciones:** Se ha creado una nueva cuenta de usuario en la base de datos con estado "habilitado".
- **Caso de uso del sistema:** `<Registrar Usuario>`

➤ **Actividad:** Iniciar Sesión.

- **Origen:** Un usuario registrado desea acceder a la plataforma.
- **Agente:** Usuario.
- **Precondiciones:** El usuario tiene una cuenta activa y conoce sus credenciales.
- **Post Condiciones:** El usuario tiene una sesión activa y acceso a las funcionalidades de su rol.
- **Caso de uso del sistema:** `<Iniciar Sesión>`

➤ **Actividad:** Actualizar Información de Perfil.

- **Origen:** Un usuario con sesión iniciada decide modificar sus datos.
- **Agente:** Usuario.
- **Precondiciones:** El usuario tiene una sesión activa.
- **Post Condiciones:** Los datos del perfil del usuario han sido actualizados en la base de datos.
- **Caso de uso del sistema:** `<Actualizar Perfil>`

### Modelo de caso de uso inicial para el proceso: Gestionar Cuenta de Usuario

### Modelo de objetos del negocio del proceso de objetos: Gestionar Cuenta de Usuario

---

## Especificación de Caso de Uso del Negocio

## **Consultar Historial de Actividad**

---

### Historial de revisión

| Fecha | Versión | Descripción | Autor |
| --- | --- | --- | --- |
| 15/06/2025 | 1.0 | Versión inicial del CUN para la consulta del historial de servicios de un usuario. | El equipo de trabajo |

---

### Especificación de Caso de Uso del Negocio Consultar Historial de Actividad

#### 1. Introducción

El presente trabajo estudia la evaluación del proceso de negocio consultar historial de actividad en la cual se encuentran involucrados el cliente, el reparador y el sistema Fixceler.

#### **1.1 Propósito**

Establecer el proceso de negocio que permite a los usuarios de Fixceler (tanto Clientes como Reparadores) acceder y revisar un registro de todos los servicios en los que han participado. El objetivo es proporcionar transparencia, un medio de consulta y un registro personal de la actividad en la plataforma.

#### **1.2 Alcance**

El caso de uso comienza cuando un usuario con sesión iniciada decide consultar su historial de servicios. El proceso cubre la solicitud y la presentación de una lista de servicios pasados. Termina cuando el usuario ha visualizado su historial.

#### **1.3 Definiciones, Acrónimos y Abreviaciones**

Ver el glosario de términos del proyecto Fixceler.

#### **1.4 Referencias**

La información para la elaboración de este CUN se ha extraído del documento de procesos "Solicitar historial de servicios" y del script de la base de datos proporcionado.

### **2. Consultar Historial de Actividad**

#### **2.1 Descripción Breve**

Este CUN describe cómo un usuario solicita a la plataforma que le muestre un listado de los servicios que ha contratado (si es Cliente) o realizado (si es Reparador). El sistema presenta un resumen de cada servicio pasado, permitiendo al usuario mantener un control sobre su actividad histórica.

### **3. Flujo de trabajo básico**

1. El caso de uso comienza cuando un **Usuario** (Cliente o Reparador) con una sesión activa, selecciona la opción para ver su "Historial de Servicios".
2. El **Sistema Fixceler** recibe la solicitud y busca en la base de datos todas las solicitudes (`solicitud`) asociadas al `id_usuario` que tengan un estado final (ej. "Completada", "Cancelada").
3. El **Sistema Fixceler** presenta al usuario una lista de los servicios encontrados, mostrando información clave de cada uno (descripción, fecha, monto, la otra parte involucrada).
4. El CUN finaliza.

### **4. Flujos de trabajo alternativos**

#### **4.1. Historial Vacío**

- En el paso 3 del flujo básico, si el **Sistema Fixceler** no encuentra ningún servicio pasado asociado al usuario, en lugar de una lista, muestra un mensaje indicando que no existen registros en su historial.

### **Agentes implicados en el proceso de negocio**

- **Actores:**
- Cliente
- Reparador
  (Ambos actúan en el rol de "Usuario")
- **Trabajadores del Negocio:**
- Sistema Fixceler

### **Diagrama de Proceso de Negocio (BPM)**

*[Placeholder para el diagrama BPM del proceso que será insertado por el equipo de desarrollo.]*

### **Listado de entidades del proceso del negocio**

- Servicio Pasado (representado por la entidad `Solicitud`)
- Calificación

### **Reglas de negocio del proceso del negocio**

➤ **Objeto de información: Servicio Pasado** (Basado en la tabla `solicitud`)

- **Atributos:** ID de Solicitud, Descripción, Fecha de finalización, Monto final, ID del Cliente, ID del Reparador, Estado final.
- **Restricciones:**
- Un usuario solo puede ver los servicios en los que participó directamente.
- La lista del historial solo debe mostrar servicios con un estado terminal ("Completada" , "Cancelada por cliente" , "Cancelada por sistema", etc.).

### Modelo de caso de uso inicial para el proceso: Gestionar Cuenta de Usuario

### Modelo de objetos del negocio del proceso de objetos: Gestionar Cuenta de Usuario

---

## Especificación de Caso de Uso del Negocio

## **Gestionar Reclamos y Quejas**

---

### Historial de revisión

| Fecha | Versión | Descripción | Autor |
| --- | --- | --- | --- |
| 15/06/2025 | 1.0 | Versión inicial del CUN para la gestión de reclamos de quejas. | El equipo de trabajo |

---

### Especificación de Caso de Uso del Negocio Gestionar Reclamos y Quejas

#### 1. Introducción

El presente trabajo estudia la evaluación del proceso de negocio gestionar reclamos y quejas en la cual se encuentran involucrados el cliente, el reparador y el sistema Fixceler.

#### **1.1 Propósito**

Establecer un proceso de negocio simple y automatizado para la gestión de reclamos y quejas presentadas por los usuarios. El objetivo es ofrecer un canal formal para expresar inconformidades y que el sistema aplique una resolución basada en reglas de manera rápida y consistente.

#### **1.2 Alcance**

El caso de uso comienza cuando un Cliente o un Reparador inicia un reclamo sobre un servicio específico. El proceso cubre el registro y el procesamiento automático del reclamo. Termina cuando el sistema ha tomado una decisión y ha notificado a las partes.

#### **1.3 Definiciones, Acrónimos y Abreviaciones**

Ver el glosario de términos del proyecto Fixceler.

#### **1.4 Referencias**

Este CUN fue definido durante las sesiones de análisis del modelo de negocio, basado en la necesidad de un sistema de "atención al cliente" automatizado.

### **2. Gestionar Reclamos y Quejas**

#### **2.1 Descripción Breve**

Este CUN describe cómo el Sistema Fixceler gestiona los reclamos o quejas. Un usuario registra su inconformidad sobre un servicio, el sistema la procesa aplicando un conjunto de reglas de negocio y ejecuta una resolución, que puede incluir una sanción a una de las partes.

### **3. Flujo de trabajo básico**

1. El caso de uso comienza cuando un **Usuario** (Cliente o Reparador) selecciona un contrato de su historial y elige la opción "Registrar Reclamo o Queja".
2. El usuario selecciona un **motivo predefinido** para su reclamo.
3. El **Sistema Fixceler** recibe y registra el reclamo, asociándolo al contrato correspondiente.
4. El sistema recopila automáticamente los datos asociados a dicho contrato.
5. El sistema **aplica las Reglas de Negocio de Resolución** para determinar el resultado.
6. Basado en el resultado, el **Sistema Fixceler** ejecuta una resolución: cierra el reclamo y, si es necesario, registra una **Sanción** en la cuenta del usuario infractor.
7. El sistema notifica a ambas partes sobre el resultado del reclamo.
8. El CUN finaliza.

### **4. Flujos de trabajo alternativos**

#### **4.1. Reclamo Inválido**

- En el paso 1, si el contrato seleccionado no es elegible para un reclamo (ej. es muy antiguo), el sistema informa al usuario que no puede iniciar el proceso y el CUN finaliza.

### **Agentes implicados en el proceso de negocio**

- **Actores:** Cliente, Reparador
- **Trabajadores del Negocio:** Sistema Fixceler

### **Diagrama de Proceso de Negocio (BPM)**

*[Placeholder para el diagrama BPM del proceso que será insertado por el equipo de desarrollo.]*

### **Listado de entidades del proceso del negocio**

- Reclamo o Queja
- Contrato de Servicio (`Solicitud`)
- Sanción

### **Reglas de negocio del proceso de negocio**

➤ **Objeto de información: Reclamo o Queja**

- **Atributos:** ID de Reclamo (único), ID de Contrato, Usuario iniciador, Motivo, Fecha, Estado (Abierto, Cerrado), Resolución.
- **Restricciones:** Un reclamo se asocia a un contrato, pero no altera el estado de dicho contrato. Solo se permite un reclamo por contrato.

➤ **Objeto de información: Sanción**

- **Atributos:** ID de Usuario, Tipo de Estado (Suspendido, Inhabilitado), Fecha, Motivo.
- **Restricciones:** La aplicación de una sanción es una posible resolución de un reclamo y se rige por las reglas de resolución y las reglas generales de acumulación de sanciones (RN-SAN).

---

➤ **Detalle de Actividades del Proceso**

➤ **Actividad:** Registrar Reclamo o Queja.

- **Origen:** Inconformidad de un usuario con un servicio.
- **Agente:** Usuario (Cliente o Reparador).
- **Precondiciones:** Existe un contrato elegible sobre el cual reclamar.
- **Post Condiciones:** Se ha registrado un reclamo formal en el sistema, asociado al contrato correspondiente.
- **Caso de uso del sistema:** `<Registrar Reclamo>`

➤ **Actividad:** Procesar Reclamo o Queja.

- **Origen:** Se ha registrado un nuevo reclamo.
- **Agente:** Sistema Fixceler.
- **Precondiciones:** Un reclamo se encuentra en estado "Abierto".
- **Post Condiciones:** El reclamo ha sido cerrado, se ha ejecutado una resolución y las partes han sido notificadas.
- **Caso de uso del sistema:** `<Procesar Reclamo>`