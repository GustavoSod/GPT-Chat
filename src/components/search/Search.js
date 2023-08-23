import React, { useState } from 'react'
import { AreaSearch, InputSearch , ContentArea, InputText, ButtonSearch, TextArea} from './SearchStyle'

export default function Search() {

    const [questions, setQuestions] = useState('');
    const [response, setResponse] = useState('');

    const apiFetch = async () => {
        const apiKeyPart1 = "sk-P8Gk";
        const apiKeyPart2 = "T1fEwBT5exebIPKd";
        const apiKeyPart3 = "T3BlbkFJddJuzhi81";
        const apiKeyPart4 = "m2rs33hu2Cz";

        const obfuscatedApiKey = apiKeyPart1 + apiKeyPart2 + apiKeyPart3 + apiKeyPart4;

        try {
            const response = await fetch(`https://api.openai.com/v1/completions`, {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + obfuscatedApiKey,
                },
                body: JSON.stringify({
                    model: "text-davinci-003",
                    prompt: questions,
                    max_tokens: 2048,
                    temperature: 0.5,
                }),
            });

            const responseData = await response.json();
            setResponse(responseData); // Update the response state
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

  return (
    <AreaSearch>
    
        <ContentArea>
            <p>ola fsdfsdfsd fsdfsd fdsf sdfdsf sdf sdfsd fsd fsd fsd
                fsdfsdfsdfdsfsdf fsdfsdfsd sdffdsf sdfsdf sdfsdf dsfsfd fsdfs
                fdsfsdfdsf fsdfdsfdsf fsdfdsfsdf sdfdsfsdfsd fsdfdsfdsf fsdfsdfsdds
                fsdfsdfsdf sdfsdfsdf sdfsdfdsf fsdfsdfsf sdfsdfsdfsd fdsfsdfsdf sdfs
            </p>
        </ContentArea> 

        <InputSearch>
            <InputText type="text" placeholder="digite aqui" onChange={(e) => setQuestions(e.target.value)}></InputText>
            <ButtonSearch type="submit" placeholder="digite aqui" onClick={apiFetch}>ENVIAR</ButtonSearch>
        </InputSearch>

    </AreaSearch>
  )
}
