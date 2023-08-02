
const fetchChatGPTAPI = async (inputData) => {

    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
    const { 
      promptFormat, 
      input1, 
      input2, 
      input3  
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
            { role: 'user', content: input1 },
            { role: 'user', content: input2 },
            { role: 'user', content: input3 },
            
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