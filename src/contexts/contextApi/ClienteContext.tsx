import React, { createContext, useState } from 'react';

interface ClienteContextType {
  cliente: ClienteDetalhes | null;
  atualizarCliente: (detalhesCliente: ClienteDetalhes) => void;
}

interface ClienteDetalhes {
  id: number;
  nome: string;
  email: string;
}

interface ClienteProviderProps {
  children: React.ReactNode;
}

export const ClienteContext = createContext<ClienteContextType | undefined>(undefined);

export const ClienteProvider: React.FC<ClienteProviderProps> = ({ children }) => {
    const [cliente, setCliente] = useState<ClienteDetalhes | null>(null);
  
    const atualizarCliente = (detalhesCliente: ClienteDetalhes) => {
      setCliente(detalhesCliente);
    };
  
    return (
      <ClienteContext.Provider value={{ cliente, atualizarCliente }}>
        {children}
      </ClienteContext.Provider>
    );
  };