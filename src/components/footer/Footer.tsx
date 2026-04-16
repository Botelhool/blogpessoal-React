import {  GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"


function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Generation | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        
                        <Link to="https://www.linkedin.com/in/leonardo-botelho-b29061174/" className="cursor-pointer"><LinkedinLogoIcon size={48} weight='bold' /></Link>
                        <Link to='https://github.com/Botelhool' className="cursor-pointer"><GithubLogoIcon size={48} weight='bold' /></Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer