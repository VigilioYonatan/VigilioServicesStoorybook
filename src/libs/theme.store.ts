import { useEffect } from "preact/hooks";
import { signal } from "@preact/signals";
type ThemeMode = "light" | "dark" | "default";

function getThemeLocalStorage() {
    let themeMode: ThemeMode = "default";
    if (localStorage.getItem("theme")) {
        themeMode = localStorage.getItem("theme") as ThemeMode;
    }
    return themeMode;
}
const state = signal(getThemeLocalStorage());

function useThemeStore() {
    function changeTheme(theme: ThemeMode) {
        state.value = theme;
    }
    function changeThemeMode(theme: ThemeMode) {
        if (theme === state.value) return;
        if (theme === "default") {
            localStorage.removeItem("theme");
            changeTheme(theme);

            return;
        }
        localStorage.setItem("theme", theme);
        changeTheme(theme);
    }
    function lightModeElement() {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
    }
    function darkModeElement() {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
    }

    useEffect(() => {
        if (state.value === "light") {
            lightModeElement();
            return;
        }
        if (state.value === "default") {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                darkModeElement();
                return;
            }
            lightModeElement();
            return;
        }
        darkModeElement();
    }, [state.value]);
    return { state: state.value, methods: { changeThemeMode } };
}

export default useThemeStore;
