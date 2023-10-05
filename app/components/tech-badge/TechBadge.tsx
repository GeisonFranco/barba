import style from './TechBadge.module.css'

type TechBadgeProps = {
    name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) => {
    return (
        <div className={style.btn}>
        <span className="text-[#b9aeae] bg-[#403232] text-sm py-1 px-3 rounded-lg">
            {name}
        </span>
        </div>
    )
}