import { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

const questions = [
    {
        question: "O que é responsividade?",
        options: ["Ajuste automático", "Design fixo", "Apenas para desktop", "Apenas para mobile"],
        correct: 0,
        justification: "Responsividade é a capacidade de um site se ajustar automaticamente a diferentes tamanhos de tela."
    },
    {
        question: "Qual é o principal objetivo do design responsivo?",
        options: ["Melhorar a estética", "Aumentar a velocidade", "Garantir a usabilidade em diferentes dispositivos", "Reduzir o custo de desenvolvimento"],
        correct: 2,
        justification: "O principal objetivo do design responsivo é garantir a usabilidade em diferentes dispositivos."
    },
    {
        question: "O que significa Mobile-First?",
        options: ["Desenvolver para desktop primeiro", "Desenvolver para dispositivos móveis primeiro", "Desenvolver para tablets primeiro", "Desenvolver para todos os dispositivos ao mesmo tempo"],
        correct: 1,
        justification: "Mobile-First significa desenvolver para dispositivos móveis primeiro."
    },
    {
        question: "Qual é uma prática recomendada para melhorar a usabilidade em dispositivos móveis?",
        options: ["Usar fontes pequenas", "Usar botões grandes e fáceis de tocar", "Evitar espaços em branco", "Usar muitas animações"],
        correct: 1,
        justification: "Usar botões grandes e fáceis de tocar é uma prática recomendada para melhorar a usabilidade em dispositivos móveis."
    },
    {
        question: "O que é um breakpoint em design responsivo?",
        options: ["Um ponto onde o layout muda", "Um erro no código", "Uma ferramenta de depuração", "Um tipo de fonte"],
        correct: 0,
        justification: "Um breakpoint é um ponto onde o layout muda para se ajustar a diferentes tamanhos de tela."
    },
    {
        question: "Qual é a vantagem de usar Flexbox em design responsivo?",
        options: ["Facilita a criação de layouts flexíveis", "Aumenta o tempo de carregamento", "Reduz a compatibilidade com navegadores antigos", "Dificulta a manutenção do código"],
        correct: 0,
        justification: "Flexbox facilita a criação de layouts flexíveis e responsivos."
    },
    {
        question: "O que é usabilidade?",
        options: ["Aparência do site", "Facilidade de uso do site", "Velocidade do site", "Segurança do site"],
        correct: 1,
        justification: "Usabilidade refere-se à facilidade de uso do site."
    },
    {
        question: "Qual é uma técnica para melhorar a performance em dispositivos móveis?",
        options: ["Usar imagens de alta resolução", "Minimizar o uso de JavaScript", "Evitar o uso de CSS", "Usar fontes personalizadas"],
        correct: 1,
        justification: "Minimizar o uso de JavaScript pode melhorar a performance em dispositivos móveis."
    },
    {
        question: "O que é um layout fluido?",
        options: ["Um layout fixo", "Um layout que se ajusta ao tamanho da tela", "Um layout que usa apenas pixels", "Um layout que não muda"],
        correct: 1,
        justification: "Um layout fluido é aquele que se ajusta ao tamanho da tela."
    },
    {
        question: "Qual é a importância de testar um site em diferentes dispositivos?",
        options: ["Para garantir que funcione apenas em desktop", "Para garantir que funcione apenas em mobile", "Para garantir uma experiência consistente em todos os dispositivos", "Para aumentar o custo de desenvolvimento"],
        correct: 2,
        justification: "Testar um site em diferentes dispositivos garante uma experiência consistente em todos os dispositivos."
    }
];

export default function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [showJustification, setShowJustification] = useState(false);

    const handleAnswer = (isCorrect) => {
        setShowJustification(true);
        if (isCorrect) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        setShowJustification(false);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    return (
        <div className="app">
            {showResult ? (
                <Result score={score} total={questions.length} />
            ) : (
                <Quiz
                    question={questions[currentQuestion]}
                    onAnswer={handleAnswer}
                    showJustification={showJustification}
                    onNextQuestion={handleNextQuestion}
                />
            )}
        </div>
    );
}