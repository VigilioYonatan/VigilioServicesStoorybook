import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
/* delay: 3 segundos */
function useDelay(delay: number = 3) {
    const isLoading = useSignal(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            isLoading.value = false;
        }, delay * 1000);
        return () => clearTimeout(timeout);
    }, [delay]);
    return isLoading.value;
}

export default useDelay;
