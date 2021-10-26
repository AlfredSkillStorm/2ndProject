export const Form = (props) => {
    const onSubmit = () => alert('Form is working');
    
    return (
        <form onSubmit={onSubmit}>
            {props.children}
        </form>
    )
}