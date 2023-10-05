import { getRelativeTimeString } from "@/app/utils/get-relative-time"
import { ReactNode } from "react"
import style from './Known-tech.module.css'

type KnownTechProps = {
    tech: {
        icon: ReactNode
        name: string
        startDate: string
    }
}

export const KnownTech = ({ tech }: KnownTechProps) => {
    const relativeTime = getRelativeTimeString(
        new Date(tech.startDate), 'pt-BR',
        ).replace('há', '')
    return (
        <div className={style.button}>
        <div className="p-6 rounded-lg bg-gray-600/20 text-gray-400 flex flex-col gap-2 hover:text-[#eb0207] hover:bg-gray-600/30 transition-all">
            <div className="flex items-center justify-between">
                <p className="font-medium">{tech.name}</p>
                {tech.icon}
            </div>

            <span>{relativeTime} de experiência</span>
        </div>
        </div>
    )
}