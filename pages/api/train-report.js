/**
 * API Endpoint: POST /api/train-report
 *
 * Purpose: Create or retrieve a chat session for a specific report
 *
 * Request Body:
 * {
 *   reportId: string,        // Required - unique identifier for the report
 *   reportContent: string    // Required - the content/data of the report
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
    const { reportId, reportContent } = req.body;

    // Validate required fields
    if (!reportId || typeof reportId !== 'string' || reportId.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Missing or invalid required field: reportId'
      });
    }

    if (!reportContent || typeof reportContent !== 'string' || reportContent.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Missing or invalid required field: reportContent'
      });
    }

    // Check if a chat session already exists for this report
    let existingChat = Object.values(chatSessions).find(
      session => session.reportId === reportId
    );

    if (existingChat) {
      // Update report content
      existingChat.reportContent = reportContent;
      existingChat.lastUpdated = new Date().toISOString();

      return res.status(200).json({
        success: true,
        chatId: existingChat.chatId,
        reportId: existingChat.reportId,
        createdAt: existingChat.createdAt,
        message: 'Existing chat session retrieved and updated'
      });
    }

    // Create new chat session
    const chatId = `CHAT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const createdAt = new Date().toISOString();

    chatSessions[chatId] = {
      chatId,
      reportId,
      reportContent,
      createdAt,
      lastUpdated: createdAt,
      messages: [],
      status: 'active'
    };

    return res.status(201).json({
      success: true,
      chatId,
      reportId,
      createdAt,
      message: 'New chat session created'
    });

  } catch (error) {
    console.error('Error in train-report API:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error.message
    });
  }
}

// Export chat sessions for use by other API routes
export { chatSessions };
