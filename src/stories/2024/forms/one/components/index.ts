import VigilioForm from "./Form";
import FormButtonReset from "./FormButtonReset";
import FormButtonSubmit from "./FormButtonSubmit";
import FormControl from "./FormControl";
import FormFile from "./FormFile";
import FormRadio from "./FormToggle";
import FormSelect from "./FormSelect";
import FormTextArea from "./FormTextArea";
import FormMap from "./FormMap";

const Form = Object.assign(VigilioForm, {
    control: Object.assign(FormControl, {
        file: FormFile,
        select: FormSelect,
        area: FormTextArea,
        toggle: FormRadio,
        map: FormMap,
    }),
    button: { reset: FormButtonReset, submit: FormButtonSubmit },
});
export default Form;
