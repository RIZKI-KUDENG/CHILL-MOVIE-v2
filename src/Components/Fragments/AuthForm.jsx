import HeaderForm from "../Elements/HeaderForm";
import WelcomeText from "../Elements/WelcomeText";
import AuthRedirect from "../Fragments/AuthRedirect";
import FooterForm from "./FooterForm";

export const AuthForm = (props) => {
  const { children, h3, p, ask, a, style,btn } = props;
  return(
    <div className="w-full max-w-md bg-[#181A1CD6] flex flex-col rounded-2xl p-6 sm:p-8 space-y-6">
    <HeaderForm />
    <WelcomeText h3={h3} p={p}/>
    <form action="#" className="flex flex-col space-y-4">
      {children}
      <AuthRedirect ask={ask} a={a} style={style} />
    </form>
    <FooterForm btn={btn} />
  </div>
  )
  
};
