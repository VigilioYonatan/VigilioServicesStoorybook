import { useSignal } from "@preact/signals";
import { useRef } from "preact/hooks";
import { delay } from "../libs/helpers";

function useVideo() {
    const isPlay = useSignal(false);
    const isHover = useSignal(false);
    const video = useRef<HTMLVideoElement | null>(null);
    async function onPlay() {
        video.current?.play();
        isPlay.value = true;
        await delay(0.5);
        isHover.value = true;
    }
    function onPause() {
        video.current?.pause();
        isPlay.value = false;
    }
    function onPlayPause() {
        if (!isPlay.value) {
            onPlay();
            return;
        }
        onPause();
    }

    return {
        refs: {
            video,
        },
        state: { isPlay: isPlay.value, isHover: isHover.value },
        methods: {
            onPlayPause,
            onPause,
            onPlay,
        },
    };
}

export default useVideo;
