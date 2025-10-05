import { AuthForm } from "../Fragments/AuthForm";
const AuthLayout = (props) => {
  const {bg, children, h3, p, ask, style, btn,a} = props
  return <div className={`h-screen w-full ${bg} bg-cover bg-no-repeat bg-center flex justify-center items-center font-lato text-white p-4`}>
    <AuthForm
    h3={h3}
    p={p}
    ask={ask}
    a={a}
    style={style}
    children={children}
    btn={btn}
    />
  </div>;
};
export default AuthLayout;