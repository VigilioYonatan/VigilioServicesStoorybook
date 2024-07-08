export function delay(seg = 1) {
    return new Promise((res, _rej) => {
        setTimeout(() => {
            res(true);
        }, seg * 1000);
    });
}
