interface PrinthtmlProps {
    value: string;
}
function Printhtml(props: PrinthtmlProps) {
    return <div dangerouslySetInnerHTML={{ __html: props.value }} />;
}

export default Printhtml;
