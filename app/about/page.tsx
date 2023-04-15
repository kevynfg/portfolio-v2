import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sobre',
    description: 'Desenvolvedor Jr. Grupo Fcamara',
  };

export default function About() {
    return (
        <section className="max-w-[600px] lg:max-w-3xl mx-10">
            <h1 className="font-bold text-3xl font-serif">
                    Sobre mim
            </h1>
            <p className="my-6 text-neutral-200">
                Atualmente sou <b>Desenvolvedor Full-stack Jr.</b> no Grupo Fcamara, 
                e faço parte do time de Sistemas Internos. Focado no desenvolvimento de novas features, serviços,
                otimizações e novas integrações com os produtos da empresa, são produtos que realizam o gerenciamento
                financeiro da empresa, de consultores (gestão) e módulos externos que agregam para os setores: Jurídico, Infra, Governança e Finanças.
                Dentro do time também pude participar do desenvolvimento de um projeto de chamados para o Jurídico.
            </p>

            <hr/>
            
            <p className="my-6 text-neutral-200">
                Tenho uma esposa maravilhosa e um cachorro chamado Júpiter, sou viciado em anime,
                apaixonado em jogos, e adoro solucionar desafios/problemas.
            </p>
            
            <p className="my-6 text-neutral-200">
                Apenas recentemente iniciei na área, em 2020 que retomei meus estudos e comecei uma graduação para Análise e Desenvolvimento de Sistemas, um ano depois
                abriram as portas para eu poder trabalhar na área como um <b>desenvolvedor</b> trainee.
            </p>
        </section>
    )
}