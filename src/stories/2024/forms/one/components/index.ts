import VigilioForm from "./Form";
import FormButtonReset from "./FormButtonReset";
import FormButtonSubmit from "./FormButtonSubmit";
import FormControl from "./FormControl";
import FormFile from "./FormFile";
import FormRadio from "./FormToggle";
import FormSelect from "./FormSelect";
import FormTextArea from "./FormTextArea";
import FormEditor from "./FormEditor";
import FormDataList from "./FormDataList";
import FormSelectInput from "./FormSelectInput";
import FormMap from "./FormMap";


const Form = Object.assign(VigilioForm, {
    control: Object.assign(FormControl, {
        file: FormFile,
        select: FormSelect,
        area: FormTextArea,
        editor: FormEditor,
        toggle: FormRadio,
        datalist: FormDataList,
        selectInput: FormSelectInput,
        map: FormMap,
    }),
    button: { reset: FormButtonReset, submit: FormButtonSubmit },
});
export default Form;
