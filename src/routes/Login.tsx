import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import Login from '../components/pages/Login'
import Button from '../components/Button'
import { useState } from 'react'

export const Route = createFileRoute('/Login')({
  component: RouteComponent,
})

function ButtonPasswordReveal({ showPassword, setShowPassword }: { showPassword: boolean; setShowPassword: (val: boolean) => void }) {
  const img = showPassword ? 'ojoabierto.svg' : 'ojociego.svg';

  return (
    <Button
      text=""
      style="absolute right-6 bottom-2/3 bg-no-repeat hover:scale-120 duration-200 bg-center w-6 h-6"
      onClick={() => setShowPassword(!showPassword)}
      img={img}
    />
  );
}

function RouteComponent() {
  const [showPassword, setShowPassword] = useState(true);

  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('http://donatico.test/api/v1/users/allUsers');
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    },
  });

  console.log(data);
  const handleLogin = async (email: string, password: string) => {
  try {
    const res = await fetch('http://donatico.test/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      window.location.href = '/HomePage';
    } else {
      alert(data.message || 'Credenciales incorrectas');
    }
  } catch (err) {
    alert('Error de red o del servidor');
  }
};

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Login
      title="Log in"
      email="Email"
      password="Password"
      text="Don’t have an account?"
      link="Sign up"
      data={data}
      onLogin={handleLogin}
      buttonPasswordReveal={<ButtonPasswordReveal showPassword={showPassword} setShowPassword={setShowPassword} />}
      buttonLogin={
        <button
          type="submit"
          className="text-white text-center bg-green-900 duration-400 hover:cursor-pointer hover:scale-110 hover:bg-green-950 rounded-xl py-2 min-md:py-4"
        >
          Log In
        </button>
      }
    />
  );
}