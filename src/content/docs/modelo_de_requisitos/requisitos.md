---
title: Requisitos
description: Descripción detallada del modelo de requisitos del módulo de IA para sistema intermediario de reparaciones domésticas.
---

## 3. Requisitos específicos

### 3.1. Requisitos comunes de los interfaces

### 3.2. Requisitos funcionales

A continuación, se especifican los requisitos funcionales, derivados de los Casos de Uso del Sistema.

#### 3.2.1 PROCESO DE NEGOCIO: GESTIONAR CONTRATACIÓN DE SERVICIO

| ID  | Nombre | Especificación | Prioridad |
| --- | --- | --- | --- |
| **RF-01** | Búsqueda y Filtro de Reparadores | El sistema debe permitir al Cliente buscar reparadores. La búsqueda debe poder filtrarse por especialidad, ubicación, disponibilidad y calificación promedio. | Alta |
| **RF-02** | Visualización de Perfil Público | El sistema debe permitir al Cliente visualizar el perfil público y detallado de un reparador, incluyendo su información, especialidades, certificados y reseñas. | Alta |
| **RF-03** | Envío de Solicitud de Servicio | El sistema debe permitir a un Cliente enviar una solicitud de servicio a un reparador, especificando la descripción del trabajo y un monto (opcional). | Alta |
| **RF-04** | Gestión de Solicitudes (Reparador) | El sistema debe presentar al Reparador un listado de solicitudes recibidas, permitiéndole aceptarlas, rechazarlas con un motivo o iniciar una negociación. | Alta |
| **RF-05** | Negociación de Precio | El sistema debe facilitar un flujo de intercambio de contraofertas entre el Cliente y el Reparador hasta que se alcance un acuerdo. | Alta |
| **RF-06** | Creación de Contrato Virtual | Tras un acuerdo, el sistema debe generar un contrato virtual que resuma los términos del servicio para la aceptación de ambas partes. | Alta |
| **RF-07** | Cancelación de Contrato | El sistema debe permitir que el Cliente o el Reparador cancelen un contrato activo, registrando el motivo y aplicando las reglas de sanción. | Media |
| **RF-08** | Seguimiento de Ubicación | El sistema debe mostrar al Cliente, en un mapa, la ubicación en tiempo real del Reparador cuando este se encuentre en camino. | Alta |
| **RF-09** | Confirmación de Finalización | El sistema debe permitir que ambas partes confirmen, de forma mutua, que el servicio ha sido completado. | Alta |
| **RF-10** | Confirmación de Pago | El sistema debe tener una función para que el Cliente marque el servicio como "Pagado" y el Reparador lo marque como "Cobrado". | Alta |
| **RF-11** | Calificación de Servicio (Mutua) | Tras completarse un servicio, el sistema debe permitir al Cliente y al Reparador calificarse mutuamente (estrellas y comentario). | Alta |
| **RF-12** | Notificaciones de Estado | El sistema debe enviar notificaciones automáticas (por email o push) a los usuarios sobre los cambios de estado importantes de una solicitud (ej. nueva oferta, servicio finalizado). | Alta |

**MODELO DE DOMINIO**

- **Objetos del proceso:** Solicitud de Servicio, Cliente, Reparador, Especialidad, Calificación, Sanción, Contrato, Pago, Notificación.
- **Asociaciones entre los objetos:** Cliente-crea-Solicitud, Reparador-es asignado a-Solicitud, Solicitud-genera-Contrato, Contrato-registra-Pago, Contrato-genera-Calificación, Contrato-puede generar-Sanción.

#### 3.2.2 PROCESO DE NEGOCIO: GESTIONAR CUENTA DE USUARIO

| ID  | Nombre | Especificación | Prioridad |
| --- | --- | --- | --- |
| **RF-13** | Registro de Nuevo Usuario | El sistema debe permitir el registro de nuevos usuarios, con roles de Cliente o Reparador, validando la unicidad del email y DNI. | Alta |
| **RF-14** | Autenticación de Usuario | El sistema debe permitir a un usuario iniciar sesión de forma segura utilizando su correo electrónico y contraseña. | Alta |
| **RF-15** | Gestión de Perfil Básico | El sistema debe permitir a un usuario modificar su información personal básica (nombres, teléfono, foto de perfil). | Alta |
| **RF-16** | Gestión de Perfil de Reparador | El sistema debe permitir al Reparador añadir, editar o eliminar sus especialidades y subir documentos de certificación. | Alta |
| **RF-17** | Gestión de Disponibilidad | El sistema debe permitir al Reparador cambiar su estado entre "Disponible" y "No Disponible". | Alta |
| **RF-18** | Recuperación de Contraseña | El sistema debe ofrecer una funcionalidad segura para que los usuarios puedan restablecer su contraseña. | Alta |
| **RF-19** | Cierre de Sesión | El sistema debe permitir a un usuario terminar su sesión de forma segura en todos sus dispositivos. | Media |

**MODELO DE DOMINIO**

- **Objetos del proceso:** Usuario, Cliente, Reparador, Especialidad, Certificado, Estado de Usuario.
- **Asociaciones entre los objetos:** Cliente-es un-Usuario, Reparador-es un-Usuario, Reparador-posee-Especialidad, Reparador-gestiona-Certificado, Usuario-tiene un-Estado de Usuario.

#### 3.2.3 PROCESO DE NEGOCIO: CONSULTAR HISTORIAL DE ACTIVIDAD

| ID  | Nombre | Especificación | Prioridad |
| --- | --- | --- | --- |
| **RF-20** | Consulta de Historial de Servicios | El sistema debe permitir a un usuario ver una lista cronológica de todos los servicios pasados en los que ha participado. | Alta |
| **RF-21** | Detalle de Servicio Pasado | El sistema debe permitir al usuario ver los detalles completos de un servicio de su historial, incluyendo monto, fechas, reparador/cliente y calificaciones otorgadas. | Media |
| **RF-22** | Filtro de Historial | El sistema debe permitir filtrar el historial de servicios por rango de fechas o por estado (Completado, Cancelado). | Baja |

**MODELO DE DOMINIO**

- **Objetos del proceso:** Usuario, Solicitud de Servicio (como registro histórico), Calificación.
- **Asociaciones entre los objetos:** Usuario-participó en-Solicitud de Servicio, Solicitud de Servicio-tiene-Calificación.

#### 3.2.4 PROCESO DE NEGOCIO: GESTIONAR RECLAMOS Y SANCIONES

| ID  | Nombre | Especificación | Prioridad |
| --- | --- | --- | --- |
| **RF-23** | Registrar Reclamo o Queja | El sistema debe permitir a un usuario iniciar un reclamo sobre un servicio, seleccionando un motivo predefinido y añadiendo una descripción. | Alta |
| **RF-24** | Procesamiento Automático de Reclamo | El sistema debe analizar el reclamo basado en reglas de negocio y aplicar una resolución automática (ej. registrar advertencia). | Alta |
| **RF-25** | Notificación de Resolución | El sistema debe notificar a ambas partes sobre el resultado de un reclamo. | Alta |
| **RF-26** | Visualización de Estado de Cuenta | El sistema debe mostrar al usuario su estado actual (Habilitado, Suspendido, etc.) y un historial de sus sanciones. | Media |

**MODELO DE DOMINIO**

- **Objetos del proceso:** Reclamo, Solicitud de Servicio, Usuario, Sanción, Estado de Usuario.
- **Asociaciones entre los objetos:** Reclamo-se asocia a-Solicitud, Reclamo-es iniciado por-Usuario, Reclamo-puede generar-Sanción.

## 3.3. Requisitos No Funcionales

| ID  | Nombre | Especificación | Prioridad |
| --- | --- | --- | --- |
| RNF-01 | Interoperabilidad con IA | El sistema debe ser capaz de conectarse a un servicio externo de IA para el análisis y recomendación de servicios. | Alta |
| RNF-02 | Interoperabilidad con Mapas | El sistema debe poder integrarse con un servicio de mapas externo para visualizar datos de geolocalización. | Alta |
| RNF-03 | Compatibilidad de Navegadores | La aplicación web debe ser compatible con las dos últimas versiones estables de Google Chrome, Firefox y Safari. | Alta |
| RNF-04 | Cumplimiento Normativo | El tratamiento de datos personales debe cumplir con la Ley de Protección de Datos Personales del Perú (Ley N° 29733). | Alta |

## 3.4 Requisitos de Dominio

| ID  | Nombre | Especificación | Prioridad |
| --- | --- | --- | --- |
| DD-01 | Unicidad de Calificación | Un servicio solo puede ser calificado una única vez por cada participante. | Alta |
| DD-02 | Condición de Calificación | La funcionalidad para calificar un servicio se habilita únicamente después de que el servicio es marcado como "Completado". | Alta |
| DD-03 | Política de Sanciones | Las sanciones por cancelación son acumulativas: 1ª vez=Advertencia, 2ª=Suspensión, 3ª=Inhabilitación. | Alta |
| DD-04 | Exclusividad de Rol | Un usuario no puede ser Cliente y Reparador simultáneamente con la misma cuenta. | Alta |

## 3.5 Requisitos de Desarrollo

| ID  | Nombre | Especificación                                                                                             | Prioridad |
| --- | --- |------------------------------------------------------------------------------------------------------------| --- |
| RD-01 | Metodología | El proyecto se gestionará utilizando la metodología Sashimi.                       | Alta |
| RD-02 | Stack Tecnológico | El sistema se desarrollará con JavaScript (Node.js, React, Express), MySQL y Redis.                        | Alta |
| RD-03 | Control de Versiones | Todo el código fuente del proyecto se gestionará utilizando Git en un repositorio centralizado (ej. GitHub). | Alta |
| RD-04 | Herramientas Externas | Se utilizará la API de Gemini para IA y una API de mapas (ej. Google Maps) para geolocalización.           | Alta |

## 3.6 Requisitos de Calidad

| ID  | Nombre | Especificación                                                                                                                | Prioridad |
| --- | --- |-------------------------------------------------------------------------------------------------------------------------------| --- |
| RC-01 | Rendimiento de Búsqueda | El tiempo de respuesta para una búsqueda de reparadores no debe exceder los 5 segundos.                                       | Alta |
| RC-02 | Seguridad de Credenciales | Las contraseñas deben almacenarse en la base de datos utilizando un hash seguro (ej. bcrypt).                                 | Alta |
| RC-03 | Disponibilidad | El sistema deberá tener una disponibilidad del 99.5% del tiempo.                                                              | Alta |
| RC-04 | Integridad de la Transacción | El sistema debe garantizar que ninguna operación (ej. registro de pago) quede en un estado intermedio en caso de fallo.       | Alta |
| RC-05 | Tiempo de Carga de Página | El tiempo de carga inicial de las páginas principales no debe superar los 5 segundos en una conexión de banda ancha promedio. | Media |