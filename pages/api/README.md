# AutoScore Chat Dashboard APIs

This document describes the two main APIs for embedding and chatting with reports.

---

## 1. Train Report API

**Endpoint:** `POST /api/train-report`

**Purpose:** Create or retrieve a chat session for a specific report.

### Request

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "reportId": "optional-report-id"  // Optional: If not provided, a new one will be generated
}
```

### Response

**Success (201 Created or 200 OK):**
```json
{
  "success": true,
  "chatId": "CHAT-1234567890-abc123xyz",
  "reportId": "RPT-1234567890-def456uvw",
  "createdAt": "2025-11-11T10:30:00.000Z",
  "message": "New chat session created" // or "Existing chat session retrieved"
}
```

**Error (400 Bad Request):**
```json
{
  "success": false,
  "error": "Error message"
}
```

**Error (500 Internal Server Error):**
```json
{
  "success": false,
  "error": "Internal server error",
  "details": "Detailed error message"
}
```

### Example Usage

**JavaScript (fetch):**
```javascript
// Create a new chat session with auto-generated report ID
const response = await fetch('/api/train-report', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({})
});

const data = await response.json();
console.log('Chat ID:', data.chatId);
console.log('Report ID:', data.reportId);
```

**JavaScript (with specific report ID):**
```javascript
// Create or retrieve chat session for a specific report
const response = await fetch('/api/train-report', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    reportId: 'RPT-12345'
  })
});

const data = await response.json();
console.log('Chat session:', data);
```

**cURL:**
```bash
# Create new chat session
curl -X POST http://localhost:3000/api/train-report \
  -H "Content-Type: application/json" \
  -d '{}'

# Create chat session with specific report ID
curl -X POST http://localhost:3000/api/train-report \
  -H "Content-Type: application/json" \
  -d '{"reportId": "RPT-12345"}'
```

---

## 2. Chat API

**Endpoint:** `POST /api/chat`

**Purpose:** Send a message to a chat session and receive an AI response.

### Request

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "chatId": "CHAT-1234567890-abc123xyz",  // Required
  "message": "What are the key findings?"  // Required
}
```

### Response

**Success (200 OK):**
```json
{
  "success": true,
  "chatId": "CHAT-1234567890-abc123xyz",
  "messageId": "MSG-1234567890-xyz789abc",
  "userMessage": "What are the key findings?",
  "aiResponse": "Based on the analysis in report RPT-1234567890-def456uvw, here's a summary...",
  "timestamp": "2025-11-11T10:35:00.000Z",
  "reportId": "RPT-1234567890-def456uvw",
  "messageCount": 1
}
```

**Error (400 Bad Request):**
```json
{
  "success": false,
  "error": "Missing required field: chatId" // or "message"
}
```

**Error (404 Not Found):**
```json
{
  "success": false,
  "error": "Chat session not found. Please create a session first using /api/train-report"
}
```

**Error (500 Internal Server Error):**
```json
{
  "success": false,
  "error": "Internal server error",
  "details": "Detailed error message"
}
```

### Example Usage

**JavaScript (fetch):**
```javascript
// Send a message to the chat
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    chatId: 'CHAT-1234567890-abc123xyz',
    message: 'What are the key findings in this report?'
  })
});

const data = await response.json();
console.log('AI Response:', data.aiResponse);
console.log('Timestamp:', data.timestamp);
```

**cURL:**
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "chatId": "CHAT-1234567890-abc123xyz",
    "message": "What are the key findings in this report?"
  }'
```

**React Component Example:**
```jsx
import { useState } from 'react';

function ChatWithReport() {
  const [chatId, setChatId] = useState(null);
  const [reportId, setReportId] = useState(null);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  // Step 1: Create chat session
  const createChatSession = async (reportIdInput = null) => {
    const res = await fetch('/api/train-report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reportId: reportIdInput })
    });
    const data = await res.json();

    if (data.success) {
      setChatId(data.chatId);
      setReportId(data.reportId);
    }
  };

  // Step 2: Send message
  const sendMessage = async () => {
    if (!chatId || !message) return;

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chatId, message })
    });
    const data = await res.json();

    if (data.success) {
      setResponse(data.aiResponse);
    }
  };

  return (
    <div>
      <button onClick={() => createChatSession()}>Start New Chat</button>

      {chatId && (
        <>
          <p>Chat ID: {chatId}</p>
          <p>Report ID: {reportId}</p>

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>

          {response && <div>AI: {response}</div>}
        </>
      )}
    </div>
  );
}

export default ChatWithReport;
```

---

## Complete Workflow Example

```javascript
// 1. Create a chat session for a report
const createSession = await fetch('/api/train-report', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ reportId: 'RPT-12345' }) // Optional
});

const { chatId, reportId } = await createSession.json();
console.log('Created chat:', chatId, 'for report:', reportId);

// 2. Send multiple messages to the chat
const messages = [
  'Give me a summary of this report',
  'What are the sentiment trends?',
  'Show me the key performance metrics'
];

for (const msg of messages) {
  const chatResponse = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chatId, message: msg })
  });

  const result = await chatResponse.json();
  console.log('User:', msg);
  console.log('AI:', result.aiResponse);
  console.log('---');
}
```

---

## Production Considerations

### Current Implementation
- Uses in-memory storage (data is lost on server restart)
- Mock AI responses (placeholder logic)

### For Production Deployment

1. **Database Integration:**
   - Replace in-memory `chatSessions` object with a database (MongoDB, PostgreSQL, etc.)
   - Store chat sessions, messages, and report metadata persistently

2. **AI Integration:**
   - Replace `generateAIResponse()` with actual AI API calls:
     - OpenAI GPT API
     - Anthropic Claude API
     - Azure OpenAI Service
     - Custom trained model

3. **Authentication:**
   - Add API key authentication or JWT validation
   - Protect endpoints with middleware

4. **Rate Limiting:**
   - Implement rate limiting to prevent abuse
   - Use libraries like `express-rate-limit`

5. **Session Management:**
   - Add session expiration logic
   - Implement cleanup for inactive sessions

6. **Error Handling:**
   - Enhanced error logging
   - Integration with monitoring tools (Sentry, DataDog, etc.)

7. **CORS Configuration:**
   - Configure proper CORS headers for cross-origin requests

---

## Testing the APIs

### Using the Development Server

1. Start the Next.js development server:
   ```bash
   npm run dev
   ```

2. The APIs will be available at:
   - `http://localhost:3000/api/train-report`
   - `http://localhost:3000/api/chat`

3. Test with the provided cURL commands or use tools like Postman or Insomnia.

---

## Error Codes

| Code | Description |
|------|-------------|
| 200 | Success - Request completed successfully |
| 201 | Created - New resource created successfully |
| 400 | Bad Request - Missing or invalid parameters |
| 404 | Not Found - Resource (chat session) not found |
| 405 | Method Not Allowed - Wrong HTTP method used |
| 500 | Internal Server Error - Server-side error |

---

## Support

For issues or questions, please refer to the main project documentation or contact the development team.
