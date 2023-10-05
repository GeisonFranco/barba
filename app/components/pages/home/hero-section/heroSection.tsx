import { Botao } from "@/app/components/botao/Botao"
import { Button } from "@/app/components/button"
import { TechBadge } from "@/app/components/tech-badge/TechBadge"
import Image from "next/image"
import { HiArrowNarrowRight } from 'React-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp} from 'react-icons/tb'
import style from './heroSection.module.css'

const MOCK_CONTACTS = [
  
    {
        url: 'https://github.com.br',
        icon: <TbBrandLinkedin/>
    },
    {
        url: 'https://github.com.br',
        icon: <TbBrandWhatsapp/>
    }
]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-[#1e1e1e] bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px] ">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row ">
                <div className="w-full lg:max-w-[530px]">
                <p className="font-mono text-[#eb0207]">Olá, meu nome é</p>
                <h2 className="text-4xl font-medium mt-2">Bruno Coiffeur</h2>

                <p className="text-gray-400 my-6 text-sm sm:text-base">Olá, sou Bruno coiffeur, minha missão é realçar a beleza, e proporcionar bem estar. Nosso espaço é formado por profissionais competentes, produtos de qualidade inquestionável e equipamentos modernos, instalações confortáveis aliados à um alto padrão de qualidade em atendimento, somos referência em barbearia em Passo Fundo.
 </p>
                
                <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        <TechBadge name="Cortes tradicionais" />
                        <TechBadge name="Escovas progressiva" />
                        <TechBadge name="Hidratação" />
                        <TechBadge name="Mega Hair" />
                        <TechBadge name="Coloração mechas" />
                        <TechBadge name="Diagnóstico de fios" />
                        <TechBadge name="Colorimetria" />
                        <TechBadge name="Estilos em degradê" />
                        <TechBadge name="Alisamento" />
                </div>
                <div className=" mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                    
                    <Botao />
                    
                    <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                        {MOCK_CONTACTS.map((contact, index) => (
                            <a
                            href={contact.url}
                            key={`contact-${index}`}
                            target="_blank"
                            className="hover:text-gray-100 transition-colors"
                            >
                                {contact.icon}
                            </a>
                        ))}
                    </div>
                </div>
                </div>

<div className={style.main}>
  <div className={style.card} id={style.c1}></div>
  <div className={style.card} id={style.c2}>
  <Image
                width={300}
                height={310}
                src="/images/corte2.jpg"
                alt="Foto de perfil" 
                className="  lg:h-auto mb-6 lg:mb-0 shadow-2xl rounded-xl"/>
  </div>
  <div className={style.card} id={style.c3}>
  <Image
                width={300}
                height={310}
                src="/images/corte1.jpg"
                alt="Foto de perfil" 
                className="  lg:h-auto mb-6 lg:mb-0 shadow-2xl rounded-xl"/>
  </div>
  <div className={style.card} id={style.c4}>
      <Image
                width={300}
                height={310}
                src="/images/01 b.jpg"
                alt="Foto de perfil" 
                className="  lg:h-auto mb-6 lg:mb-0 shadow-2xl rounded-xl"/>
  </div>
</div>

            </div>
        </section>
    )
}