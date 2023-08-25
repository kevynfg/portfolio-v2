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
				Atualmente sou <b>Desenvolvedor Pleno</b> no Grupo Fcamara, e faço parte do time de Sistemas Internos. Focado no desenvolvimento de
				novas features, serviços, otimizações e novas integrações com os produtos da empresa, são produtos que realizam o gerenciamento
				financeiro da empresa, de consultores (gestão) e módulos externos que agregam para os setores: Jurídico, Infra, Governança e
				Finanças. Dentro do time também pude participar do desenvolvimento de um projeto de chamados para o Jurídico.
                Dentro do time, pude agregar no treinamento de novos membros, refatoração para diminuir complexidade e melhorar a legibilidade do código tanto
                como a performance do mesmo. Implementei testes unitários e de integração para garantir a qualidade do código e diminuir a quantidade de bugs.
                Sugeri a implementação de Lazy Loading e upgrade da versão do framework realizando POCs para demonstrar a viabilidade da implementação.
			</p>

			<hr />

			<p className="my-6 text-neutral-200">
				Tenho um cachorro chamado Júpiter, sou viciado em anime, apaixonado em rpg e não deixo passar batido um puzzle sequer.
			</p>

			<p className="my-6 text-neutral-200">
				Iniciei na área em 2020, foi no momento que retomei meus estudos e comecei uma graduação para Análise e Desenvolvimento de
				Sistemas, um ano depois abriram as portas para eu poder trabalhar na área como um <b>desenvolvedor</b> trainee.
			</p>
		</section>
	);
}
