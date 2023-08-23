import React, { useState } from 'react';
import { AreaSearch, InputSearch, ContentArea, InputText, ButtonSearch } from './SearchStyle';

export default function Search() {

    const [questions, setQuestions] = useState('');
    const [response, setResponse] = useState('');

    const apiFetch = async () => {
        const obfuscatedApiKey = "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";

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
            if (responseData.error && responseData.error.type === "insufficient_quota") {
                setResponse("You've exceeded your usage quota. Please check your plan and billing details.");
            } else if (responseData.choices && responseData.choices[0]) {
                setResponse(responseData.choices[0].text);
            } else {
                setResponse('No valid response received.');
            }
        }    


    return (
        <AreaSearch>
            <ContentArea>
                <p>{response}</p>
            </ContentArea>

            <InputSearch>
                <InputText type="text" placeholder="digite aqui" onChange={(e) => setQuestions(e.target.value)} />
                <ButtonSearch type="submit" onClick={apiFetch}>ENVIAR</ButtonSearch>
            </InputSearch>
        </AreaSearch>
    )
}
