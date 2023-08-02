import { ChatMessage } from "@/components/types/ChatMessage";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";



const config = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
});

const api = new OpenAIApi(config);

export const openai = {
    generate: async (messages: ChatCompletionRequestMessage[]) => {
        try {
            const response = await api.createChatCompletion({
                model: 'gpt-3.5-turbo',
                temperature: 0.6,
                messages
            });
    
            //testando 1... 2... 3...
            console.log(response);
    
            //Pegando a resposta da API
            return response.data.choices[0]?.message?.content;
        } catch (error) {
            return undefined;
        }
        
    },
    translateMessage: (message: ChatMessage[]) => {
        let reqMessages: ChatCompletionRequestMessage[] = [];

        for(let i in message) {
            reqMessages.push({
                role: message[i].author === 'me' ? 'user' : 'assistant',
                content: message[i].body
            });
        }
        return reqMessages;
    }
}



  