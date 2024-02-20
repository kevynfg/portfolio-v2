import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sobre",
	description: "Desenvolvedor Jr. Grupo Fcamara",
};

export default function About() {
	return (
		<section className="max-w-[600px] lg:max-w-3xl mx-10">
			<h1 className="font-bold text-3xl font-serif">Sobre mim</h1>

			<p className="my-6 text-neutral-200">
				Tenho um cachorro chamado Júpiter, sou viciado em anime, apaixonado em rpg e não deixo passar batido um puzzle sequer.
			</p>

			<p className="my-6 text-neutral-200">
				Iniciei na área em 2020, foi no momento que retomei meus estudos e comecei uma graduação para Análise e Desenvolvimento de
				Sistemas.
			</p>
		</section>
	);
}
