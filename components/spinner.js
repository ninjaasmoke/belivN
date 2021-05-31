import style from './spinner.module.css'
export default function Spinner({ show }) {
    return (
        <div className={style.spinner} style={{ display: show ? 'block' : 'none' }}></div>
    )
}