// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Fixceler Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Modelo de Negocio',
					items: [
						{ label: 'Perfil del Negocio', slug: 'modelo_de_negocio/perfil_del_negocio' },
						{ label: 'Vision del Negocio', slug: 'modelo_de_negocio/vision_del_negocio' },
						{ label: 'Modelo de Casos de Uso del Negocio', slug: 'modelo_de_negocio/modelo_cun' },
					],
				},
				{
					label: 'Modelo de Requisitos',
					items: [
						{ label: 'Generalidades', slug: 'modelo_de_requisitos/generalidades' },
						{ label: 'Requisitos', slug: 'modelo_de_requisitos/requisitos' },
					],
				},
				{
					label: 'Modelo de Analisis',
					items: [
						{ label: 'Modelo de Analisis', slug: 'modelo_de_analisis/modelo_analisis' },
					],
				},
			],
		}),
	],
});
