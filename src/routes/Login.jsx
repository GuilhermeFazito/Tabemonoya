import { useRef } from "react";
import Produtos from "./Produtos";
import Nav from "../components/Nav";


export default function Login (){

        const user = useRef();
        const password = useRef();
      
        const getUser = sessionStorage.getItem('userData');
        const getSenha = sessionStorage.getItem('senhaData');
      
       
      
        /*verifica o usuario e senha e grava na sessão */
      
        const handleSubmit = () => {
      
          if (user.current.value === 'admin' && password.current.value === '12345') {
      
            let token =
      
              Math.random().toString(16).substring(2) +
              Math.random().toString(16).substring(2);
      
            sessionStorage.setItem('userData', 'admin');
            sessionStorage.setItem('senhaData', token);
      
          } else {
      
            alert('usuário e senha inválidos !!!');
      
          }
      
        };


        return (

            <section>
                
                <h1>Login</h1>
                
                {getUser && getSenha ? (
                    <Produtos />
                ) : (
        
                /* chamando a função handleSubmit dentro do form*/
        
                <form onSubmit={handleSubmit}>
        
                  <p>
        
                    USUÁRIO:
        
                    {/* passando a referencia no usuario */}
        
                    <input type="text" ref={user} />
        
                  </p>
        
                  <br />
        
                  <p>
        
                    SENHA:
        
                    {/* passando a referencia na senha */}
        
                    <input type="password" ref={password} />
        
                  </p>
        
                  <br />
        
                  <input type="submit" value="Login" />
        
                </form>
        
              )}
        
            </section>
        
          );
}