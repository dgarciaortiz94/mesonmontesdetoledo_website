import { useContext, useEffect, useRef } from "react";
import { MenusContext } from "../menusContext";

export default function CreateMenuForm() {
    const { menus, createMenu } = useContext(MenusContext);
    const formRef = useRef<HTMLFormElement>(null);

    async function handleSubmit(formData: FormData) {
        const form = new FormData(formRef.current!);

        try {
            await createMenu(form.get('name') as string, ['0x018fcf89e0947fdaa45c94568f1c310f', '0x018fcf89e0a07a7c9e4b51ad5c03c236']);
            
            // form!.reset();
        } catch (error) {
            console.error("Error al crear el menú", error);
        }
    }

    return (
        <form className="create-form" action={handleSubmit} ref={formRef}>
            <input type="text" name="name" placeholder="Nombre" />
            <input type="submit" value="Añadir" />
        </form>
    );
}
