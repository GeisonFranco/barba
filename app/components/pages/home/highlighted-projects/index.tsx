import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"

export const HighlightedProjects = () => {
    return (
        <section className="container py-16 bg-[#1e1e1e] ">
            <SectionTitle subtitle="destaques" title="Cursos e palestras ministradas" />
            <HorizontalDivider className="mb-16"/>

            <div>
                <ProjectCard />
                <HorizontalDivider className="my-16" />
            </div>

        </section>
    )
}