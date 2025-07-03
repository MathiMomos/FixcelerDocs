---
title: Requisitos
description: Descripción detallada del modelo de requisitos del módulo de IA para sistema intermediario de reparaciones domésticas.
---

## 3. Requisitos específicos

### 3.1. Requisitos funcionales

A continuación, se especifican las funcionalidades principales del sistema.

#### 3.1.1 PROCESO DE NEGOCIO: GESTIONAR CONTRATACIÓN DE SERVICIO

| ID | Nombre | Especificación | Prioridad |
| :--- | :--- | :--- | :--- |
| RF-01 | Búsqueda y Filtro de Reparadores | El sistema debe proveer una interfaz para que el Cliente busque reparadores, con opciones para filtrar por especialidad, ubicación y calificación. | Alta |
| RF-02 | Visualización de Perfil Público | El sistema debe mostrar el perfil público de un reparador, detallando su información, especialidades y reseñas de otros clientes. | Alta |
| RF-03 | Envío de Solicitud de Servicio | El sistema debe permitir a un Cliente enviar una solicitud formal de servicio a un reparador específico a través de un botón de envío de solicitud.| Alta |
| RF-04 | Gestión de Solicitudes (Reparador) | El sistema debe presentar al Reparador un listado de solicitudes recibidas, con opciones para aceptarlas, rechazarlas o iniciar una negociación. | Alta |
| RF-05 | Negociación de Precio | El sistema debe facilitar una interfaz para el intercambio de ofertas de precio entre Cliente y Reparador sobre una solicitud activa. | Alta |
| RF-06 | Creación de Contrato Virtual | El sistema debe generar un contrato virtual con los términos acordados para que ambas partes lo acepten formalmente. | Alta |
| RF-07 | Seguimiento de Ubicación en Mapa | El sistema debe mostrar en una interfaz de mapa la ubicación en tiempo real del Reparador durante el trayecto al servicio. | Alta |
| RF-08 | Notificaciones de Estado | El sistema debe enviar notificaciones automáticas (por email o push) a los usuarios sobre cambios de estado relevantes en sus solicitudes y contratos. | Alta |

#### 3.1.2 PROCESO DE NEGOCIO: GESTIONAR CUENTA DE USUARIO

| ID    | Nombre | Especificación | Prioridad |
|:------| :--- | :--- | :--- |
| RF-09 | Registro de Nuevo Usuario | El sistema debe proveer un formulario para el registro de nuevos usuarios (Clientes o Reparadores). | Alta |
| RF-10 | Autenticación de Usuario | El sistema debe permitir a un usuario iniciar sesión de forma segura utilizando su correo electrónico y contraseña. | Alta |
| RF-11 | Gestión de Perfil Básico | El sistema debe permitir a un usuario modificar su información personal básica (nombres, teléfono, foto de perfil) a través de un formulario. | Alta |
| RF-12 | Gestión de Disponibilidad | El sistema debe permitir al Reparador cambiar su estado de disponibilidad a través de un interruptor en su perfil. | Alta |
| RF-13 | Cierre de Sesión | El sistema debe permitir a un usuario terminar su sesión activa de forma segura. | Media |

#### 3.1.3 PROCESO DE NEGOCIO: CONSULTAR HISTORIAL DE ACTIVIDAD

| ID    | Nombre | Especificación | Prioridad |
|:------| :--- | :--- | :--- |
| RF-14 | Consulta de Historial de Servicios | El sistema debe mostrar a un usuario una lista cronológica de todos los servicios pasados en los que ha participado. | Alta |
| RF-15 | Detalle de Servicio Pasado | El sistema debe permitir al usuario ver una pantalla con los detalles completos de un servicio de su historial. | Media |
| RF-16 | Filtro de Historial | El sistema debe proveer controles en la interfaz para filtrar el historial de servicios por rango de fechas o por estado. | Baja |

#### 3.1.4 PROCESO DE NEGOCIO: GESTIONAR RECLAMOS Y SANCIONES

| ID    | Nombre | Especificación | Prioridad |
|:------| :--- | :--- | :--- |
| RF-17 | Registrar Reclamo o Queja | El sistema debe ofrecer un formulario para que un usuario inicie un reclamo sobre un servicio. | Alta |
| RF-18 | Notificación de Resolución | El sistema debe notificar a ambas partes sobre el resultado de un reclamo. | Alta |
| RF-19 | Visualización de Estado de Cuenta | El sistema debe mostrar al usuario su estado de cuenta actual (Habilitado, Suspendido, etc.) y su historial de sanciones. | Media |

### 3.2. Requisitos No Funcionales

| ID | Nombre | Especificación | Prioridad |
| :--- | :--- | :--- | :--- |
| RNF-01 | Interoperabilidad con IA | El sistema debe ser capaz de conectarse a la API de Gemini para el análisis y recomendación de servicios. | Alta |
| RNF-02 | Interoperabilidad con Mapas | El sistema debe poder integrarse con un servicio de mapas externo (API de Google Maps) para visualizar datos de geolocalización. | Alta |
| RNF-03 | Compatibilidad de Aplicación | La aplicación (Flutter) debe ser compatible con las dos últimas versiones mayores de Android. | Alta |
| RNF-04 | Cumplimiento Normativo | El tratamiento de datos personales debe cumplir con la Ley de Protección de Datos Personales del Perú (Ley N° 29733), incluyendo la obtención de consentimiento explícito. | Alta |
| RNF-05 | Manejo de Errores API Externa | El sistema debe manejar los fallos de conexión con las APIs externas (Gemini, Google Maps), informando al usuario que la funcionalidad no está disponible temporalmente sin bloquear la aplicación. | Alta |
| RNF-06 | Accesibilidad | La interfaz de usuario debe cumplir con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 Nivel AA. | Media |
| RNF-07 | Portabilidad de Datos | El sistema debe proveer una función para que un usuario pueda exportar su información personal y su historial de servicios en formato JSON. | Media |
| RNF-08 | Mantenibilidad | El código fuente debe estar lógicamente modularizado para que la modificación de un componente no afecte directamente a otro. | Media |

### 3.3 Requisitos de Dominio

| ID | Nombre | Especificación | Prioridad |
| :--- | :--- | :--- | :--- |
| DD-01 | Unicidad de Calificación | Un servicio solo puede ser calificado una única vez por cada participante. | Alta |
| DD-02 | Condición de Calificación | La funcionalidad para calificar un servicio se habilita únicamente después de que ambas partes marcan el servicio como “Completado”. | Alta |
| DD-03 | Política de Sanciones | Las sanciones por cancelación son acumulativas. El contador de sanciones de un usuario se reinicia a cero tras 6 meses sin nuevas sanciones. | Media |
| DD-04 | Exclusividad de Rol | Un usuario no puede ser Cliente y Reparador simultáneamente con la misma cuenta. | Alta |
| DD-05 | Caducidad de Oferta | Una oferta o contraoferta en la negociación de precio caducará automáticamente si no es respondida en un plazo de 48 horas. | Media |
| DD-06 | Límite de Solicitudes | Un Cliente solo puede tener una (1) solicitud de servicio activa (en estado "Pendiente" o "Negociando") simultáneamente. | Alta |
| DD-07 | Condición de Finalización | Un servicio no puede ser marcado como "Terminado" si el pago no ha sido confirmado por ambas partes (Cliente como "Pagado" y Reparador como "Cobrado"). | Alta |
| DD-08 | Estado de Contrato Inmutable | Una vez que un contrato es marcado como 'Finalizado' o 'Cancelado', su estado y detalles principales no pueden ser modificados por ninguno de los usuarios. | Alta |
| DD-09 | Confirmación Mutua de Finalización | El sistema requiere que ambas partes (Cliente y Reparador) confirmen que un servicio ha finalizado para que este se marque como "Completado". | Alta |
| DD-10 | Confirmación Mutua de Pago | El estado de un servicio se considera "Pagado y Cobrado" solo cuando el Cliente lo marca como "Pagado" y el Reparador lo marca como "Cobrado". | Alta |
| DD-11 | Gestión de Perfil de Reparador | Solo los usuarios con el rol de "Reparador" pueden añadir, editar o eliminar sus especialidades y certificaciones. | Alta |

### 3.4 Requisitos de Desarrollo

| ID | Nombre | Especificación | Prioridad |
| :--- | :--- | :--- | :--- |
| RD-01 | Metodología | El proyecto se gestionará utilizando la metodología Sashimi. | Alta |
| RD-02 | Stack Tecnológico | El sistema se desarrollará con Dart (Flutter), JavaScript (Node.js, Express), MySQL y Redis. | Alta |
| RD-03 | Control de Versiones | Todo el código fuente del proyecto se gestionará utilizando Git en un repositorio centralizado (GitHub), siguiendo el flujo de trabajo GitFlow. | Alta |
| RD-04 | Herramientas Externas | Se utilizará la API de Gemini para IA y la API de Google Maps para geolocalización. | Alta |
| RD-05 | Entornos de Despliegue | Se deben mantener tres entornos idénticos y aislados: Desarrollo, Pruebas (Staging) y Producción. | Alta |
| RD-06 | Estándares de Código | El equipo debe adherirse a las guías de estilo de código oficiales de Dart ("Effective Dart") y una guía definida para JavaScript (ej. Airbnb). | Media |
| RD-07 | Pruebas Unitarias | Los componentes críticos del backend (lógica de negocio, controladores de API) deben tener una cobertura de pruebas unitarias no inferior al 80%. | Alta |

### 3.5 Requisitos de Calidad

| ID | Nombre | Especificación | Prioridad |
| :--- | :--- | :--- | :--- |
| RC-01 | Rendimiento de Búsqueda | Bajo una carga de 200 usuarios concurrentes, el tiempo de respuesta promedio para una búsqueda de reparadores debe ser inferior a 2 segundos. | Alta |
| RC-02 | Seguridad de Credenciales | Las contraseñas deben almacenarse en la base de datos utilizando un hash criptográfico fuerte con bcrypt. | Alta |
| RC-03 | Disponibilidad | El sistema deberá tener una disponibilidad del 99.8% del tiempo, bajo carga pesada | Alta |
| RC-04 | Tiempo de Carga de App | En una conexión de red móvil 4G promedio, el tiempo hasta que la pantalla principal es interactiva debe ser inferior a 5 segundos. | Media |
| RC-05 | Rendimiento Bajo Carga | Bajo una carga máxima simulada de 1000 usuarios realizando solicitudes simultáneamente, la tasa de error del servidor no debe superar el 1%. | Alta |
| RC-06 | Consistencia de Datos | Tras una actualización de perfil por parte de un Reparador, la nueva información debe verse reflejada en todas las búsquedas de los Clientes en menos de 1 minuto. | Media |
| RC-07 | Consumo de Batería | Durante el uso activo del seguimiento por mapa en la aplicación, el consumo de batería del dispositivo no debe aumentar más de un 15% por hora. | Media |