import Form from "./components";
import { useForm } from "react-hook-form";
function One() {
    const form = useForm();
    function onAddUser() {}
    return (
        <div class="max-w-3xl mx-auto dark:bg-admin-paper-dark bg-paper-light p-4 rounded-md">
            <Form onSubmit={onAddUser} {...form}>
                <Form.button.reset />
                <div class="flex gap-2">
                    <Form.control
                        name="name"
                        placeholder="Your name"
                        title="Name"
                        options={{
                            required: {
                                value: true,
                                message: "this field is required",
                            },
                        }}
                    />
                    <Form.control
                        name="email"
                        placeholder="digite su correo"
                        type="email"
                        title="Correo Electrónico"
                        question="This field required valid email" // jsx element is valid
                    />
                </div>
                <div class="flex gap-2">
                    <Form.control
                        name="password"
                        placeholder="******"
                        title="Contraseña"
                        type="password"
                    />
                    <Form.control
                        name="price"
                        placeholder="S/. 29.00"
                        type="number"
                        title="Precio"
                    />
                </div>
                <Form.control.area
                    name="description"
                    placeholder="descripcion"
                    title="Descripcion"
                />
                <div class="flex gap-2">
                    <Form.control.select
                        name="genre"
                        title="generos musicales"
                        placeholder="Escoga su genero musical favorito"
                        array={[
                            { key: "rock", value: "Rock" },
                            { key: "Drum and Bass", value: "DNB" },
                        ]}
                    />
                    <Form.control.toggle name="enabled" title="Activar" />
                </div>
                <Form.control.file
                    name="password"
                    title="Contraseña"
                    typeFile="image"
                    accept="image/*"
                />
                <Form.button.submit isLoading={false} title="Guardar" />
                <div>{JSON.stringify(form.getValues())}</div>
            </Form>
        </div>
    );
}

export default One;
