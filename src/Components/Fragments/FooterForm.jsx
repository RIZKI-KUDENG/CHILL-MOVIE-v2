import { Button, ButtonSso } from "../Elements/Button";

const FooterForm = (props) => {
  const { btn } = props;
  return (
    <div className="flex flex-col gap-1">
      <Button btn={btn} clas="py-3 rounded-full bg-[#E7E3FC3B] w-full hover:bg-[#E7E3FC3B] hover:bg-opacity-20 transition-colors font-normal flex items-center justify-center gap-2" />
      <div className="flex items-center justify-center gap-2">
        <p className="text-center text-sm text-[#C1C2C4]">Atau</p>
      </div>
      <ButtonSso />
    </div>
  );
};
export default FooterForm;