---
title: Generalidades
description: Descripción detallada del modelo de requisitos del módulo de IA para sistema intermediario de reparaciones domésticas.
---

## **1. Introducción**

#### **1.1 Propósito**

La presente Especificación de Requisitos de Software (ERS) establece los requerimientos funcionales y no funcionales para el diseño y desarrollo de la plataforma **Fixceler**. Este documento servirá como guía para el equipo de desarrollo y como punto de referencia para futuras validaciones y mantenimiento del sistema.

#### **1.2 Alcance**

Esta Especificación de Requisitos de Software describe las características operacionales de la plataforma Fixceler. El sistema permitirá a los usuarios registrarse como Cliente o Reparador, buscar y contratar servicios, gestionar su perfil y reputación, y resolver posibles conflictos a través de un sistema automatizado.

#### **1.3 Personal involucrado**

| Nombre | Rol |
| --- | --- |
| Garcia Lescano, Leonidas | Líder del Proyecto / Desarrollador Frontend |
| Dávalos Velazco, Gabriel Mathias | Administrador de Base de Datos (DBA) |
| Gil Sixi, Luis Alberto | Desarrollador Backend |

#### **1.4 Definiciones, acrónimos y abreviaturas**

- **ERS:** Especificación de Requisitos del Software.
- **RF:** Requisito Funcional.
- **RNF:** Requisito No Funcional.
- **CUN:** Caso de Uso del Negocio.
- **CUS:** Caso de Uso del Sistema.

#### **1.5 Referencias**

| Referencia | Título | Autor |
| --- | --- | --- |
| [1] | Modelo de Negocio de Fixceler | El equipo de trabajo |
| [2] | Lista de Requisitos Preliminares de Fixceler | El equipo de trabajo |

#### **1.6 Resumen**

jiksodjsaoidjsa

## **2. Descripción general**

#### **2.1 Perspectiva del producto**

El producto final será una plataforma (aplicación web/móvil) que funcionará como un mercado de servicios de reparación. Fixceler servirá como un intermediario tecnológico para conectar a Clientes que necesitan reparaciones domésticas con Reparadores calificados, facilitando un proceso de contratación seguro y eficiente.

#### **2.2 Funcionalidad del producto**

El sistema agilizará la conexión entre Clientes y Reparadores a través de las siguientes funcionalidades principales:

- Un módulo para la gestión completa de la contratación de servicios.
- Un módulo para la administración de perfiles y reputación de usuarios.
- Un módulo para la gestión automatizada de reclamos y quejas.

#### **2.3 Características de los usuarios**

Se asume que los usuarios del sistema (Clientes y Reparadores) son personas con conocimientos básicos en el manejo de aplicaciones web y/o móviles. No se requiere una formación técnica especializada para operar la plataforma.

#### **2.4 Restricciones**

- La **metodología de desarrollo** será Scrum.
- El **lenguaje de programación** principal será JavaScript, utilizando Node.js con el framework Express para el backend y React para el frontend.
- El **ORM** utilizado para la interacción con la base de datos será Prisma.
- El **Sistema Gestor de Base de Datos (SGBD)** será MySQL, administrado con DataGrip.
- Se utilizará **Redis** para la gestión en memoria de datos de alta volatilidad, como las posiciones en tiempo real.
- El **sistema operativo** para el desarrollo y despliegue podrá ser una distribución de Linux (Ubuntu) o Windows 11.
- La **documentación técnica** se generará utilizando Starlight.
- El **modelado de procesos de negocio** se realizará con Bizagi Process Modeler.

#### **2.5 Suposiciones y dependencias**

- **Suposiciones:** Se asume que los usuarios disponen de un dispositivo con conexión a internet para acceder a la plataforma y que la información proporcionada durante el registro es veraz.
- **Dependencias:**
    - El sistema dependerá de un servicio de geolocalización externo (ej. Google Maps API) para las funcionalidades de ubicación.
    - El módulo de IA para la recomendación de reparadores dependerá de la **API de Gemini de Google**.

#### **2.6 Evolución previsible del sistema**

Considerando futuras mejoras al sistema, se podrá analizar e implementar un **sistema de pago basado en suscripciones para los usuarios**, cuyo modelo se definirá a partir de un análisis de los costos promedio por servicio en la plataforma.

