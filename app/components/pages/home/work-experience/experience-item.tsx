import { TechBadge } from "@/app/components/tech-badge/TechBadge"
import Image from "next/image"

export const ExperienceItem = () => {
    return (

    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
            <div className="rounded-full border border-gray-700 p-0.5">
            <Image
                width={300}
                height={310}
                src="/images/bd.png"
                alt="Foto de perfil " 
                className="  lg:h-auto mb-6 lg:mb-0 shadow-2xl rounded-xl"/>
            </div>

            <div className="h-full w-[1px] bg-gray-800"/>
        </div>

        <div>
            <div className="flex flex-col gap-2 text-sm sm:text-base">
                <a
                  href="https://instagram"
                  target="_blank"
                  className="text-gray-500 hover:text-[#e50e0e] transition-colors"
                >@ Bruno Coiffeur</a>

                <h4 className="text-gray-300">Barbeiro negócio próprio</h4>
                <span className="text-gray-500">
                    out 2013 | 0 momento | (10 anos)
                </span>
                <p className="text-gray-400">
                Oferecemos uma variedade de serviços tradicionais em barbearia. Para o cabelo, escolha entre aparar com máquina, um corte clássico com tesoura, ou uma transformação completa. Todos os nossos serviços de cabelo têm como cortesia a aplicação de produtos profissionais para finalizar. Para barbas, escolha um toque elegante, personalizado para se adequar ao formato de seu rosto e minimizar a necessidade de manutenção; ou a barbearia tradicional completa, com toalhas quentes e tratamento hidratante para terminar.
                </p>
            </div>

            <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
            <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                <TechBadge name="Barba e cabelo" />
                <TechBadge name="Toalhas quentes" />
                <TechBadge name="Hidratação" />
                <TechBadge name="Cortes tradicionais" />
              
            </div>
        </div>


    </div>
    )
}