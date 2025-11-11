/**
 * API Endpoint: POST /api/embed-chat
 *
 * Purpose: Create or retrieve a chat session for a specific report
 *
 * Request Body:
 * {
 *   reportId?: string  // Optional - if not provided, a new one will be generated
 * }
 *
 * Response:
 * {
 *   success: boolean,
 *   chatId: string,
 *   reportId: string,
 *   createdAt: string
 * }
 */

// In-memory storage (replace with database in production)
let chatSessions = {};

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use POST.'
    });
  }

  try {
    const { reportId } = req.body;

    // Generate or use provided reportId
    const finalReportId = reportId || `RPT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Check if a chat session already exists for this report
    let existingChat = Object.values(chatSessions).find(
      session => session.reportId === finalReportId
    );

    if (existingChat) {
      return res.status(200).json({
        success: true,
        chatId: existingChat.chatId,
        reportId: existingChat.reportId,
        createdAt: existingChat.createdAt,
        message: 'Existing chat session retrieved'
      });
    }

    // Create new chat session
    const chatId = `CHAT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const createdAt = new Date().toISOString();

    chatSessions[chatId] = {
      chatId,
      reportId: finalReportId,
      createdAt,
      messages: [],
      status: 'active'
    };

    return res.status(201).json({
      success: true,
      chatId,
      reportId: finalReportId,
      createdAt,
      message: 'New chat session created'
    });

  } catch (error) {
    console.error('Error in embed-chat API:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error.message
    });
  }
}

// Export chat sessions for use by other API routes
export { chatSessions };
