import Input from "../forms/Input";
import ListBox from "../forms/Listbox";

export default function FormikController(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <ListBox {...rest} />;

    default:
      return null;
  }
}
