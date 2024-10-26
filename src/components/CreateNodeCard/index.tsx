import React, {HTMLAttributes} from 'react'

interface ICreateNodeCard extends Omit<HTMLAttributes<HTMLDivElement>,'className'>{
    icon: React.ComponentType;
    title: string;
    content?:string;
    className?:string
}

export const CreateNodeCard = ({title,content,icon: Icon,className, ...props}:ICreateNodeCard) => {
  return (
   <div  className={ `flex p-5 rounded-lg flex-row cursor-pointer ${className}`} {...props}>
        <div className='max-w-56 ' >
            <h2 className='font-bold'>{title}</h2>
            <p>{content}</p>
        </div>
        <div className='rounded-full self-start p-4 ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <Icon />
        </div>
    </div>
  )
}

