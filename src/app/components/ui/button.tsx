import styles from "./button.module.css"

export default function Button(props: { value: string }){
    return (
        <button className={styles.button}>{props.value}</button>
    )
}