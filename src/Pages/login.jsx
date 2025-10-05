import  AuthLayout  from "../Components/Layouts/AuthLayout";
import  InputField  from "../Components/Elements/Input";
function Login() {
  return (
    <AuthLayout
      bg="bg-[url(/src/assets/image/bglogin.jpg)]"
      h3="MASUK"
      p="Selamat Datang Kembali!"
      ask="Belum punya akun?"
      a="Daftar"
      style="hoover:underline"
      btn="MASUK"
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