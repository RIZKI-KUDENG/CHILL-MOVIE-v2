import  AuthLayout  from "../Components/Layouts/AuthLayout";
import  InputField  from "../Components/Elements/Input";
import { useDocumentTitle } from "../Data/useDocumentsTitle";
import { Link} from "react-router-dom";
function Login() {
  useDocumentTitle("Login" || "Chill Movie");
  return (
    <AuthLayout
      bg="bg-[url(/src/assets/image/bglogin.jpg)]"
      h3="MASUK"
      p="Selamat Datang Kembali!"
      ask="Belum punya akun?"
      a={<Link to="/register">Daftar</Link>}
      style="hoover:underline"
      btn={<Link to="/">Masuk</Link>}
    >
      <InputField
        name="username"
        text="Username"
        type="text"
        placeholder="Masukan username"
      />
      <InputField
        name="password"
        text="Password"
        type="password"
        placeholder="Masukan password"
      />
    </AuthLayout>
  );
}
export  default Login;