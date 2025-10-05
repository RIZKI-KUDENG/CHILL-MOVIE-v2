import AuthLayout from "../Components/Layouts/AuthLayout";
import InputField from "../Components/Elements/Input";

const Register = () => {
  return (
    <AuthLayout
      bg="bg-[url(/src/assets/image/bgregister.jpg)]"
      h3="Daftar"
      p="Selamat datang!"
      ask="Sudah punya akun?"
      a="Login"
      style="hidden"
      btn="Daftar"
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
        placeholder="Masukan kata sandi"
      />
       <InputField
        name="password"
        text="Password"
        type="password"
        placeholder="Konfirmasi kata sandi"
      />
    </AuthLayout>
  );
};

export default Register;