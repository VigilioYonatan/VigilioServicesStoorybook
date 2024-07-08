import Form from "./components";
import { useFieldArray, useForm } from "react-hook-form";
import {
    number,
    object,
    string,
    email,
    maxLength,
    array,
    instance,
    minLength,
    omit,
    Input,
    nullable,
    coerce,
    date,
    startsWith,
    toTrimmed,
} from "@vigilio/valibot";
import validFileValibot, { valibotVigilio } from "~/libs/valibot";
import { formSelectNumber } from "./components/FormSelect";
import useDelay from "~/hooks/useDelay";

function One() {
    const form = useForm<UsersStoreDto>({
        resolver: valibotVigilio(usersStoreDto),
        mode: "all",
        defaultValues: {
            // puedes poner mas defaults
            map: { lng: -77.0428, lat: -12.0464 },
            // users: [],
        },
    });
    function onUserStore(data: UsersStoreDto) {
        console.log(data);
    }

    const fieldsArray = useFieldArray({ control: form.control, name: "users" });
    console.log("xxxxxx");

    return (
        <div class="max-w-3xl mx-auto dark:bg-admin-paper-dark bg-background-light p-4 rounded-md">
            <Form onSubmit={onUserStore} {...form}>
                <Form.button.reset />
                <div class="flex gap-2">
                    <Form.control
                        name={"name" as keyof UsersStoreDto}
                        placeholder="Your name"
                        title="Name"
                        ico={<i class="fa-solid fa-user" />}
                        // disabled={} si quieres desactivar input
                    />
                    <Form.control
                        name={"email" as keyof UsersStoreDto}
                        placeholder="digite su correo"
                        type="email"
                        title="Correo Electrónico"
                        question="This field required valid email" // jsx element is valid <span></span>
                    />
                </div>
                <div class="flex gap-2">
                    <Form.control
                        name={"password" as keyof UsersStoreDto}
                        placeholder="******"
                        title="Contraseña"
                        type="password"
                    />
                    <Form.control
                        name={"price" as keyof UsersStoreDto}
                        placeholder="S/. 29.00"
                        type="number"
                        title="Precio"
                        options={{ setValueAs: Number }}
                    />
                </div>
                <Form.control.area
                    name={"description" as keyof UsersStoreDto}
                    placeholder="descripcion"
                    title="Descripcion"
                />
                <Form.control.editor
                    name={"description2" as keyof UsersStoreDto}
                    title="Descripcion"
                />
                <div class="flex gap-2">
                    <Form.control.select
                        name={"genre" as keyof UsersStoreDto}
                        title="generos musicales"
                        placeholder="Escoga su genero musical favorito"
                        array={[
                            { key: "rock", value: "Rock" },
                            { key: "dnb", value: "Drum and Bass" },
                        ]}
                    />
                    <Form.control.select
                        name={"country" as keyof UsersStoreDto}
                        title="pais"
                        placeholder="Escoga pais"
                        array={[
                            { key: 1, value: "Peru" },
                            { key: 2, value: "Argentina" },
                            { key: 3, value: "Brazil" },
                        ]}
                        // no es obligatorio
                        isLoading={useDelay(3)} // isLoading  - puedes usar el loading de las apis
                        // si el key es numero
                        options={{ setValueAs: formSelectNumber }}
                    />
                    <Form.control.toggle
                        name={"enabled" as keyof UsersStoreDto}
                        title="Activar"
                    />
                </div>
                <div class="flex gap-2 items-center">
                    <Form.control type="color" name="color" title="Color" />
                    <Form.control type="date" name="nacimiento" title="Fecha" />
                    <Form.control.selectInput
                        name={"ubigeo" as keyof UsersStoreDto}
                        title="Ubigeo"
                        array={[
                            { key: "010101", value: "Lima" },
                            { key: "0102012", value: "Carabayllo" },
                        ]}
                        placeholder="Escriba su distrito"
                        // isLoading={useDelay(3)}
                    />
                </div>
                <div class="flex gap-2 items-center flex-col lg:flex-row">
                    <Form.control
                        // redes.facebook . es para objetos
                        name={"redes.facebook" as keyof UsersStoreDto}
                        placeholder="https:/"
                        title="Facebook"
                    />
                    <Form.control
                        name={"redes.youtube" as keyof UsersStoreDto}
                        placeholder="https:/"
                        title="Youtube"
                    />
                </div>

                <div class="flex gap-2 items-center">
                    <Form.control.map
                        name={"map" as keyof UsersStoreDto}
                        title="ubicación"
                        zoom={13}
                        style={{ height: "300px", width: "100%", zIndex: 0 }}
                    />
                </div>
                <div>
                    <span class="dark:text-white">Usuarios:</span>
                    <div>
                        {/* agregar */}
                        <button
                            class="text-white bg-success px-2 py-1 rounded-md shadow"
                            onClick={() => {
                                fieldsArray.prepend({
                                    name: "",
                                    age: 0,
                                });
                            }}
                            type="button"
                        >
                            +
                        </button>
                        {fieldsArray.fields.map((field, i) => (
                            <div class="flex gap-2 items-center" key={field.id}>
                                <Form.control
                                    title="Nombre"
                                    placeholder="nombre"
                                    name={`users.${i}.name`}
                                />
                                <Form.control
                                    title="Edad"
                                    placeholder="edad"
                                    name={`users.${i}.age`}
                                    type="number"
                                    options={{ setValueAs: Number }}
                                />
                                <button
                                    type="button"
                                    class="text-white bg-danger px-2 py-1 rounded-md"
                                    onClick={() => {
                                        fieldsArray.remove(i); // eliminar
                                    }}
                                >
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <Form.control.file
                    name="image"
                    title="Imagen"
                    typeFile="image"
                    accept="image/*"
                />
                <Form.button.submit isLoading={false} title="Guardar" />
                <pre class="dark:text-white ">
                    {JSON.stringify(form.watch(), null, 3)}
                </pre>
            </Form>
        </div>
    );
}
const userSchema = object({
    id: number(),
    name: string([toTrimmed(), minLength(4), maxLength(100)]), // toTrimmed - limpia los texto si pone espacios en blanco al principio
    email: string([toTrimmed(), email()]), //email
    password: string([toTrimmed()]),
    price: number(),
    description: nullable(string([toTrimmed()])), // es opcional - nullable. no es obligatorio o texto
    description2: string([toTrimmed()]),
    genre: string([toTrimmed()]),
    nacimiento: coerce(date(), (value) => new Date(value as string)), //fecha
    country: number(),
    image: array(instance(File), [
        validFileValibot({
            required: true,
            min: 1,
            max: 1,
            // types:["image/png","image/webp"]
        }),
    ]),
    color: string(),
    ubigeo: string(),
    map: object({ lat: number(), lng: number() }),
    redes: object({
        facebook: string(),
        youtube: string([startsWith("https", "Debe empezar con https")]),
    }),
    users: array(object({ name: string(), age: number() })), // arrays
});
export type UserSchema = Input<typeof userSchema>;

const usersStoreDto = omit(userSchema, ["id"]);
export type UsersStoreDto = Input<typeof usersStoreDto>;
export default One;
