/**
 * API Endpoint: POST /api/chat
 *
 * Purpose: Send a message to a chat session and receive AI response
 *
 * Request Body:
 * {
 *   chatId: string,      // Required - the chat session ID
 *   message: string      // Required - the user's message
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   chatId: string,
 *   messageId: string,
 *   userMessage: string,
 *   aiResponse: string,
 *   timestamp: string,
 *   reportId: string
 * }
 */

// Import chat sessions (in production, use database)
import { chatSessions } from './embed-chat.js';

// Mock AI response generator (replace with actual AI integration)
function generateAIResponse(message, reportId) {
  // This is a placeholder. In production, integrate with:
  // - OpenAI API
  // - Anthropic Claude API
  // - Your custom AI model

  const responses = {
    greeting: `Hello! I'm here to help you with report ${reportId}. What would you like to know?`,
    summary: `Based on the analysis in report ${reportId}, here's a summary of the key findings: The sentiment analysis shows predominantly positive feedback with a satisfaction rate of 87%. There are 3 areas requiring attention.`,
    details: `Looking at the detailed metrics in report ${reportId}, I can provide specific insights. Which aspect would you like to explore: sentiment trends, user feedback, or performance metrics?`,
    default: `I understand you're asking about "${message}" regarding report ${reportId}. Let me analyze that for you. [AI response would be generated here based on the actual report data]`
  };

  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return responses.greeting;
  } else if (lowerMessage.includes('summary') || lowerMessage.includes('overview')) {
    return responses.summary;
  } else if (lowerMessage.includes('detail') || lowerMessage.includes('more')) {
    return responses.details;
  } else {
    return responses.default;
  }
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use POST.'
    });
  }

  try {
    const { chatId, message } = req.body;

    // Validate required fields
    if (!chatId) {
      return res.status(400).json({
        success: false,
        error: 'Missing required field: chatId'
      });
    }

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Missing or invalid required field: message'
      });
    }

    // Check if chat session exists
    const chatSession = chatSessions[chatId];

    if (!chatSession) {
      return res.status(404).json({
        success: false,
        error: 'Chat session not found. Please create a session first using /api/embed-chat'
      });
    }

    // Check if chat session is active
    if (chatSession.status !== 'active') {
      return res.status(400).json({
        success: false,
        error: `Chat session is ${chatSession.status}. Only active sessions can receive messages.`
      });
    }

    // Generate message ID and timestamp
    const messageId = `MSG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = new Date().toISOString();

    // Generate AI response (replace with actual AI integration)
    const aiResponse = generateAIResponse(message, chatSession.reportId);

    // Store the message exchange
    const messageExchange = {
      messageId,
      userMessage: message,
      aiResponse,
      timestamp
    };

    chatSession.messages.push(messageExchange);
    chatSession.lastActivity = timestamp;

    // Return response
    return res.status(200).json({
      success: true,
      chatId,
      messageId,
      userMessage: message,
      aiResponse,
      timestamp,
      reportId: chatSession.reportId,
      messageCount: chatSession.messages.length
    });

  } catch (error) {
    console.error('Error in chat API:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error.message
    });
  }
}
