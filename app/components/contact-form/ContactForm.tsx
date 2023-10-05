'use client'

import { Button } from "../button"
import { SectionTitle } from "../section-title"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Botao } from "../botao/Botao"

const contactFormSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
    const { handleSubmit, register } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    })

    const onSubmit = (data: ContactFormData) => {
        console.log(data)
    }

    return (
        <section className="py-16 px-6 md:py-32 flex items-center justify-center bg-[#1e1e1e] ">
            <div className="w-full max-w-[420px] mx-auto">
                <SectionTitle
                subtitle="Contato"
                title="Vamos trabalhar juntos? Entre em contato"
                className="items-center text-center"
            />

            <form
             className="mt-12 w-full flex flex-col gap-4"
             onSubmit={handleSubmit(onSubmit)}>
                
            <input
            placeholder="Nome"
            className="w-full h-14 bg-[#323232] rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-[#df0d0d]"
            {...register('name')}
            />
            
             <input
            placeholder="E-mail"
            className="w-full h-14 bg-[#323232] rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-[#df0d0d]"
            {...register('email')}
            
            />
             <input
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-[#323232] rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-[#df0d0d]"
            maxLength={500}
            {...register('message')}
            />

            <Botao />
            </form>

   
            </div>
        </section>
    )
}