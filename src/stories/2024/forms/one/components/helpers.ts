import type { FieldErrors } from "react-hook-form";

export function anidarPropiedades<T extends object>(
    obj: FieldErrors<T>,
    keysArray: string[]
) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    let currentObj: any = obj;
    for (let i = 0; i < keysArray.length; i++) {
        const key = keysArray[i];
        // biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
        if (!currentObj.hasOwnProperty(key)) {
            currentObj[key] = {}; // Crear un objeto vacío si la propiedad no existe
        }
        currentObj = currentObj[key]; // Moverse al siguiente nivel del objeto
    }

    return currentObj;
}
