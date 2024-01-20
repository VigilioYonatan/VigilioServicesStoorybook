interface LoaderOneProps {
    width?: number;
}
function LoaderOne({ width = 25 }: LoaderOneProps) {
    return (
        <>
            {" "}
            <div class="lds-ring-submit">
                <div />
                <div />
                <div />
                <div />
            </div>
            <style jsx>
                {`
                    .lds-ring-submit {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        width: ${width}px;
                        height: ${width}px;
                    }
                    .lds-ring-submit div {
                        box-sizing: border-box;
                        display: block;
                        position: absolute;
                        width: 18px;
                        height: 18px;
                        border: 3px solid white;
                        border-radius: 50%;
                        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1)
                            infinite;
                        border-color: white transparent transparent transparent;
                    }
                    .lds-ring-submit div:nth-child(1) {
                        animation-delay: -0.45s;
                    }
                    .lds-ring-submit div:nth-child(2) {
                        animation-delay: -0.3s;
                    }
                    .lds-ring-submit div:nth-child(3) {
                        animation-delay: -0.15s;
                    }
                    @keyframes lds-ring {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                `}
            </style>
        </>
    );
}

export default LoaderOne;
