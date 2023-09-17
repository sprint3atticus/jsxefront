import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Home() {
    const [contador, setContador]= useState(0);
    const [lista, setLista]=useState([]);
  
  // Use useForm para gerenciar o formulário e seus campos
  const { register, handleSubmit, setValue } = useForm();

  // Use useEffect para observar mudanças em formData
  useEffect(() => {
    // Faça algo com os dados do formulário sempre que formData mudar
    console.log('Dados do formulário atualizados:', formData);
  }, [formData]);

  // Função para lidar com o envio do formulário
  const onSubmit = (data) => {
    // Faça algo com os dados quando o formulário for enviado
    console.log('Formulário enviado:', data);
    // Você pode atualizar o estado com os dados do formulário, se necessário
    setFormData(data);
  };

  // Exemplo de como definir valores nos campos do formulário
  useEffect(() => {
    setValue('campo', 'Valor Padrão');
  }, [setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nome:</label>
      <input type="text" {...register('campoNome')} />
      
      <label>Email:</label>
      <input type="text" {...register('campoEmail')} />
      
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MeuComponente;
