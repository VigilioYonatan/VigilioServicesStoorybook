import useThemeStore from "../../libs/theme.store";

function ButtonTheme() {
    const { state, methods } = useThemeStore();
    return (
        <>
            {state === "dark" || state === "default" ? (
                <button
                    type="button"
                    aria-label="button to light theme"
                    onClick={() => methods.changeThemeMode("light")}
                >
                    <i class="fa-solid fa-sun text-xl  text-white" />
                </button>
            ) : (
                <button
                    type="button"
                    aria-label="button to dark theme"
                    onClick={() => methods.changeThemeMode("dark")}
                >
                    <i class="fa-solid fa-moon text-primary " />
                </button>
            )}
        </>
    );
}

export default ButtonTheme;
