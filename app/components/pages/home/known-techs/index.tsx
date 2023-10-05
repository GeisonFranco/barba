import { SectionTitle } from "@/app/components/section-title"
import { KnownTech } from "./known-tech"
import { TbBrandNextjs } from "react-icons/tb"

export const KnownTechs = () => {
    return (
        <section className="container py-16 bg-[#1e1e1e]">
            <SectionTitle subtitle="competências" title="Conhecimentos" />
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(263px,1fr))] gap-3 mt-[60px]">
         
               <KnownTech tech={{
                icon: <TbBrandNextjs />,
                name: 'Cortes em degradê',
                startDate: '2014-4-05'
            }} />
             <KnownTech tech={{
                icon: <TbBrandNextjs />,
                name: 'Escova e tratamentos',
                startDate: '2015-02-05'
            }} />
             <KnownTech tech={{
                icon: <TbBrandNextjs />,
                name: 'Colorimetria',
                startDate: '2017-08-05'
            }} />
             <KnownTech tech={{
                icon: <TbBrandNextjs />,
                name: 'Corte infantil',
                startDate: '2016-04-05'
            }} />
             <KnownTech tech={{
                icon: <TbBrandNextjs />,
                name: 'Cortes masculinos e barba',
                startDate: '2014-07-06'
            }} />
          
         
        </div>
        </section>
    )
}