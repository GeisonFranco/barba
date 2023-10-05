import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge/TechBadge"
import Image from "next/image"
export const ProjectCard = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image
                width={300}
                height={300}
                src="/images/bupf.jpg"
                alt="T"
                className=" h-[300px] sm:h-[300px] lg:w-[300px] lg:min-h-full object-cover rounded-lg"
                />
               
            </div>

            <div>
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image
                    width={20}
                    height={20}
                    alt=""
                    src="/images/bd.png"
                    />
                    Oficina Universidade de Passo Fundo
                </h3>

                <p className="text- text-gray-400 my-6">
                    Curso relaizado com a turma de formandos da Universidade de Passo Fundo, abordando temas como técnicas de corte avançadas, técnicas de sombreamento, de cortes fade e degradê, bem como alinhamento de fios e pigmentação.
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="Colorimetria"/>
                    <TechBadge name="Barbeiro básico"/>
                    <TechBadge name="Atendimento ao cliente"/>
                    <TechBadge name="Boas práticas barbearia"/>
                </div>

            </div>
        </div>
    )
}