import avatar from '../app/avatar.jpg';

export const myPicture = avatar;
export const name = 'Kevyn Gonçalves'

export const about = () => {
    return (
        <p className="max-w-[600px]">
            Sou <b>desenvolvedor de software</b> e um curioso de plantão sobre tecnologias, proativo na incansável busca de conhecimento e também de compartilhar.
            Geek apaixonado por ficção com futuros distópicos
        </p>
    )
}