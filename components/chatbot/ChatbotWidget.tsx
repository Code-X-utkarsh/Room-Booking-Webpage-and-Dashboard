"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome-msg",
            text: "Hello! How can I help you with your booking today?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of messages
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userText = inputValue.trim();
        const newUserMsg: Message = {
            id: Date.now().toString(),
            text: userText,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, newUserMsg]);
        setInputValue("");

        // Simulate bot thinking delay
        setTimeout(() => {
            const lowerText = userText.toLowerCase();
            let botResponse = "I'm here to help! Try asking about booking, prices, or availability.";

            if (lowerText.includes("hello") || lowerText.includes("hi")) {
                botResponse = "Hello! How can I help you with your booking today?";
            } else if (lowerText.includes("book") || lowerText.includes("reservation")) {
                botResponse = "You can book a room by selecting dates and clicking 'See Availability' or 'Book Now' on a hotel's page.";
            } else if (lowerText.includes("price") || lowerText.includes("cost")) {
                botResponse = "Each hotel card shows the price per night. Prices vary depending on the location and room type.";
            } else if (lowerText.includes("support") || lowerText.includes("help") || lowerText.includes("contact")) {
                botResponse = "You can reach support by contacting the hotel directly from the booking page or emailing support@aether.com.";
            } else if (lowerText.includes("availability")) {
                botResponse = "Select a hotel and enter your desired dates to check real-time availability.";
            }

            const newBotMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: "bot",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, newBotMsg]);
        }, 600);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            <div
                className={`bg-white w-[calc(100vw-3rem)] sm:w-[350px] shadow-2xl rounded-2xl overflow-hidden mb-4 border border-gray-100 flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? "opacity-100 scale-100 h-[450px]" : "opacity-0 scale-95 h-0 pointer-events-none"
                    }`}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white flex justify-between items-center shrink-0">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <h3 className="font-semibold text-[15px]">Hotel Assistant</h3>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white/80 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
                        aria-label="Close Chat"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Message Area */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-3">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex flex-col max-w-[85%] ${msg.sender === "user" ? "self-end items-end" : "self-start items-start"}`}
                        >
                            <div
                                className={`py-2 px-3.5 rounded-2xl text-[14px] leading-relaxed shadow-sm ${msg.sender === "user"
                                        ? "bg-purple-600 text-white rounded-br-sm"
                                        : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm"
                                    }`}
                            >
                                {msg.text}
                            </div>
                            <span className="text-[10px] text-gray-400 mt-1 px-1">
                                {formatTime(msg.timestamp)}
                            </span>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 bg-white border-t border-gray-100 shrink-0">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your message..."
                            className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-full pl-4 pr-12 py-2.5 outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all placeholder:text-gray-400"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim()}
                            className="absolute right-1 w-8 h-8 flex items-center justify-center bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:hover:bg-purple-600 shadow-sm"
                            aria-label="Send Message"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-0.5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 active:scale-95"
                aria-label="Toggle Chat"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>
        </div>
    );
}
