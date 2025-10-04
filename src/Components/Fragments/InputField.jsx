import Label from "../Elements/Label";
import Input from "../Elements/Input";
const InputField = (props) => {
  const { name , text, type, placeholder} = props;
  return (
    <div className="flex flex-col gap-2">
      <Label htmlfor={name} children={text} />
      <Input id={name} type={type} placeholder={placeholder}/>
    </div>
  );
};
export default InputField;