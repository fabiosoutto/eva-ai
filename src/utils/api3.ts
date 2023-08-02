
const fetchChatGPTAPI = async (inputData) => {

    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
    const { 
      promptFormat, 
      cursoTema,
      qutItens 
    } = inputData;
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'user', content: promptFormat },
            { role: 'user', content: cursoTema },
            { role: 'user', content: qutItens },    
          ],
        }),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao obter a resposta da API.');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return 'Erro API.ts. Por favor, tente novamente mais tarde.';
    }
  };
  
  export default fetchChatGPTAPI;