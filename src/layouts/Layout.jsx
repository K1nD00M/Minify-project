import cls from './Layout.module.css'

export default function Layout({ children }) {
   return (
      <div className={cls.Layout}>
         {children}
      </div>
   )
}
