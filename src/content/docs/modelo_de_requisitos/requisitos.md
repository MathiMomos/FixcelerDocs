---
title: Requisitos
description: Descripción detallada del modelo de requisitos del módulo de IA para sistema intermediario de reparaciones domésticas.
---

### 3. Requisitos específicos

#### 3.1. Requisitos comunes de los interfaces

#### 3.2. Requisitos funcionales

A continuación, se especifican los requisitos funcionales, derivados de los Casos de Uso del Sistema.

##### **PROCESO DE NEGOCIO: GESTIONAR CONTRATACIÓN DE SERVICIO**

| ID  | Nombre | Especificación | Prioridad |
| --- | --- | --- | --- |
| **RF-01** | Buscar Reparador por Criterios | El sistema debe permitir al Cliente buscar reparadores utilizando filtros por especialidad, ubicación y calificación. | Alta |
| **RF-02** | Ver Perfil de Reparador | El sistema debe permitir al Cliente visualizar el perfil completo de un reparador, incluyendo su información personal, especialidades, certificados y calificaciones. | Alta |
| **RF-03** | Enviar Solicitud de Servicio | El sistema debe permitir a un Cliente enviar una solicitud de servicio a un reparador específico, detallando el problema y, opcionalmente, un monto propuesto. | Alta |
| **RF-04** | Revisar Solicitudes de Servicio | El sistema debe permitir al Reparador visualizar una lista de las solicitudes de servicio que ha recibido, con la opción de ver el detalle de cada una. | Alta |
| **RF-05** | Gestionar Negociación de Precio | El sistema debe facilitar un flujo donde el Reparador pueda proponer una contraoferta y el Cliente pueda aceptarla o rechazarla, hasta llegar a un acuerdo. | Alta |
| **RF-06** | Formalizar Contrato de Servicio | Una vez acordado un precio, el sistema debe generar un contrato virtual que ambas partes puedan aceptar para formalizar el servicio. | Alta |
| **RF-07** | Cancelar Contrato | El sistema debe permitir a cualquiera de las dos partes cancelar un contrato activo, registrando el motivo y aplicando las reglas de negocio correspondientes (sanciones). | Media |
| **RF-08** | Realizar Seguimiento de Reparador | El sistema debe mostrar al Cliente la ubicación aproximada en tiempo real del reparador mientras este se encuentra en camino al domicilio. | Alta |
| **RF-09** | Confirmar Finalización de Servicio | El sistema debe permitir que ambas partes confirmen que el servicio ha sido concluido satisfactoriamente. | Alta |
| **RF-10** | Confirmar Pago | El sistema debe permitir que ambas partes confirmen que el pago por el servicio ha sido realizado y recibido. | Alta |
| **RF-11** | Calificar a Reparador | Tras completar un servicio, el sistema debe permitir al Cliente asignar una calificación (de 1 a 5) y dejar un comentario al Reparador. | Alta |
| **RF-12** | Calificar a Cliente | Tras completar un servicio, el sistema debe permitir al Reparador asignar una calificación (de 1 a 5) y dejar un comentario al Cliente. | Media |

##### **PROCESO DE NEGOCIO: GESTIONAR CUENTA DE USUARIO**

| ID  | Nombre | Especificación | Prioridad |
| --- | --- | --- | --- |
| **RF-13** | Registrar Usuario | El sistema debe permitir a un nuevo visitante registrarse, eligiendo un rol (Cliente o Reparador) y proporcionando sus datos personales como nombres, email, contraseña, DNI y teléfono. | Alta |
| **RF-14** | Iniciar Sesión | El sistema debe permitir a un usuario registrado autenticarse utilizando su email y contraseña para acceder a la plataforma. | Alta |
| **RF-15** | Actualizar Perfil | El sistema debe permitir a un usuario con sesión iniciada modificar la información de su perfil, incluyendo datos personales y, en el caso del reparador, sus especialidades y certificados. | Alta |
| **RF-16** | Cerrar Sesión | El sistema debe permitir a un usuario con sesión iniciada terminar su sesión de forma segura. | Media |
| **RF-17** | Recuperar Contraseña | El sistema debe proveer un mecanismo para que un usuario que ha olvidado su contraseña pueda restablecerla de forma segura, usualmente a través de un enlace enviado a su correo electrónico. | Media |