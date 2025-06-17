// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Modelo de Negocio',
					items: [
						// Each item here is one entry in the navigation menu.
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
			],
		}),
	],
});
